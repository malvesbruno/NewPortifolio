import React from 'react';
import './App.css';
import { useState, useRef } from 'react';
import profile from './static/profile-img.jpg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import packageJson from '../package.json';

import Watch_picture from './watcher';
import Watch_Info from './watch_info';
import Watch_Skill from './watch_skills';
import Watch_Ex from './watch_experience';
import Watch_Port from './watch_port';
import Watch_contact from './watch_contact';
import Portfolio_details from './portifolio';
import Watch_Home from './watch_home';
import Menu_btn from './menu';
import useMediaQuery from './media-query';
import MenuOpen from './menu_open';

let roles = [
  'Desenvolvedor Full-Stack',
  'Freelancer',
  'Ciêntista de Dados',
  'Apaixonado pela Programação'
];

let roles_en = [
  'Full-Stack Developer',
  'Freelancer',
  'Data Scientist',
  'Passionate about programming'
];

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);
  const portiRef = useRef(null);
  const contactRef = useRef(null);
  const PortDetailRef = useRef(null);

  const [isClicked, setIsClicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [isEnglish, setEnglish] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const isSmallScreen = useMediaQuery('(max-width: 769px)');

  const handleEnglish = () => {
    setEnglish(!isEnglish);
    console.log(isEnglish);
  };

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleItemClick = (index) => {
    setIsClicked(!isClicked);
    setClickedIndex(index);
    if (isSmallScreen) {
      scrollToRef(PortDetailRef);
    }
  };

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <Router basename={new URL(packageJson.homepage).pathname}>
      <div className="App">
        <Menu_btn isSmallScreen={isSmallScreen} handleMenuOpen={handleMenuOpen} isMenuOpen={isMenuOpen}></Menu_btn>
        <header className="App-header">
          <aside className='menu'>
            <img src={profile} className='profile_picture' alt="profile" />
            <p>Bruno Massuete Alves</p>
            <div className='list-buttons'>
              <button><a href='https://wa.me/+5511968179509'><span className="whatsapp"></span></a></button>
              <button><a href='https://github.com/malvesbruno'><span className="github"></span></a></button>
              <button><a href='https://join.skype.com/invite/nYTYmlHRxFRE'><span className="skype"></span></a></button>
              <button><a href='https://www.linkedin.com/in/bruno-massuete-7a91b3234/'><span className="linkedin"></span></a></button>
              <button><a href='https://malvesbruno.github.io/Curriculum/'><span className='curriculum'></span></a></button>
            </div>
            <div className='menu-items'>
              <ul>
                <li><Link to="/"><span className='home'></span>{isEnglish ? 'Home' : 'Início'}</Link></li>
                <li><Link to="/about"><span className='person'></span>{isEnglish ? 'About' : 'Sobre'}</Link></li>
                <li><Link to="/resume"><span className='paper'></span>{isEnglish ? 'Resume' : 'Currículo'}</Link></li>
                <li><Link to="/portfolio"><span className='book'></span>{isEnglish ? 'Portfolio' : 'Portifólio'}</Link></li>
                <li><Link to="/contact"><span className='envelope'></span>{isEnglish ? 'Contact' : 'Contato'}</Link></li>
              </ul>
            </div>
            <footer>
              <p>En</p>
              <label className='switch'>
                <input type='checkbox' onClick={handleEnglish}></input>
                <span className="slider round"></span>
              </label>
              <p>Pt</p>
            </footer>
          </aside>
          <MenuOpen isEnglish={isEnglish} isMenuOpen={isMenuOpen} scrollToRef={scrollToRef}
            handleEnglish={handleEnglish} homeRef={homeRef} resumeRef={resumeRef} aboutRef={aboutRef}
            portiRef={portiRef} contactRef={contactRef} setmenuOpen={setMenuOpen}></MenuOpen>
        </header>

        <Routes>
          <Route path="/" element={<Watch_Home isEnglish={isEnglish} roles={isEnglish ? roles_en : roles} />} />
          <Route path="/about" element={
            <aside className='page'>
              <h1 className='title_page' ref={aboutRef}>{isEnglish ? 'About' : 'Sobre'}</h1>
              <div className='about'>
                <p>{isEnglish ? 'I\'m a freelancer, currently studying Computer Science. I\'m looking for an opportunity to be part of a team and learn more from it.' : 'Sou freelancer, atualmente estudando Ciência da Computação. Estou procurando uma oportunidade para fazer parte de uma equipe e aprender mais com ela.'}</p>
                <div className='screen'>
                  <Watch_picture />
                  <Watch_Info isEnglish={isEnglish} />
                </div>
              </div>
            </aside>
          } />
          <Route path="/resume" element={
            <aside className='page'>
              <h1 className='title_page' ref={resumeRef}>{isEnglish ? 'Resume' : 'Currículo'}</h1>
              <div className='about'>
                <Watch_Ex isEnglish={isEnglish} />
              </div>
            </aside>
          } />
          <Route path="/skills" element={
            <aside className='page'>
              <h1 className='title_page' ref={skillsRef}>{isEnglish ? 'Skills' : 'Habilidades'}</h1>
              <div className='about'>
                <Watch_Skill />
              </div>
            </aside>
          } />
          <Route path="/portfolio" element={
            <aside className='page'>
              <h1 className='title_page' ref={portiRef}>{isEnglish ? 'Portfolio' : 'Portifólio'}</h1>
              <Watch_Port onItemClicked={handleItemClick} />
              {clickedIndex !== null && <Portfolio_details index={clickedIndex} isclicked={isClicked} onButtonClicked={handleItemClick} />}
            </aside>
          } />
          <Route path="/contact" element={
            <aside className='page'>
              <h1 className='title_page' ref={contactRef}>{isEnglish ? 'Contact' : 'Contato'}</h1>
              <Watch_contact isEnglish={isEnglish} />
            </aside>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
