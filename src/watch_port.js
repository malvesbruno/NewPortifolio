import React, { useEffect, useRef } from 'react';
import portifolio1 from'./static/portifolio/portfolio-1.png'
import portifolio2 from'./static/portifolio/portfolio-2.png'
import portifolio3 from'./static/portifolio/portfolio-3.png'
import portifolio4 from'./static/portifolio/portfolio-4.png'
import portifolio5 from'./static/portifolio/portfolio-5.png'
import portifolio6 from'./static/portifolio/portfolio-6.png'
import portifolio7 from'./static/portifolio/portfolio-7.png'

const Watch_Port = ({ onItemClicked }) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    // Get all elements with a certain class name
    const elements = document.getElementsByClassName('port_to_move');
    const btn_element = document.getElementById('porti_btn');
    elementsRef.current = Array.from(elements);

    // Intersection Observer to observe visibility
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Change the class name of the element only when it is visible
          entry.target.classList.add('appear_bellow');
          btn_element.classList.add('hover_forced');
        } else {
          entry.target.classList.remove('appear_bellow');
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

  return (
    <>
    <div className='portifolio port_to_move'>
            <img src={portifolio1} onClick={() => onItemClicked(1)} ></img>
            <img src={portifolio4} onClick={() => onItemClicked(2)}></img>
            <img src={portifolio5} onClick={() => onItemClicked(3)}></img>
            <img src={portifolio3} onClick={() => onItemClicked(4)}></img>
            <img src={portifolio6} onClick={() => onItemClicked(5)}></img>
            <img src={portifolio7} onClick={() => onItemClicked(6)}></img>
            <img src={portifolio2} onClick={() => onItemClicked(7)}></img>

            
          </div>      
            </>
  );
};

export default Watch_Port;