import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Punto1Component } from "./punto1/punto1.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Punto1Component]
})
export class AppComponent {
  title = 'practicaAngular2024';
}
