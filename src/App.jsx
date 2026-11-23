import { useState } from 'react';
import './App.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className={`menu-overlay ${menuOpen ? 'active' : ''}`} id="menuOverlay">
        <div className="menu-header">
          <span className="logo">FORMA</span>
          <button type="button" className="close-btn" onClick={toggleMenu} aria-label="Закрыть меню">
          </button>
        </div>
        <nav className="menu-links">
          <a href="#about" className="menu-item" onClick={toggleMenu}>
            <sup>01</sup> О студии
          </a>
          <a href="#projects" className="menu-item" onClick={toggleMenu}>
            <sup>02</sup> Проекты
          </a>
          <a href="#clients" className="menu-item" onClick={toggleMenu}>
            <sup>03</sup> Клиенты
          </a>
          <a href="#contact" className="menu-item" onClick={toggleMenu}>
            <sup>04</sup> Контакты
          </a>
        </nav>
        <div className="menu-footer">
          <span>2026 FORMA STUDIO | Место где ты можешь жить лучше🤙</span>
          <div className="socials">
            <a href="#contact" onClick={toggleMenu}>Telegram</a>
            <a href="#contact" onClick={toggleMenu}>Instagram</a>
          </div>
        </div>
      </div>

      <header className="header">
        <a href="#" className="logo">FORMA</a>
        <button
          type="button"
          className="burger-btn"
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <section id="about" className="approach-section">
        <div className="approach-left">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Минималистичный интерьер"
            className="img-tall"
          />
        </div>

        <div className="approach-right">
          <div className="text-block">
            <h1>
              Узнайте больше
              <br />о нашем особом подходе
            </h1>
            <p>
              Наш процесс строится на тесном диалоге и чистой геометрии. В каждом проекте мы
              отсекаем лишнее, оставляя только функциональность, естественный свет и честные
              материалы: бетон, дерево и камень.
            </p>
            <p>
              Мы делим работу на три этапа: исследование пространства, проектирование и авторский
              надзор до финальной детали.
            </p>
            <a href="#contact" className="arrow-link">
              Связаться <span>⟶</span>
            </a>
          </div>

          <div className="small-img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
              alt="Детали архитектуры"
              className="img-wide"
            />
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="project-col-left">
          <img
            src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
            alt="Проект Nordic Pavilion"
            className="project-img-1"
          />

          <div className="project-info">
            <h2>Nordic Pavilion</h2>
            <p>
              Частная резиденция на побережье, спроектированная с учетом сурового климата и
              панорамного обзора.
            </p>
            <a href="#contact" className="arrow-link">
              Смотреть проект <span>⟶</span>
            </a>
          </div>
        </div>

        <div className="project-col-right">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
            alt="Бетонная галерея"
            className="project-img-2"
          />
        </div>
      </section>

      <section id="clients" className="dark-showcase">
        <div className="dark-overlay-text">FORMA</div>
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
          alt="Текстура и форма"
        />
      </section>

      {/* Подвал сайта */}
      <footer id="contact" className="footer">
        <div>2026 FORMA STUDIO</div>
        <div>hello@formastudio.ru</div>
      </footer>
    </>
  );
}
