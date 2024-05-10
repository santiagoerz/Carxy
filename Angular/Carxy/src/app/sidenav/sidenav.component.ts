import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  ModalIsopen: boolean = false
  ShowElements() {
    this.ModalIsopen = !this.ModalIsopen
  }

}
