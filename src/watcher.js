import React, { useEffect, useRef } from 'react';
import profile from './static/profile-img.jpg';


const Watch_picture = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    // Get all elements with a certain class name
    const elements = document.getElementsByClassName('element_to_move');
    elementsRef.current = Array.from(elements);

    // Intersection Observer to observe visibility
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Change the class name of the element only when it is visible
          entry.target.classList.add('appear_right');
        } else {
          entry.target.classList.remove('appear_right');
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
    <div className='picture_place'>
            <img src={profile} className='profile_picture element_to_move' alt="profile" />
    </div>
  );
};


export default Watch_picture;