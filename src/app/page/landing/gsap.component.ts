import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TitleFilmsComponent } from '../../components/title-films/title-films.component';
import { LibraryComponent } from '../../components/library/library.component';

@Component({
  selector: 'app-gsap',
  standalone: true,
  imports: [TitleFilmsComponent, LibraryComponent],
  templateUrl: './gsap.component.html',
  styleUrl: './gsap.component.scss',
})
export class LandingComponent implements OnInit {

  ngOnInit(): void {}
}
