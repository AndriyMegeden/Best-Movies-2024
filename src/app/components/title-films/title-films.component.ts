import { Component } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
@Component({
  selector: 'app-title-films',
  standalone: true,
  imports: [],
  templateUrl: './title-films.component.html',
  styleUrl: './title-films.component.scss'
})
export class TitleFilmsComponent {
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    // ScrollSmoother.create({
    //   wrapper: '.wrapper',
    //   content: '.content',
    //   smooth: 1.5,
    //   effects: true
    // });

    gsap.fromTo('.main-container', {opacity: 1}, {
      duration: 2.5,
      opacity: 0,
      scrollTrigger: {
        trigger: '.main-container', 
        markers: false,
        start: '200 top',
        end: 'bottom', 
        scrub: true
      }
    })
    gsap.fromTo('.best-title', {y: -50}, {
      y: 50,
      ease: "none",
      duration: 5,
      scrollTrigger: {
        trigger: '.title', 
        markers: false,
        start: '-220 top',
        end: '-50 40',
        scrub: 1
      }
    })
    gsap.fromTo('.cards', {y: -50}, {
      y: 50,
      ease: "none",
      duration: 1.5,
      scrollTrigger: {
        trigger: '.cards', 
       start: '-100 top',
       end: '500, center',
        markers: false, 
        scrub: true,
      }
    })
  }
}
