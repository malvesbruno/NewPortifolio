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
                      <h1>70%</h1>
                    </div>
                    <progress className='progressbar' value="70" max="100"> 70% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>JavaScript</h1>
                      <h1>90%</h1>
                    </div>
                    <progress className='progressbar' value="80" max="100"> 90% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>TypeScript</h1>
                      <h1>85%</h1>
                    </div>
                  <progress className='progressbar' value="80" max="100"> 80% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>Git/GitHub</h1>
                      <h1>80%</h1>
                    </div>
                    <progress className='progressbar' value="80" max="100"> 80% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>React.js</h1>
                      <h1>90%</h1>
                    </div>
                    <progress className='progressbar' value="90" max="100"> 90% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>Node.js</h1>
                      <h1>75%</h1>
                    </div>
                    <progress className='progressbar' value="75" max="100"> 75% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>Django</h1>
                      <h1>70%</h1>
                    </div>
                    <progress className='progressbar' value="70" max="100"> 70% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>SQL</h1>
                      <h1>80%</h1>
                    </div>
                    <progress className='progressbar' value="80" max="100"> 80% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>SQLite</h1>
                      <h1>70%</h1>
                    </div>
                    <progress className='progressbar' value="70" max="100"> 70% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>Firebase</h1>
                      <h1>85%</h1>
                    </div>
                    <progress className='progressbar' value="75" max="100"> 75% </progress>
                  </div>
                  <div className='progress'>
                  <div className='title'>
                      <h1>HTML</h1>
                      <h1>100%</h1>
                    </div>
                    <progress className='progressbar' value="80" max="100"> 100% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>CSS</h1>
                      <h1>85%</h1>
                    </div>
                    <progress className='progressbar' value="85" max="100"> 85% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>SCSS</h1>
                      <h1>70%</h1>
                    </div>
                    <progress className='progressbar' value="70" max="100"> 70% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>C#</h1>
                      <h1>65%</h1>
                    </div>
                    <progress className='progressbar' value="65" max="100"> 65% </progress>
                  </div>
                  

                  <div className='progress'>
                    <div className='title'>
                      <h1>Security of End-Point</h1>
                      <h1>70%</h1>
                    </div>
                    <progress className='progressbar' value="70" max="100"> 70% </progress>
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
                      <h1>Mobile Development</h1>
                      <h1>80%</h1>
                    </div>
                    <progress className='progressbar' value="80" max="100"> 80% </progress>
                  </div>

                  <div className='progress'>
                    <div className='title'>
                      <h1>Dart/Flutter</h1>
                      <h1>80%</h1>
                    </div>
                    <progress className='progressbar' value="80" max="100"> 80% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>Machine Learning</h1>
                      <h1>70%</h1>
                    </div>
                    <progress className='progressbar' value="70" max="100"> 70% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>REST API</h1>
                      <h1>80%</h1>
                    </div>
                    <progress className='progressbar' value="80" max="100"> 80% </progress>
                  </div>
                  <div className='progress'>
                    <div className='title'>
                      <h1>AWS</h1>
                      <h1>70%</h1>
                    </div>
                    <progress className='progressbar' value="70" max="100"> 70% </progress>
                  </div>
              </div>
              
            </div>
            </>
  );
};

export default Watch_Skill;