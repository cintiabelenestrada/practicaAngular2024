import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Punto1Component } from "./punto1/punto1.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Punto1Component, FooterComponent, HeaderComponent]
})
export class AppComponent {
  title = 'practicaAngular2024';
}
