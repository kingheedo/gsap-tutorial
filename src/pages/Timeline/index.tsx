import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';
gsap.registerPlugin(useGSAP,ScrollTrigger);

const Timeline = () => {
  const main = useRef<HTMLDivElement | null>(null);
  
  useGSAP(
    () => {
      const tl = gsap.timeline({ //타임라인을 설정하면 delay 설정필요없이 애니메이션을 연속적으로 실행시킬수 있다.
        scrollTrigger: {
          trigger: main.current,
          start: 'center 50%',
          end: 'center top',
          pin: main.current,
          scrub: 1,
          markers: true,
          toggleClass: 'active'
        }
      })
      tl.add('start')
      tl.to('.box', {left: '50%', xPercent: -50, opacity: 0, duration: 4},'start')
      tl.to('.box2', {right: '50%', xPercent: 50, opacity: 0, duration: 4},'start')
      tl.to('span', {opacity: 0, duration: 4},'start')
      tl.to('.box3', {width: 240, opacity: 1, delay:2, duration: 4},'start')

    },
    { scope: main }
  );

  return (
    <>
    <div className="div1" />
      <div className="div2" ref={main}>
        <div className="box-container" >
          <div className="box">
            <span>
              전문가 서비스
            </span>
          </div>
          <div className="box2">
            <span>
              IT 디자인
            </span>
          </div>
          <div className="box3">
            <span>
              혁신
            </span>
          </div>
        </div>
      </div>
    <div className="div3" />

    </>
  );
}

export default Timeline