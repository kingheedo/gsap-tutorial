import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';
gsap.registerPlugin(useGSAP,ScrollTrigger);

const Scrub = () => {
  const main = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      gsap.to('.box', {
        x: 700,
        duration: 3,
        scrollTrigger: {
          trigger: '.box', //애니메이션을 발생하게 할 요소 설정
          start: 'top 80%', //첫번째는 애니메이션 대상요소의 애니메이션의 시작위치(요소의 height 기준), 두번째는 스크롤 시작위치 이 두 위치가 만나면 애니메이션이 실행된다.
          end: 'top 30%', //첫번째는 애니메이션 대상요소의 애니메이션의 끝나는위치(요소의 height 기준), 두번째는 스크롤이 끝나는 위치 이 두 위치가 만나면 애니메이션이 끝난다.
          scrub: true, //애니메이션이 스크롤을 내리거나 올릴때에 반응하여 실행
          //onEnter, onLeave onEnterBack onLeaveBack시 각각 실행할 액션()
          // play pause resume reverse restart reset complete none
          toggleActions: 'restart none none none', 
          markers: { //markers를 통해 애니메이션 시작위치와 스크롤 위치를 알 수가 있다.
            fontSize: '3rem',
            indent: 200
          },
          toggleClass: 'red' //애니메이션 발생 요소에 className 토글
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

export default Scrub