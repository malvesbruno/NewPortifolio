import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import profile from './static/profile-img.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';




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
  const [lightOn, setLight] = useState(false);

  const [isClicked, setIsClicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);

  const [isEnglish, setEnglish] = useState(false);

  const handleEnglish = () => {
    setEnglish(!isEnglish)
    console.log(isEnglish)
  }

  const handleLight = () => {
    setLight(!lightOn)
    const body = document.body
    const app_header = document.getElementsByClassName('App-header')
    if (!lightOn){
      body.classList.add("light_mode")
      Array.from(app_header).forEach(el => el.classList.add("light_mode"))
    } else{
      body.classList.remove("light_mode")
      Array.from(app_header).forEach(el => el.classList.remove("light_mode"))
    }
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
        <aside className={`menu ${lightOn ? 'light_mode' : ''}`}>
          <LazyLoadImage src={profile} className='profile_picture' alt="profile" effect='blur' />
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
          <label className='switch'>
            <input type='checkbox' onClick={handleEnglish}></input>
            <span className="slider round">
            </span>
          </label>
          <div style={{width: "30%"}}></div>
          <label className='switch_light'>
            <input type='checkbox' onClick={handleLight}></input>
            <span className="slider_light round">
            </span>
          </label>
        </footer>
        </aside>
        <MenuOpen isEnglish={isEnglish} isMenuOpen={isMenuOpen} scrollToRef={scrollToRef}
        handleEnglish={handleEnglish} homeRef={homeRef} resumeRef={resumeRef} aboutRef={aboutRef}
        portiRef={portiRef} contactRef={contactRef} setmenuOpen={setMenuOpen} lightOn={lightOn} handleLight={handleLight}></MenuOpen>
        <div ref={homeRef}>
          < Watch_Home isEnglish={isEnglish} roles={roles} lightOn={lightOn}></Watch_Home>
        </div>
      </header>
      <header className='App-header'>
      <aside className={`page ${lightOn ? 'light_mode' : ''}`}>
        <h1 className='title_page' id='about' ref={aboutRef}>Sobre</h1>
          <div className={`about ${lightOn ? 'light_mode' : ''}`}>
          <p>Sou freelancer, atualmente estudando Ciência da Computação.<br></br> Estou procurando uma oportunidade para fazer parte de uma equipe e aprender mais com ela.</p>
          <div className='screen'>
            <Watch_picture />
            <Watch_Info isEnglish={isEnglish} />
          </div>
          </div>
      </aside> 
      </header>
      <header className='App-header'>
      <aside className={`page ${lightOn ? 'light_mode' : ''}`}>
        <h1 className='title_page' id='skill' ref={skillsRef}>Habilidades</h1>
          <div className={`about ${lightOn ? 'light_mode' : ''}`}>
            <Watch_Skill/>
          </div>
        </aside>
      </header>
      <header className='App-header'>
      <aside className={`page ${lightOn ? 'light_mode' : ''}`}>
          <h1 className='title_page' id="resume" ref={resumeRef}>Currículo</h1>
          <div className={`about ${lightOn ? 'light_mode' : ''}`}>
            <Watch_Ex />
            </div>
        </aside>
      </header>
      <header className='App-header'>
        <div ref={PortDetailRef} className='fullscreen'>
        {clickedIndex !== null && <Portfolio_details index={clickedIndex} isclicked={isClicked} onButtonClicked={handleItemClick}/>}
        </div>
        <aside className={`page_port ${lightOn? 'light_mode':''}`}>
        <h1 className='title_page' id="port" ref={portiRef}>Portifólio</h1>
        <div className='portifolio port_to_move'>
          <Watch_Port onItemClicked={handleItemClick} />
        </div>
        </aside>
      </header>
      <header className='App-header'>
      <aside className={`page ${lightOn ? 'light_mode' : ''}`}>
        <h1 className='title_page' id='contact' ref={contactRef}>Contato</h1>
        <Watch_contact lightOn={lightOn}></Watch_contact>
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
        <aside className={`menu ${lightOn ? 'light_mode' : ''}`}>
          <LazyLoadImage src={profile} className='profile_picture' alt="profile" effect='blur'/>
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
          <label className='switch'>
            <input type='checkbox' onClick={handleEnglish}></input>
            <span className="slider round">
            </span>
          </label>
          <div style={{width: "30%"}}></div>
          <label className='switch_light'>
            <input type='checkbox' onClick={handleLight}></input>
            <span className="slider_light round">
            </span>
          </label>
        </footer>
        </aside>
        <MenuOpen isEnglish={isEnglish} isMenuOpen={isMenuOpen} scrollToRef={scrollToRef}
        handleEnglish={handleEnglish} homeRef={homeRef} resumeRef={resumeRef} aboutRef={aboutRef}
        portiRef={portiRef} contactRef={contactRef} setmenuOpen={setMenuOpen} lightOn={lightOn} handleLight={handleLight}></MenuOpen>
        <div ref={homeRef}>
          < Watch_Home isEnglish={isEnglish} roles={roles_en} lightOn={lightOn}></Watch_Home>
        </div>
      </header>
      <header className='App-header'>
      <aside className={`page ${lightOn ? 'light_mode' : ''}`}>
        <h1 className='title_page' id='about' ref={aboutRef}>About</h1>
          <div className={`about ${lightOn ? 'light_mode' : ''}`}>
          <p>I'm a freelancer, currently studying Computer Science.<br></br> I'm looking for an opportunity to be part of a team and learn more from it.</p>
          <div className='screen'>
            <Watch_picture />
            <Watch_Info isEnglish={isEnglish}/>
          </div>
          </div>
      </aside> 
      </header>
      <header className='App-header'>
      <aside className={`page ${lightOn ? 'light_mode' : ''}`}>
        <h1 className='title_page' id='skill' ref={skillsRef}>Skills</h1>
          <div className={`about ${lightOn ? 'light_mode' : ''}`}>
            <Watch_Skill/>
          </div>
        </aside>
      </header>
      <header className='App-header'>
        <aside className={`page ${lightOn ? 'light_mode' : ''}`}>
          <h1 className='title_page' id="resume" ref={resumeRef}>Resume</h1>
          <div className={`about ${lightOn ? 'light_mode' : ''}`}>
            <Watch_Ex isEnglish={isEnglish} />
            </div>
        </aside>
      </header>
      <header className='App-header'>
      <div ref={PortDetailRef} className='fullscreen'>
        {clickedIndex !== null && <Portfolio_details index={clickedIndex} isclicked={isClicked} onButtonClicked={handleItemClick}/>}
        </div>
        <aside className={`page_port ${lightOn? 'light_mode':''}`}>
        <h1 className='title_page' id="port" ref={portiRef}>Portfolio</h1>
        <div className='portifolio port_to_move'>
          <Watch_Port onItemClicked={handleItemClick} />
        </div>
        </aside>
      </header>
      <header className='App-header'>
      <aside className={`page ${lightOn ? 'light_mode' : ''}`}>
        <h1 className='title_page' id='contact' ref={contactRef}>Contact</h1>
        <Watch_contact isEnglish={isEnglish} lightOn={lightOn}></Watch_contact>
        </aside>
      </header>
    </div>
    </Router>
  );
}
}

export default App;
