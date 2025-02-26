import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('aboutSection', { static: false }) aboutSection!: ElementRef;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.aboutSection.nativeElement.classList.add('animate-fade-in');
    }, 500);
  }
}
