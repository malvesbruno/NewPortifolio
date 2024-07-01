import React, { useEffect, useRef } from 'react';

const Watch_Skill = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    // Get all elements with a certain class name
    const elements = document.getElementsByClassName('skill_to_move');
    elementsRef.current = Array.from(elements);

    // Intersection Observer to observe visibility
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Change the class name of the element only when it is visible
          entry.target.classList.add('appear_bellow');
        } else {
          entry.target.classList.remove('appear_bellow');
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
    <div className='screen-skills'>
              <div className='sideA skill_to_move'>
                  <div className='progress'>
                    <div className='title'>
                      <h1>Python</h1>
                      <h1>90%</h1>
                    </div>
                    <progress className='progressbar' value="90" max="100"> 100% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>Java</h1>
                      <h1>80%</h1>
                    </div>
                    <progress className='progressbar' value="80" max="100"> 80% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>C#</h1>
                      <h1>65%</h1>
                    </div>
                    <progress className='progressbar' value="60" max="100"> 65% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>Java-Script</h1>
                      <h1>80%</h1>
                    </div>
                    <progress className='progressbar' value="80" max="100"> 90% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>SQL</h1>
                      <h1>80%</h1>
                    </div>
                    <progress className='progressbar' value="80" max="100"> 80% </progress>
                  </div>
              </div>
              <div className='sideB skill_to_move'>
              <div className='progress'>
                  <div className='title'>
                      <h1>HTML</h1>
                      <h1>80%</h1>
                    </div>
                    <progress className='progressbar' value="80" max="100"> 80% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>CSS</h1>
                      <h1>80%</h1>
                    </div>
                    <progress className='progressbar' value="80" max="100"> 80% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>Type-Script</h1>
                      <h1>80%</h1>
                    </div>
                    <progress className='progressbar' value="80" max="100"> 80% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>UI/UX</h1>
                      <h1>60%</h1>
                    </div>
                    <progress className='progressbar' value="60" max="100"> 80% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>React.js</h1>
                      <h1>40%</h1>
                    </div>
                    <progress className='progressbar' value="40" max="100"> 40% </progress>
                  </div>
              </div>
              
            </div>
            </>
  );
};

export default Watch_Skill;