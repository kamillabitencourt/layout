import React, { useState, useEffect } from "react";

const sliderItems = [
  {
    id: 1,
    tipo: "Artigo",
    titulo: "Investimentos em Educação",
    resumo: "Conheça as ações para melhorar o ensino público e garantir acesso a todos.",
  },
  {
    id: 2,
    tipo: "Notícia",
    titulo: "Waldenor participa de audiência pública",
    resumo: "Debates importantes sobre infraestrutura e desenvolvimento sustentável na Bahia.",
  },
  {
    id: 3,
    tipo: "Release",
    titulo: "Novo programa social lançado",
    resumo: "Confira os detalhes do programa que visa apoiar famílias vulneráveis.",
  },
];

const destaqueItems = [
  {
    title: "Projetos Aprovados",
    number: 25,
    description: "Projetos que beneficiaram a educação e saúde",
    icon: "📜",
  },
  {
    title: "Visitas Comunitárias",
    number: 80,
    description: "Encontros e reuniões com a população",
    icon: "🤝",
  },
  {
    title: "Leis Propostas",
    number: 15,
    description: "Leis focadas em direitos sociais e econômicos",
    icon: "⚖️",
  },
];

const eventos = [
  {
    ano: "1990s",
    descricao: "Ingressa como professor da UESB e inicia militância política.",
    icon: "🎓",
  },
  {
    ano: "2003–2010",
    descricao: "Reitor da Universidade Estadual do Sudoeste da Bahia (UESB).",
    icon: "🏛️",
  },
  {
    ano: "2011–presente",
    descricao: "Eleito deputado federal, destacando-se em pautas sociais e educacionais.",
    icon: "📋",
  },
  {
    ano: "2020",
    descricao: "Referência em defesa da democracia e dos serviços públicos no Congresso.",
    icon: "🛡️",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ fontFamily: "'Montserrat', sans-serif", color: "#1a1a1a" }}>
      {/*slider destaque*/}
      <section
        style={{
          maxWidth: 1200,
          margin: "4rem auto",
          padding: "0 2rem",
          borderRadius: 12,
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          backgroundColor: "#fff0f0",
        }}
      >
        <div style={{ padding: "2rem 3rem", minHeight: 220 }}>
          {sliderItems.map((item, index) => (
            <article
              key={item.id}
              style={{ display: current === index ? "block" : "none" }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: "#a30000",
                  textTransform: "uppercase",
                }}
              >
                {item.tipo}
              </span>
              <h2 style={{ fontSize: 28, margin: "0.5rem 0", color: "#1a1a1a" }}>
                {item.titulo}
              </h2>
              <p style={{ fontSize: 18, color: "#333" }}>{item.resumo}</p>
            </article>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            paddingBottom: "1rem",
          }}
        >
          {sliderItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                border: "none",
                backgroundColor: current === idx ? "#a30000" : "#ccc",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </section>

      {/*bio*/}
      <section
        style={{
          maxWidth: 1100,
          margin: "4rem auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "3rem 2rem",
          backgroundColor: "#fff",
          boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
          borderRadius: 12,
          textAlign: "center",
        }}
      >
        <img
          src="/images/waldenor.jpg"
          alt="Waldenor"
          style={{
            width: 200,
            borderRadius: "50%",
            marginBottom: "1.5rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        />
        <h2 style={{ fontSize: 32, color: "#a30000", marginBottom: "1rem" }}>
          Waldenor Pereira
        </h2>
        <p
          style={{
            fontSize: 18,
            color: "#444",
            lineHeight: 1.6,
            maxWidth: 800,
          }}
        >
          Economista, professor universitário e deputado federal baiano. Waldenor atua firmemente
          na defesa da educação pública, da democracia e das políticas sociais que promovem dignidade
          ao povo. Sua trajetória é marcada pela luta por justiça, direitos e progresso para todos.
        </p>
      </section>

    {/*linhado tempo*/}
<section
  style={{
    maxWidth: 1000,
    margin: "4rem auto",
    padding: "2rem 1rem",
    backgroundColor: "#fdf0f0",
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    userSelect: "none",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: 28,
      color: "#730000",
      marginBottom: "2rem",
    }}
  >
    Linha do Tempo
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
      padding: "0 20px",
    }}
  >
    {/*linha da linha do tempo*/}
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: 20,
        right: 20,
        height: 4,
        backgroundColor: "#a30000",
        borderRadius: 2,
        zIndex: 0,
      }}
    />

    {eventos.map(({ ano, descricao, icon }, i) => (
      <div
        key={ano}
        style={{
          backgroundColor: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(163, 0, 0, 0.15)",
          padding: "1rem",
          textAlign: "center",
          flex: 1,
          maxWidth: 200,
          position: "relative",
          zIndex: 1,
          margin: "0 8px",
        }}
      >
        <div
          style={{
            fontSize: 40,
            color: "#a30000",
            marginBottom: "0.5rem",
          }}
          aria-label={`Ícone representando o evento de ${ano}`}
        >
          {icon}
        </div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: 18,
            color: "#730000",
            marginBottom: 6,
          }}
        >
          {ano}
        </div>
        <p style={{ fontSize: 14, color: "#444", lineHeight: 1.4 }}>
          {descricao}
        </p>

        
        <div
        />
      </div>
    ))}
  </div>
</section>


      {/*destques*/}
      <section
        style={{
          padding: "2rem",
          background: "#fff0f0",
          borderRadius: 12,
          margin: "4rem auto",
          maxWidth: 900,
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#730000",
          }}
        >
          Destaques do Mandato
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {destaqueItems.map(({ title, number, description, icon }) => (
            <div
              key={title}
              style={{
                background: "white",
                padding: "1.5rem",
                borderRadius: 10,
                width: 250,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 40 }}>{icon}</div>
              <h3 style={{ marginTop: 12, color: "#a30000" }}>{title}</h3>
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  margin: "8px 0",
                  color: "#730000",
                }}
              >
                {number}
              </p>
              <p style={{ color: "#555" }}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/*ctts*/}
      <section
        style={{
          background: "#fce5e5",
          textAlign: "center",
          padding: "3rem 1rem",
          marginTop: "4rem",
        }}
      >
        <h2 style={{ fontSize: 28, color: "#730000", marginBottom: "1rem" }}>
          Fale com o mandato
        </h2>
        <p style={{ color: "#333", fontSize: 18, marginBottom: "2rem" }}>
          Estamos à disposição para ouvir você. Entre em contato com nossa equipe:
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:waldenor@email.com"
            style={{
              background: "#a30000",
              color: "#fff",
              padding: "0.8rem 2rem",
              borderRadius: 6,
              textDecoration: "none",
              fontWeight: 600,
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "all 0.3s",
            }}
          >
            ✉️ Enviar E-mail
          </a>
          <a
            href="https://www.instagram.com/waldenor/"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#a30000",
              color: "#fff",
              padding: "0.8rem 2rem",
              borderRadius: 6,
              textDecoration: "none",
              fontWeight: 600,
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "all 0.3s",
            }}
          >
            📸 Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
