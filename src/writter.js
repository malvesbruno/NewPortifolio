import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ strings, typeSpeed = 150, backSpeed = 100, loop = true }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const currentString = strings[currentStringIndex];
      const updatedText = isDeleting
        ? currentString.substring(0, displayedText.length - 1)
        : currentString.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentString) {
        setTypingSpeed(backSpeed);
        setIsDeleting(true);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setTypingSpeed(typeSpeed);
        setCurrentStringIndex((prevIndex) =>
          prevIndex === strings.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    const typingInterval = setInterval(handleTyping, typingSpeed);
    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, strings, currentStringIndex, typingSpeed, typeSpeed, backSpeed]);

  return <span>{displayedText}</span>;
};

export default TypingAnimation;