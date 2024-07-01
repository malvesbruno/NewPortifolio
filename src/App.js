import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import profile from './static/profile-img.jpg';




import Watch_picture from './watcher';
import Watch_Info from './watch_info';
import { useRef } from 'react';
import Watch_Skill from './watch_skills';
import Watch_Ex from './watch_experience';
import Watch_Port from './watch_port';
import Watch_contact from './watch_contact';
import Portfolio_details from './portifolio';
import Watch_Home from './watch_home';
import Menu_btn from './menu';
import useMediaQuery from './media-query';
import MenuOpen from './menu_open';

import { HashRouter as Router } from 'react-router-dom';


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
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const resumeRef = useRef(null)
  const portiRef = useRef(null)
  const contactRef = useRef(null)
  const PortDetailRef = useRef(null)

  const [isClicked, setIsClicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);

  const [isEnglish, setEnglish] = useState(false);

  const handleEnglish = () => {
    setEnglish(!isEnglish)
    console.log(isEnglish)
  }

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleItemClick = (index) => {
    setIsClicked(!isClicked);
    setClickedIndex(index);
    if (isSmallScreen){
      scrollToRef(PortDetailRef)
    }

  };

  

  const isSmallScreen = useMediaQuery('(max-width: 769px)')

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () =>{
    setMenuOpen(!isMenuOpen)
    console.log(isMenuOpen)
  }

  if (!isEnglish){
  return (
    <Router>
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
            <li onClick={() => scrollToRef(homeRef)} id='home_btn'><a><span className='home'></span>Início</a></li>
            <li onClick={() => scrollToRef(aboutRef)} id='about_btn'><a><span className='person'></span>Sobre</a></li>
            <li onClick={() => scrollToRef(resumeRef)} id='resume_btn'><a><span className='paper'></span>Currículo</a></li>
            <li onClick={() => scrollToRef(portiRef)} id='porti_btn'><a><span className='book'></span>Portifólio</a></li>
            <li onClick={() => scrollToRef(contactRef)} id='contact_btn'><a><span className='envelope'></span>Contato</a></li>
          </ul>
        </div>
        <footer>
          <p>En</p>
          <label className='switch'>
            <input type='checkbox' onClick={handleEnglish}></input>
            <span class="slider round">
            </span>
          </label>
          <p>Pt</p>
        </footer>
        </aside>
        <MenuOpen isEnglish={isEnglish} isMenuOpen={isMenuOpen} scrollToRef={scrollToRef}
        handleEnglish={handleEnglish} homeRef={homeRef} resumeRef={resumeRef} aboutRef={aboutRef}
        portiRef={portiRef} contactRef={contactRef} setmenuOpen={setMenuOpen}></MenuOpen>
        <div ref={homeRef}>
          < Watch_Home isEnglish={isEnglish} roles={roles}></Watch_Home>
        </div>
      </header>
      <header className='App-header'>
      <aside className='page'>
        <h1 className='title_page' id='about' ref={aboutRef}>Sobre</h1>
          <div className='about'>
          <p>Sou freelancer, atualmente estudando Ciência da Computação.<br></br> Estou procurando uma oportunidade para fazer parte de uma equipe e aprender mais com ela.</p>
          <div className='screen'>
            <Watch_picture />
            <Watch_Info isEnglish={isEnglish} />
          </div>
          </div>
      </aside> 
      </header>
      <header className='App-header'>
        <aside className='page'>
        <h1 className='title_page' id='skill' ref={skillsRef}>Habilidades</h1>
          <div className='about'>
            <Watch_Skill/>
          </div>
        </aside>
      </header>
      <header className='App-header'>
        <aside className='page'>
          <h1 className='title_page' id="resume" ref={resumeRef}>Currículo</h1>
          <div className='about'>
            <Watch_Ex />
            </div>
        </aside>
      </header>
      <header className='App-header'>
        <div ref={PortDetailRef} className='fullscreen'>
        {clickedIndex !== null && <Portfolio_details index={clickedIndex} isclicked={isClicked} onButtonClicked={handleItemClick}/>}
        </div>
        <aside className='page_port'>
        <h1 className='title_page' id="port" ref={portiRef}>Portifólio</h1>
        <Watch_Port onItemClicked={handleItemClick} />
        </aside>
      </header>
      <header className='App-header'>
        <aside className='page'>
        <h1 className='title_page' id='contact' ref={contactRef}>Contato</h1>
        <Watch_contact></Watch_contact>
        </aside>
      </header>
    </div>
    </Router>
  );
} else {
  return (
    <Router>
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
            <li onClick={() => scrollToRef(homeRef)} id='home_btn'><a><span className='home'></span>Home</a></li>
            <li onClick={() => scrollToRef(aboutRef)} id='about_btn'><a><span className='person'></span>About</a></li>
            <li onClick={() => scrollToRef(resumeRef)} id='resume_btn'><a><span className='paper'></span>Resume</a></li>
            <li onClick={() => scrollToRef(portiRef)} id='porti_btn'><a><span className='book'></span>Portfolio</a></li>
            <li onClick={() => scrollToRef(contactRef)} id='contact_btn'><a><span className='envelope'></span>Contact</a></li>
          </ul>
        </div>
        <footer>
          <p>En</p>
          <label className='switch'>
            <input type='checkbox' onClick={handleEnglish}></input>
            <span class="slider round">
            </span>
          </label>
          <p>Pt</p>
        </footer>
        </aside>
        <MenuOpen isEnglish={isEnglish} isMenuOpen={isMenuOpen} scrollToRef={scrollToRef}
        handleEnglish={handleEnglish} homeRef={homeRef} resumeRef={resumeRef} aboutRef={aboutRef}
        portiRef={portiRef} contactRef={contactRef} setmenuOpen={setMenuOpen}></MenuOpen>
        <div ref={homeRef}>
          < Watch_Home isEnglish={isEnglish} roles={roles_en}></Watch_Home>
        </div>
      </header>
      <header className='App-header'>
      <aside className='page'>
        <h1 className='title_page' id='about' ref={aboutRef}>About</h1>
          <div className='about'>
          <p>I'm a freelancer, currently studying Computer Science.<br></br> I'm looking for an opportunity to be part of a team and learn more from it.</p>
          <div className='screen'>
            <Watch_picture />
            <Watch_Info isEnglish={isEnglish}/>
          </div>
          </div>
      </aside> 
      </header>
      <header className='App-header'>
        <aside className='page'>
        <h1 className='title_page' id='skill' ref={skillsRef}>Skills</h1>
          <div className='about'>
            <Watch_Skill/>
          </div>
        </aside>
      </header>
      <header className='App-header'>
        <aside className='page'>
          <h1 className='title_page' id="resume" ref={resumeRef}>Resume</h1>
          <div className='about'>
            <Watch_Ex isEnglish={isEnglish} />
            </div>
        </aside>
      </header>
      <header className='App-header'>
      <div ref={PortDetailRef} className='fullscreen'>
        {clickedIndex !== null && <Portfolio_details index={clickedIndex} isclicked={isClicked} onButtonClicked={handleItemClick}/>}
        </div>
        <aside className='page_port'>
        <h1 className='title_page' id="port" ref={portiRef}>Portfolio</h1>
        <Watch_Port onItemClicked={handleItemClick} />
        </aside>
      </header>
      <header className='App-header'>
        <aside className='page'>
        <h1 className='title_page' id='contact' ref={contactRef}>Contact</h1>
        <Watch_contact isEnglish={isEnglish}></Watch_contact>
        </aside>
      </header>
    </div>
    </Router>
  );
}
}

export default App;
