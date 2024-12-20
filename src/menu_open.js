import React from "react";
import profile from './static/profile-img.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const MenuOpen = ({isMenuOpen, setmenuOpen, isEnglish, scrollToRef, handleEnglish, homeRef, aboutRef, resumeRef, portiRef, contactRef, lightOn, handleLight}) => {

    const scroll_toRef = (ref) => {
        scrollToRef(ref);
        setmenuOpen(!isMenuOpen);
    }

    if (isMenuOpen){
        if (!isEnglish){
        return (
            <>
            <aside className={`menu_open ${lightOn?'light_mode': ''}`}>
            <LazyLoadImage src={profile} className='profile_picture' alt="profile" effect="blur"/>
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
                <li onClick={() => scroll_toRef(homeRef)} id='home_btn'><a><span className='home'></span>Início</a></li>
                <li onClick={() => scroll_toRef(aboutRef)} id='about_btn'><a><span className='person'></span>Sobre</a></li>
                <li onClick={() => scroll_toRef(resumeRef)} id='resume_btn'><a><span className='paper'></span>Currículo</a></li>
                <li onClick={() => scroll_toRef(portiRef)} id='porti_btn'><a><span className='book'></span>Portifólio</a></li>
                <li onClick={() => scroll_toRef(contactRef)} id='contact_btn'><a><span className='envelope'></span>Contato</a></li>
            </ul>
            </div>
            <footer>
            {isEnglish? (<label className='switch'>
                <input type='checkbox' onClick={handleEnglish} checked></input>
                <span class="slider round">
                </span>
            </label>) : (<label className='switch'>
                <input type='checkbox' onClick={handleEnglish}></input>
                <span class="slider round">
                </span>
            </label>)}

            {lightOn ? (
  <label className="switch">
    <input
      type="checkbox"
      onClick={handleLight}
      checked={lightOn} // Utilize o estado lightOn para controlar o checked
    />
    <span className="slider_light round"></span>
  </label>
) : (
  <label className="switch">
    <input
      type="checkbox"
      onClick={handleLight}
      checked={lightOn} // O mesmo aqui, garantindo o controle dinâmico
    />
    <span className="slider_light round"></span>
  </label>
)}

            </footer>
            </aside>
            </>
        );
} else {
    return(
        <>
            <aside className={`menu_open ${lightOn?'light_mode': ''}`}>
            <LazyLoadImage src={profile} className='profile_picture' alt="profile" effect="blur" />
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
                <li onClick={() => scroll_toRef(homeRef)} id='home_btn'><a><span className='home'></span>Home</a></li>
                <li onClick={() => scroll_toRef(aboutRef)} id='about_btn'><a><span className='person'></span>About</a></li>
                <li onClick={() => scroll_toRef(resumeRef)} id='resume_btn'><a><span className='paper'></span>Resume</a></li>
                <li onClick={() => scroll_toRef(portiRef)} id='porti_btn'><a><span className='book'></span>Portfolio</a></li>
                <li onClick={() => scroll_toRef(contactRef)} id='contact_btn'><a><span className='envelope'></span>Contact</a></li>
            </ul>
            </div>
            <footer>
            {isEnglish? (<label className='switch'>
                <input type='checkbox' onClick={handleEnglish} checked></input>
                <span class="slider round">
                </span>
            </label>) : (<label className='switch'>
                <input type='checkbox' onClick={handleEnglish}></input>
                <span class="slider round">
                </span>
            </label>)}


            {lightOn ? (
  <label className="switch">
    <input
      type="checkbox"
      onClick={handleLight}
      checked={lightOn} // Utilize o estado lightOn para controlar o checked
    />
    <span className="slider_light round"></span>
  </label>
) : (
  <label className="switch">
    <input
      type="checkbox"
      onClick={handleLight}
      checked={lightOn} // O mesmo aqui, garantindo o controle dinâmico
    />
    <span className="slider_light round"></span>
  </label>
)}
            </footer>
            </aside>
            </>
    )
}
};
}

export default MenuOpen;