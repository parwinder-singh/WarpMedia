import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @ViewChild('facebookImage') facebookImage: HTMLImageElement;
  constructor() { }

  ngOnInit() {
  }
  changeImage(action) {
    if (action === 'in') {
      this.facebookImage['nativeElement'].src = 'src/assets/images/Facebookgradient.png';
    } else {
      this.facebookImage['nativeElement'].src = 'src/assets/images/Facebook.png';
    }
  }

}
