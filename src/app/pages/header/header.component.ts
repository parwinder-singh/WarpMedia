import { Component, OnInit, HostListener } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  scrolledDown: Boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number === 0) {
      // transparent header
      this.scrolledDown = false;
    } else if (number > 60) {
      // white background
      this.scrolledDown = true;
    }

  }
  constructor() {
  }

  ngOnInit() {
    // Making navbar collapse automatically after click
    $('.nav-link').on('click', function() {
      $('.navbar-collapse').collapse('hide');
    });
    // Collapse ends
  }
}
