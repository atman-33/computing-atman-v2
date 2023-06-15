import { Component } from '@angular/core';

@Component({
  selector: 'can-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public currentYear: number = new Date().getFullYear();
}
