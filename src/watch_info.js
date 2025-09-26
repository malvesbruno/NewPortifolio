import React, { useEffect, useRef } from 'react';


const Watch_Info = ({isEnglish}) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    // Get all elements with a certain class name
    const elements = document.getElementsByClassName('info_to_move');
    const btn_element = document.getElementById('about_btn');
    elementsRef.current = Array.from(elements);

    // Intersection Observer to observe visibility
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Change the class name of the element only when it is visible
          entry.target.classList.add('appear_left');
          btn_element.classList.add('hover_forced');
        } else {
          entry.target.classList.remove('appear_left');
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
    <div className='about_info_place info_to_move'>
                <h1>Desenvolvedor Fullstack</h1>
                <div className='info'>
                  <div className='pt1'>
                      <ul>
                        <li><h1>Telefone: </h1> +55 (11) 96817-9509</li>
                      </ul>
                      <ul>
                        <li><h1>Cidade: </h1> Guarulhos, São Paulo</li>
                      </ul>
                      <ul>
                        <li><h1>Idade: </h1>21</li>
                      </ul>
                  </div>
                  <div className='pt2'>
                      <ul>
                        <li><h1>Formação: </h1> Em progresso</li>
                      </ul>
                      <ul>
                        <li><h1>Email: </h1> malvesbruno0@gmail.com</li>
                      </ul>
                      <ul>
                        <li><h1>Freelancer: </h1>Disponível</li>
                      </ul>
                  </div>
                </div>
            </div>
            </>
  );
} else{
  return(
  <>
    <div className='about_info_place info_to_move'>
                <h1>Fullstack Developer</h1>
                <div className='info'>
                  <div className='pt1'>
                      <ul>
                        <li><h1>Phone: </h1> +55 (11) 96817-9509</li>
                      </ul>
                      <ul>
                        <li><h1>City: </h1> Guarulhos, São Paulo</li>
                      </ul>
                      <ul>
                        <li><h1>Age: </h1>21</li>
                      </ul>
                  </div>
                  <div className='pt2'>
                      <ul>
                        <li><h1>Degree: </h1> In progress</li>
                      </ul>
                      <ul>
                        <li><h1>Email: </h1> malvesbruno0@gmail.com</li>
                      </ul>
                      <ul>
                        <li><h1>Freelancer: </h1>Available</li>
                      </ul>
                  </div>
                </div>
            </div>
            </>
  );
}
};

export default Watch_Info;