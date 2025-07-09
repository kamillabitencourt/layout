import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";

const sliderItems = [
  {
    id: 1,
    tipo: "Artigo",
    titulo: "Investimentos em Educação",
    resumo: "Conheça as ações para melhorar o ensino público e garantir acesso a todos.",
    imageUrl: "/images/w1.jpg",
  },
  {
    id: 2,
    tipo: "Notícia",
    titulo: "Waldenor participa de audiência pública",
    resumo: "Debates importantes sobre infraestrutura e desenvolvimento sustentável na Bahia.",
    imageUrl: "/images/noticia.jpg",
  },
  {
    id: 3,
    tipo: "Release",
    titulo: "Novo programa social lançado",
    resumo: "Confira os detalhes do programa que visa apoiar famílias vulneráveis.",
    imageUrl: "/images/release.jpg",
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

  //muda automaticamente o carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderItems.length);
    }, 10000); //muda 10 segundos
    return () => clearInterval(interval); // limpa o intervalo ao desmontar o componente(click de usuario)
  }, []);

  //função p avanço de  slide
  const nextSlide = () => {
    setCurrent(current === sliderItems.length - 1 ? 0 : current + 1);
  };

  // Função para voltar slide
  const prevSlide = () => {
    setCurrent(current === 0 ? sliderItems.length - 1 : current - 1);
  };

  return (
    <main className={styles.main}>
      {/* HERO BANNER - seção principal com imagem de fundo*/}
      <section className={styles.heroBanner}>
        {/*caamada p a imagem de fundo que cobre tudo */}
        <div className={styles.heroImageOverlay}>
          <img
            src="/images/Panel_3.png" 
            alt="Waldenor Pereira Banner"
            className={styles.heroFullWidthImage}
          />
        </div>
    
        <div className={styles.heroContent}>
        </div>
      </section>

      {/* CARROSSEL DE DESTAQUES */}
      <section className={styles.sliderSection}>
        {sliderItems.map((item, index) => (
          <article
            key={item.id}

            className={`${styles.sliderArticle} ${
              current === index ? styles.sliderArticleActive : ""
            }`}

            style={{ display: current === index ? "block" : "none" }}
          >
            <img
              src={item.imageUrl}
              alt={item.titulo}
              className={styles.sliderImage}
            />
            <span className={styles.sliderType}>{item.tipo}</span>
            <h2 className={styles.sliderTitle}>{item.titulo}</h2>
            <p className={styles.sliderSummary}>{item.resumo}</p>
          </article>
        ))}

        {/*botoes de navegaçao do carrossel */}
        <button
          onClick={prevSlide}
          aria-label="Slide anterior"
          className={`${styles.navButton} ${styles.prevButton}`}
        >
          &#10094; {/* caractere p seta esquerda */}
        </button>
        <button
          onClick={nextSlide}
          aria-label="Próximo slide"
          className={`${styles.navButton} ${styles.nextButton}`}
        >
          &#10095; {/*caractere p seta direita */}
        </button>
      </section>

      {/* BIO */}
      <section className={styles.bioSection}>
        <img src="/images/waldenor.jpg" alt="Waldenor" className={styles.bioImage} />
        <h2 className={styles.bioTitle}>Waldenor Pereira</h2>
        <p className={styles.bioDescription}>
          Economista, professor universitário e deputado federal baiano. Waldenor atua firmemente
          na defesa da educação pública, da democracia e das políticas sociais que promovem dignidade
          ao povo. Sua trajetória é marcada pela luta por justiça, direitos e progresso para todos.
        </p>
      </section>

      {/* LINHA DO TEMPO  */}
      <section className={styles.timelineSection}>
        <h2 className={styles.timelineHeading}>Linha do Tempo</h2>

        <div className={styles.timelineContainer}>
          {/* A linha decorativa da linha do tempo ???????????? bom? talvez */}
          <div className={styles.timelineLine} />

          {eventos.map(({ ano, descricao, icon }) => (
            <div key={ano} className={styles.timelineItem}>
              <div className={styles.timelineIcon} aria-label={`Ícone representando o evento de ${ano}`}>
                {icon}
              </div>
              <div className={styles.timelineYear}>{ano}</div>
              <p className={styles.timelineDescription}>{descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESTAQUES DO MANDATO */}
      <section className={styles.highlightsSection}>
        <h2 className={styles.highlightsHeading}>Destaques do Mandato</h2>
        <div className={styles.highlightsGrid}>
          {destaqueItems.map(({ title, number, description, icon }) => (
            <div
              key={title}
              className={styles.highlightCard}
             
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div className={styles.highlightIcon}>{icon}</div>
              <h3 className={styles.highlightTitle}>{title}</h3>
              <p className={styles.highlightNumber}>{number}</p>
              <p className={styles.highlightDescription}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section className={styles.contactSection}>
        <h2 className={styles.contactHeading}>Fale com o mandato</h2>
        <p className={styles.contactText}>
          Estamos à disposição para ouvir você. Entre em contato com nossa equipe:
        </p>
        <div className={styles.contactLinks}>
          <a
            href="mailto:waldenor@email.com"
            className={styles.contactButton}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#730000")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#a30000")}
          >
            ✉️ Enviar E-mail
          </a>
          <a
            href="https://www.instagram.com/waldenor/"
            target="_blank"
            rel="noreferrer"
            className={styles.contactButton}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#730000")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#a30000")}
          >
            📸 Instagram
          </a>
        </div>
      </section>
    </main>
  );
}