import React, { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap-trial';
import chroma from 'chroma-js';
import style from '../Header.module.css';
import classNames from 'classnames';

const GlowButton = ({ children }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    if (!button) return;

    // Pointer move handler for the glow effect
    const handlePointerMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // GSAP animation for pointer movement
      gsap.to(button, {
        '--pointer-x': `${x}px`,
        '--pointer-y': `${y}px`,
        duration: 0.6,
      });

      // Get computed style values for button glow colors
      let glowStart = getComputedStyle(button)
        .getPropertyValue('--button-glow-start')
        .trim();
      let glowEnd = getComputedStyle(button)
        .getPropertyValue('--button-glow-end')
        .trim();

      // Set fallback values if they are undefined or empty
      glowStart = glowStart || '#B000E8';
      glowEnd = glowEnd || '#009FFD';

      // Ensure the colors are valid before passing to chroma.mix
      if (chroma.valid(glowStart) && chroma.valid(glowEnd)) {
        const mixedColor = chroma.mix(glowStart, glowEnd, x / rect.width).hex();
        gsap.to(button, {
          '--button-glow': mixedColor,
          duration: 0.2,
        });
      }
    };

    // Attach event listener to button
    button.addEventListener('pointermove', handlePointerMove);

    // Cleanup event listener on component unmount
    return () => {
      button.removeEventListener('pointermove', handlePointerMove);
    };
  }, []); // Run once when the component mounts

  return (
    <button ref={buttonRef} className={classNames(style.glowbutton)}>
      <div className="gradient"></div>
      <span>{children}</span>
    </button>
  );
};

export default GlowButton;
