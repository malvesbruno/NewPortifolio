import React, { useEffect, useRef } from 'react';
import qrCode from './static/QRCODE.png'

const Watch_contact = ({isEnglish}) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    // Get all elements with a certain class name
    const elements = document.getElementsByClassName('contact_to_move');
    const btn_element = document.getElementById('contact_btn');
    elementsRef.current = Array.from(elements);

    // Intersection Observer to observe visibility
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Change the class name of the element only when it is visible
          entry.target.classList.add('appear');
          btn_element.classList.add('hover_forced');
        } else {
          entry.target.classList.remove('appear');
          btn_element.classList.remove('hover_forced');
        }
      });
    });

    elementsRef.current.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup on unmount
    return () => {
      elementsRef.current.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  if (!isEnglish){
  return (
    <>
    <div className='about_contact contact_to_move'>
          <div className='sides'>
          <div className='side1'>
            <div className='info'>
              <div className='icon'><span className='map-pin'></span></div>
              <h1> Localização: </h1>
            </div>
            <p>Av.monte Alegre, 1327, Guarulhos, São Paulo, SP</p>
            <div className='info'>
              <div className='icon'><span className='email'></span></div>
              <h1> Email: </h1>
            </div>
            <p>malvesbruno0@gmail.com</p>
            <div className='info'>
              <div className='icon'><span className='cellphone'></span></div>
              <h1> Celular: </h1>
            </div>
            <p>+55 (11) 96817-9509</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.73785166698!2d-46.435898099999996!3d-23.397699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce897c3c1fbd0d%3A0xf59b3adec00d4ec0!2sAv.%20Monte%20Alegre%2C%201347%20-%20Cidade%20Soberana%2C%20Guarulhos%20-%20SP%2C%2007161-150!5e0!3m2!1spt-BR!2sbr!4v1708087216003!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className='side2'>
                <img src={qrCode}></img>
            </div>
            </div>
        </div>
            </>
  );
} else {
  return (
  <>
    <div className='about_contact contact_to_move'>
          <div className='sides'>
          <div className='side1'>
            <div className='info'>
              <div className='icon'><span className='map-pin'></span></div>
              <h1> Location: </h1>
            </div>
            <p>Av.monte Alegre, 1327, Guarulhos, São Paulo, SP</p>
            <div className='info'>
              <div className='icon'><span className='email'></span></div>
              <h1> Email: </h1>
            </div>
            <p>malvesbruno0@gmail.com</p>
            <div className='info'>
              <div className='icon'><span className='cellphone'></span></div>
              <h1> Cell: </h1>
            </div>
            <p>+55 (11) 96817-9509</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.73785166698!2d-46.435898099999996!3d-23.397699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce897c3c1fbd0d%3A0xf59b3adec00d4ec0!2sAv.%20Monte%20Alegre%2C%201347%20-%20Cidade%20Soberana%2C%20Guarulhos%20-%20SP%2C%2007161-150!5e0!3m2!1spt-BR!2sbr!4v1708087216003!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className='side2'>
                <img src={qrCode}></img>
            </div>
            </div>
        </div>
            </>
  );
}
};

export default Watch_contact;