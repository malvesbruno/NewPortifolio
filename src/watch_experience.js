import React, { useEffect, useRef } from 'react';

const Watch_Ex = ({isEnglish}) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    // Get all elements with a certain class name
    const elements = document.getElementsByClassName('ex_to_move');
    elementsRef.current = Array.from(elements);
    const btn_element = document.getElementById('resume_btn');

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
  if (!isEnglish){
  return (
    <>
    <div className='resumo ex_to_move'>
            <p>
            Sou um freelancer com 1 ano de experiência, atualmente estudando Ciência da Computação. Com conhecimento em linguagens como C#, CSS, Python, Java, Javascript, SQL, Html. Desenvolvi alguns projetos como Jogos, Apps, Programas, RPA, Web Scraping, Aprendizado de Máquina, APIS, Análise de dados e projetos front-end.
            </p>
            <div className='info-resumo'>
              <div className='education_side'>
                  <h1>Educação</h1>
                  <div className='education'>
                    <h1>Bacharelado em Ciência da Computação</h1>
                    <div className='data'>
                      2024 - 2028
                    </div>
                    <p className='italic'>Descomplica Faculdade Digital</p>
                    <p>Bacharelado em Progresso</p>
                  </div>
              </div>
              <div className='education_side'>
              <h1>Experiências</h1>
                  <div className='education'>
                    <h1>Freelancer</h1>
                    <div className='data'>
                      2023 - Present
                    </div>
                    <ul>
                      <li>
                        Desenvolvi alguns Projetos de RPA e API
                      </li>
                      <li>
                        Construi sites com a ferramenta Django
                      </li>
                      <li>
                        Desenvolvi aplicativos, jogos e programas
                      </li>
                      <li>
                        Também tive experiências com análise de dados
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
            </div>
            </>
  );
} else {
  return (
    <>
    <div className='resumo ex_to_move'>
            <p>
            I'm a freelancer with 1 year of experience, currently studying Computer Science. With knowledge of languages ​​such as C#, CSS, Python, Java, Javascript, SQL, Html. I developed some projects such as Games, Apps, Programs, RPA, Web Scraping, Machine Learning, APIS, Data Analysis and front-end projects.
            </p>
            <div className='info-resumo'>
              <div className='education_side'>
                  <h1>Education</h1>
                  <div className='education'>
                    <h1>BACHELOR OF COMPUTER SCIENCE</h1>
                    <div className='data'>
                      2024 - 2028
                    </div>
                    <p className='italic'>Descomplica Faculdade Digital</p>
                    <p>Bachelor's degree in progress</p>
                  </div>
              </div>
              <div className='education_side'>
              <h1>Experience              </h1>
                  <div className='education'>
                    <h1>Freelancer</h1>
                    <div className='data'>
                      2023 - Present
                    </div>
                    <ul>
                      <li>
                      Developed some RPA and API projects
                      </li>
                      <li>
                      Build websites with the Django tool
                      </li>
                      <li>
                      Developed applications, games and programs
                      </li>
                      <li>
                      I also had experience with data analysis
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
            </div>
            </>
  );
}
};

export default Watch_Ex;