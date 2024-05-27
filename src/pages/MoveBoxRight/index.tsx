import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';
gsap.registerPlugin(useGSAP,ScrollTrigger);

const MoveBoxRight = () => {
  const main = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      gsap.from('.box', {
        x: 700,
        duration: 3,
        scrollTrigger: {
          trigger: '.box' 
        }
      });

    },
    { scope: main }
  );

  return (
    <>
      <div className="div1">Test1</div>
      <div className="div2" ref={main}>
        <div className="box"  />
      </div>

    </>
  );
}

export default MoveBoxRight