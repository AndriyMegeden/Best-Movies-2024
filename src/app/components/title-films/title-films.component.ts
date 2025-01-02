import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ScrollSmoother from 'gsap-trial/ScrollSmoother';
@Component({
  selector: 'app-title-films',
  standalone: true,
  imports: [],
  templateUrl: './title-films.component.html',
  styleUrl: './title-films.component.scss',
})
export class TitleFilmsComponent {
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    // ScrollSmoother.create({
    //   wrapper: '.wrapper',
    //   content: '.content',
    //   smooth: 1.5,
    //   effects: true
    // });

    gsap.fromTo(
      '.main-container',
      { opacity: 1 },
      {
        duration: 2.5,
        opacity: 0,
        scrollTrigger: {
          trigger: '.main-container',
          markers: false,
          start: '200 top',
          end: 'bottom',
          scrub: true,
        },
      }
    );
    gsap.from('.best-title', { opacity: 0, duration: 1, y: -50 });

    if (ScrollTrigger.isTouch === 1) {
      gsap.fromTo(
        '.best-title',
        {},
        {
          y: 50,
          ease: 'none',
          duration: 3,
          scrollTrigger: {
            trigger: '.title',
            scrub: 1,
            start: '0 top',
            // end: '-50 40',
            markers: false,
          },
        }
      );
    } else {
      gsap.fromTo(
        '.best-title',
        {},
        {
          y: 50,
          ease: 'none',
          duration: 3,
          scrollTrigger: {
            trigger: '.title',
            scrub: 1,
            start: '-220 top',
            end: '-50 40',
            markers: false,
          },
        }
      );
    }

    gsap.from('.title-films', { opacity: 0, duration: 1, y: -50 });

    // gsap.fromTo(
    //   '.cards',
    //   {},
    //   {
    //     y: 50,
    //     ease: 'none',
    //     duration: 2.5,
    //     scrollTrigger: {
    //       trigger: '.cards',
    //       start: '-100 top',
    //       end: '800, center',
    //       markers: false,
    //       scrub: true,
    //     },
    //   }
    // );
  }
}
