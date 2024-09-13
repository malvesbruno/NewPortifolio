import React, { useEffect, useRef } from 'react';

import { useGitHubAutomatedRepos, ProjectIcons, StackIcons, StackLabels } from "github-automated-repos";



const Watch_Port = ({ onItemClicked }) => {
  const elementsRef = useRef([]);

  const data = useGitHubAutomatedRepos('malvesbruno', 'portfolio')
  console.log(data)
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
      {
        data.map((item) => {
          return (
            <div key={item.id} className='item' alt={"banner " + item.name}>

              {/*Banner / Layout / Logo*/}

              {/*Project Icons*/}
              <div className="icons">
              <img src={item.banner} className='img_port'></img>
              <div className='type_display'>
              {item.topics.map((icon) => {
                let names = ['art', 'artificialintelligence', 'dashboard', 'education', 'game', 'landingpage', 'personalwebsite', 'productivity', 'security', 'store']
                if (names.includes(icon)){
                return (
                  <ProjectIcons key={icon} className="project_Icon" itemTopics={icon} />
                )
              } else {
                return (
                <></>
                )
              }
              })}
              </div>
              </div>

              {/*html Url*/}
              <a href={item.html_url}>
                  {/*Name Project*/}
                  <h1>{item.name}</h1>
              </a>

              {/*Description*/}
              <div className='description_display'>
                <p>{item.description}</p>
              </div>
  
              {/*Homepage*/}
              
              <a href={item.homepage} className='link_btn'>
                  <button>Link</button>
              </a>
              <div className='icon_display'>
              {/*Stacks Icon and Stacks Label*/}
              {item.topics.map((icon, index) => {
                let names = ['art', 'artificialintelligence', 'dashboard', 'education', 'game', 'landingpage', 'personalwebsite', 'productivity', 'security', 'store']
                if (!names.includes(icon) && icon !== 'portfolio'){
                return (
                   <div key={icon} style={{display:'flex', justifyContent:'center', }}>
                    <StackIcons key={icon} className="stack_Icon" itemTopics={icon} />
                    </div>
                )
              } else {
                return (
                <></>
                )
              }
              })}
              </div>

            </div>
          )
        })
      }
    </>
  );

}

export default Watch_Port;