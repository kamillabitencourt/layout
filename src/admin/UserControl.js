import React, { useState, useEffect } from 'react';
import './UserControl.css';

const UserControl = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', username: '', email: '', password: '', role: 'user', permissions: [] });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const roles = ['admin', 'moderator', 'editor', 'user'];
    const contentPermissions = ['fotografia', 'videos', 'release', 'imprensa', 'artigos'];

    const addFormRoles = ['Usuário', 'admin'];


    useEffect(() => {
        const fetchUsers = async () => {
            setMessage('');
            setError('');
            try {
                const token = localStorage.getItem('userToken');
                const response = await fetch('/api/users', { //ajustar a URL do endpoint da api
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (response.ok) {
                    setUsers(data.users);
                } else {
                    setError(data.message || 'Erro ao carregar usuários.');
                }
            } catch (err) {
                setError('Ocorreu um erro ao carregar usuários. Verifique a conexão com o backend.');
                console.error('Erro ao carregar usuários:', err);
            }
        };

        fetchUsers();
    }, []);

    const handleNewUserPermissionChange = (permission) => {
        setNewUser(prevUser => {
            const currentPermissions = prevUser.permissions;
            if (currentPermissions.includes(permission)) {
                return { ...prevUser, permissions: currentPermissions.filter(p => p !== permission) };
            } else {
                return { ...prevUser, permissions: [...currentPermissions, permission] };
            }
        });
    };

    const handleUserPermissionChange = async (userId, permission, isChecked) => {
        setMessage('');
        setError('');
        try {
            const token = localStorage.getItem('userToken');
            const userToUpdate = users.find(u => u.id === userId);
            let newPermissions = isChecked
                ? [...userToUpdate.permissions, permission]
                : userToUpdate.permissions.filter(p => p !== permission);

            const response = await fetch(`/api/users/${userId}/permissions`, { //ajustar a URL do endpoint da api
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ permissions: newPermissions }),
            });
            const data = await response.json();
            if (response.ok) {
                setUsers(users.map(user => user.id === userId ? { ...user, permissions: newPermissions } : user));
                setMessage('Permissão de usuário atualizada!');
            } else {
                setError(data.message || 'Erro ao atualizar permissão.');
            }
        } catch (err) {
            setError('Erro ao atualizar permissão. Verifique a conexão com o backend.');
            console.error('Erro ao atualizar permissão:', err);
        }
    };
    const handleRoleChange = (e) => {
        const selectedRole = e.target.value;
        setNewUser(prevUser => {
            const newPermissions = selectedRole === 'admin' ? contentPermissions : [];
            return { ...prevUser, role: selectedRole, permissions: newPermissions };
        });
    };

    const handleAddUser = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (!newUser.name || !newUser.username || !newUser.email || !newUser.password || !newUser.role) {
            setError('Todos os campos (Nome, Nome de Usuário, Email, Senha, Permissão) são obrigatórios.');
            return;
        }
        if (newUser.password.length < 6) {
            setError('A senha deve ter no mínimo 6 caracteres.');
            return;
        }
        if (!newUser.email.includes('@') || !newUser.email.includes('.')) {
            setError('Por favor, insira um email válido.');
            return;
        }

        try {
            const token = localStorage.getItem('userToken');
            const response = await fetch('/api/users', { //ajustar a URL do endpoint da api
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(newUser),
            });
            const data = await response.json();
            if (response.ok) {
                setUsers([...users, data.user]);
                setNewUser({ name: '', username: '', email: '', password: '', role: 'user', permissions: [] }); 
                setMessage('Usuário adicionado com sucesso!');
            } else {
                setError(data.message || 'Erro ao adicionar usuário.');
            }
        } catch (err) {
            setError('Erro ao adicionar usuário. Verifique a conexão com o backend.');
            console.error('Erro ao adicionar usuário:', err);
        }
    };

    const handleDeleteUser = async (userId) => {
        if (window.confirm('Tem certeza que deseja deletar este usuário?')) {
            setMessage('');
            setError('');
            try {
                const token = localStorage.getItem('userToken');
                const response = await fetch(`/api/users/${userId}`, {//ajustar a URL do endpoint da api
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.ok) {
                    setUsers(users.filter(user => user.id !== userId));
                    setMessage('Usuário deletado com sucesso!');
                } else {
                    const data = await response.json();
                    setError(data.message || 'Erro ao deletar usuário.');
                }
            } catch (err) {
                setError('Erro ao deletar usuário. Verifique a conexão com o backend.');
                console.error('Erro ao deletar usuário:', err);
            }
        }
    };

    return (
        <div className="user-control-container">
            <h3>Controle de Usuários</h3>
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}

            {}
            <div className="add-user-section">
                <h4>Adicionar Novo Usuário</h4>
                <form onSubmit={handleAddUser}>
                    <input
                        type="text"
                        placeholder="Nome Completo"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Nome de Usuário"
                        value={newUser.username}
                        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={newUser.password}
                        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                        required
                    />
                    <select
                        value={newUser.role}
                        onChange={handleRoleChange}
                        required
                    >
                        {addFormRoles.map(role => (
                            <option key={role} value={role}>{role.charAt(0).toUpperCase() + role.slice(1)}</option>
                        ))}
                    </select>

                    {}
                    {newUser.role !== 'admin' && (
                        <div className="permissions-checkbox-group">
                            <label>Permissões de Conteúdo:</label>
                            {contentPermissions.map(permission => (
                                <div key={permission} className="permission-item">
                                    <input
                                        type="checkbox"
                                        id={`new-user-${permission}`}
                                        value={permission}
                                        checked={newUser.permissions.includes(permission)}
                                        onChange={() => handleNewUserPermissionChange(permission)}
                                    />
                                    <label htmlFor={`new-user-${permission}`}>
                                        {permission.charAt(0).toUpperCase() + permission.slice(1)}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                    <button type="submit">Adicionar Usuário</button>
                </form>
            </div>

            {}
            <div className="user-list-section">
                <h4>Usuários Existentes</h4>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Nome de Usuário</th> {}
                            <th>Email</th>
                            <th>Permissão</th>
                            <th>Permissões de Conteúdo</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td> {}
                                <td>
                                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                </td>
                                <td>
                                    {user.role === 'admin' ? (
                                        <strong>Todas as Permissões (Admin)</strong>
                                    ) : (
                                        <div className="user-permissions-display">
                                            {contentPermissions.map(permission => (
                                                <div key={`${user.id}-${permission}`} className="permission-item">
                                                    <input
                                                        type="checkbox"
                                                        id={`${user.id}-${permission}`}
                                                        value={permission}
                                                        checked={user.permissions.includes(permission)}
                                                        onChange={(e) => handleUserPermissionChange(user.id, permission, e.target.checked)}
                                                    />
                                                    <label htmlFor={`${user.id}-${permission}`}>
                                                        {permission.charAt(0).toUpperCase() + permission.slice(1)}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user.id)} className="delete-button">Deletar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserControl;