import { Component } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
