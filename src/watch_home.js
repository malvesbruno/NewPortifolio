import React, { useEffect, useRef } from 'react';
import TypingAnimation from './writter';

const Watch_Home = ({isEnglish, roles, lightOn}) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    // Get all elements with a certain class name
    const elements = document.getElementsByClassName('background');
    elementsRef.current = Array.from(elements);
    const btn_element = document.getElementById('home_btn');

    // Intersection Observer to observe visibility
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Change the class name of the element only when it is visible
          btn_element.classList.add('hover_forced');
        } else {
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
    <aside className='page'>
          <div className={`background ${lightOn ? 'light_mode' : ''}`} id="home">
            <p className='title'>Bruno Massuete Alves</p>
            <p className='animated'>
              Sou um <TypingAnimation 
                strings={roles} 
                typeSpeed={250} 
                backSpeed={50} 
                loop={true}
              />
            </p>
          </div>
        </aside>
            </>
  );
} else {
  return (
    <>
    <aside className='page'>
          <div className={`background ${lightOn ? 'light_mode' : ''}`} id="home">
            <p className='title'>Bruno Massuete Alves</p>
            <p className='animated'>
              I am a <TypingAnimation 
                strings={roles} 
                typeSpeed={250} 
                backSpeed={50} 
                loop={true}
              />
            </p>
          </div>
        </aside>
            </>
  );
}
};

export default Watch_Home;