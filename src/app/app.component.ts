import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
declare const Granim: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('myCanvas') myCanvas;
  context: any;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const granimInstance = new Granim({
      element: '#basic-canvas',
      name: 'basic-gradient',
      direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
      opacity: [1, 1],
      isPausedWhenNotInView: true,
      states: {
        'default-state': {
          gradients: [
            ['#360033', '#0b8793'],
            ['#33001b', '#ff0084'],
            ['#1a2a6c', '#b21f1f'],
            ['#cc2b5e', '#753a88'],
            ['#ee0979', '#ff6a00']
          ]
        }
      }
    });
  }
}
