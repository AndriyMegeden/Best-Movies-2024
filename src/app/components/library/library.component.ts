import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ScrollSmoother from 'gsap-trial/ScrollSmoother';
@Component({
  selector: 'app-library',
  standalone: true,
  imports: [],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent implements OnInit {
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger)
    // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    // ScrollSmoother.create({
    //   wrapper: '.wrapper',
    //   content: '.content',
    //   smooth: 1.5,
    //   effects: true
    // });  
   // отримуємо доступ до елементів по класу 
   const itemsL = document.querySelectorAll('.posters-left .item') as NodeListOf<HTMLElement>;
    // тут перебираються 
    itemsL.forEach(item =>  {

      gsap.fromTo( item, { x: -100, opacity: 0}, {
        opacity: 1,  x: 0,
        scrollTrigger: {
          trigger: item,
          scrub: true  
        }
      })
    }) 

    if(ScrollTrigger.isTouch === 1){
      itemsL.forEach(item =>  {

        gsap.fromTo( item, { x: -100, opacity: 0}, {
          opacity: 1,  x: 0,
          scrollTrigger: {
            trigger: item,
            scrub: false  
          }
        })
      }) 
    }
  
    const itemsR = document.querySelectorAll('.posters-right .item') as NodeListOf<HTMLElement>;
    // тут перебираються 
    itemsR.forEach(item =>  {
      gsap.fromTo( item, { x: 100, opacity: 0}, {
        opacity: 1,  x: 0,
        scrollTrigger: { 
          trigger: item,
          scrub: true
        }
      })
    }) 
    if(ScrollTrigger.isTouch === 1){
      itemsR.forEach(item =>  {
        gsap.fromTo( item, { x: 100, opacity: 0}, {
          opacity: 1,  x: 0,
          scrollTrigger: { 
            trigger: item,
            scrub: false
          }
        })
      }) 
    }  
  }
}
