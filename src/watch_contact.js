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
            <p>Guarulhos, São Paulo</p>
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
            <p>Guarulhos, São Paulo</p>
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