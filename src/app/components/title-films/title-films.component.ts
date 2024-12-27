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
    ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content',
      smooth: 1.5,
      effects: true
    });

    gsap.fromTo('.main-container', {opacity: 1}, {
      opacity: 0,
      scrollTrigger: {
        trigger: '.main-container', 
        start: 'center',
        end: 'bottom', 
        scrub: true
      }
    })
  }
}
