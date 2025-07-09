import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

// Importe os ícones que você usa (certifique-se de ter instalado: npm install react-icons)
import { FaGraduationCap, FaHandsHelping, FaBalanceScale, FaChartLine, FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dados dos slides do carrossel
  const slides = [
    {
      type: "Educação",
      title: "Investimento em Universidades",
      summary: "Waldenor Pereira destinou recursos significativos para a expansão e melhoria das universidades federais e estaduais da Bahia, garantindo acesso e qualidade no ensino superior.",
      image: "/images/educacao.jpg"
    },
    {
      type: "Agricultura Familiar",
      title: "Apoio ao Homem do Campo",
      summary: "Fortalecimento da agricultura familiar com programas de incentivo, acesso a crédito e assistência técnica, promovendo desenvolvimento rural sustentável na Bahia.",
      image: "/images/Walnews_1.png"
    },
    {
      type: "Infraestrutura",
      title: "Obras e Desenvolvimento",
      summary: "Atuação fundamental na viabilização de obras de infraestrutura que transformaram diversas cidades baianas, melhorando a qualidade de vida da população.",
      image: "/images/Walobras_2.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Efeito para trocar de slide automaticamente
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 8000); // Muda de slide a cada 8 segundos

    return () => clearInterval(slideInterval); // Limpa o intervalo ao desmontar o componente
  }, [currentSlide]); // Dependência para reiniciar o intervalo quando o slide muda


  return (
    <main className={styles.main}>
      {/* Hero Banner - Imagem de destaque */}
      <section className={styles.heroBanner}>
        <img
          src="/images/Panel_3.png" // Sua imagem principal do banner
          alt="Waldenor Pereira Deputado Federal"
          className={styles.heroFullWidthImage}
        />
      </section>

      {/* Carrossel de Destaques */}
      <section className={styles.sliderSection}>
        <div className={styles.contentWrapper}> {/* Wrapper interno para centralizar conteúdo */}
            {slides.map((slide, index) => (
            <article
                key={index}
                className={`${styles.sliderArticle} ${
                index === currentSlide ? styles.sliderArticleActive : ""
                }`}
                style={{ display: index === currentSlide ? "block" : "none" }} // Controla a visibilidade
            >
                <img src={slide.image} alt={slide.title} className={styles.sliderImage} />
                <p className={styles.sliderType}>{slide.type}</p>
                <h3 className={styles.sliderTitle}>{slide.title}</h3>
                <p className={styles.sliderSummary}>{slide.summary}</p>
            </article>
            ))}
            <button onClick={prevSlide} className={`${styles.navButton} ${styles.prevButton}`}>
            <IoIosArrowBack />
            </button>
            <button onClick={nextSlide} className={`${styles.navButton} ${styles.nextButton}`}>
            <IoIosArrowForward />
            </button>
        </div>
      </section>

     {/* Seção Minha História (Bio) */}
      <section className={styles.bioSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.bioHeadingContainer}>
            <h2 className={styles.bioSectionTitle}>Minha História</h2>
          </div>
          {/* Nova estrutura para imagem e texto */}
          <img src={"/images/bio12.png"} alt="Waldenor Pereira" className={styles.bioFullImage} />
          <h3 className={styles.bioName}>Waldenor Pereira</h3>
          <p className={styles.bioDescription}>
            É economista, professor universitário e deputado federal pela Bahia, filiado ao Partido dos Trabalhadores (PT). Natural de Caculé, iniciou sua militância ainda jovem, no movimento estudantil, e foi um dos fundadores da CUT e do PT em Vitória da Conquista. Possui uma sólida trajetória acadêmica, tendo atuado como professor, pró-reitor e reitor da Universidade Estadual do Sudoeste da Bahia (UESB).
          </p>
          <p className={styles.bioDescription}>
            Na política, foi deputado estadual por dois mandatos e está em seu quarto mandato como deputado federal. É reconhecido por sua atuação na defesa da educação pública, da agricultura familiar e por destinar recursos para obras e serviços em diversas cidades baianas. Waldenor também se destaca pela participação ativa em comissões da Câmara dos Deputados, sendo um dos parlamentares mais bem avaliados do estado.
          </p>
        </div>
      </section>

      {/* Linha do Tempo (Exemplo de Seção com Ícones) */}
      <section className={styles.timelineSection}>
        <div className={styles.contentWrapper}> {/* Wrapper interno para centralizar conteúdo */}
            <h2 className={styles.timelineHeading}>Minha Trajetória</h2>
            <div className={styles.timelineContainer}>
            <div className={styles.timelineLine}></div> {/* Linha decorativa */}
            <div className={styles.timelineItem}>
                <FaGraduationCap className={styles.timelineIcon} />
                <p className={styles.timelineYear}>1980s</p>
                <p className={styles.timelineDescription}>Início da vida acadêmica e militância estudantil.</p>
            </div>
            <div className={styles.timelineItem}>
                <FaHandsHelping className={styles.timelineIcon} />
                <p className={styles.timelineYear}>1990s</p>
                <p className={styles.timelineDescription}>Fundação da CUT e PT em Vitória da Conquista.</p>
            </div>
            <div className={styles.timelineItem}>
                <FaBalanceScale className={styles.timelineIcon} />
                <p className={styles.timelineYear}>2000s</p>
                <p className={styles.timelineDescription}>Atuação como Reitor da UESB e Deputado Estadual.</p>
            </div>
            <div className={styles.timelineItem}>
                <FaChartLine className={styles.timelineIcon} />
                <p className={styles.timelineYear}>2010s</p>
                <p className={styles.timelineDescription}>Eleito Deputado Federal, foco em desenvolvimento.</p>
            </div>
            </div>
        </div>
      </section>

      {/* Destaques do Mandato */}
      <section className={styles.highlightsSection}>
        <div className={styles.contentWrapper}> {/* Wrapper interno para centralizar conteúdo */}
            <h2 className={styles.highlightsHeading}>Destaques do Mandato</h2>
            <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
                <FaGraduationCap className={styles.highlightIcon} />
                <h3 className={styles.highlightTitle}>Recursos para Educação</h3>
                <p className={styles.highlightNumber}>+R$50M</p>
                <p className={styles.highlightDescription}>Destinados para universidades e escolas na Bahia.</p>
            </div>
            <div className={styles.highlightCard}>
                <FaHandsHelping className={styles.highlightIcon} />
                <h3 className={styles.highlightTitle}>Apoio Social</h3>
                <p className={styles.highlightNumber}>+100</p>
                <p className={styles.highlightDescription}>Projetos e programas de inclusão social apoiados.</p>
            </div>
            <div className={styles.highlightCard}>
                <FaBalanceScale className={styles.highlightIcon} />
                <h3 className={styles.highlightTitle}>Leis Aprovadas</h3>
                <p className={styles.highlightNumber}>15</p>
                <p className={styles.highlightDescription}>Projetos de lei de sua autoria aprovados.</p>
            </div>
            </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className={styles.contactSection}>
        <div className={styles.contentWrapper}> {/* Wrapper interno para centralizar conteúdo */}
            <h2 className={styles.contactHeading}>Entre em Contato</h2>
            <p className={styles.contactText}>
            Fale diretamente com o deputado Waldenor Pereira e sua equipe.
            Sua participação é fundamental para construirmos um futuro melhor para a Bahia.
            </p>
            <div className={styles.contactLinks}>
            <a href="mailto:contato@waldenorpt.com.br" className={styles.contactButton}>
                <FaEnvelope /> Email
            </a>
            <a href="https://wa.me/5577999999999" target="_blank" rel="noopener noreferrer" className={styles.contactButton}>
                <FaWhatsapp /> WhatsApp
            </a>
            <a href="https://www.instagram.com/waldenor/" target="_blank" rel="noopener noreferrer" className={styles.contactButton}>
                <FaInstagram /> Instagram
            </a>
            </div>
        </div>
      </section>

      {/* Você pode adicionar um componente Footer aqui se tiver um */}
      {/* <Footer /> */}
    </main>
  );
}