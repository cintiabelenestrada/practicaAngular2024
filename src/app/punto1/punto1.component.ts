import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component implements OnInit {
  title: string = 'tDISCO SOLIDO SSD 240GB ADATA SATA III SU630';
// defini una variable title que luego la llamo en la vista
  productos=  [
    { nombre: 'Auricular Gamer Logitech', descripcion: 'Color Negro Modelo G733 Micrófono integrado Tipo de conector inalámbrico', img: 'notebook13l.jpg', precio: 4500.5},
    { nombre: 'JOYSTICK  PC USB G807', descripcion: 'El Saturn es el joystick cableado ideal, analógicos, vibración y compatibilidad son solo algunas de sus características.', img: '/punto1/img/joystick.png', precio: 2000.99},
    { nombre: 'Monitor Gamer 22"', descripcion: 'Color : NegroTamaño de panel : 22"Curvo/Plano : PlanoColores : 16.7MTipo de panel : IPSResolución : 1920 x 1080s', img: 'notebook13l.jpg', precio: 200.999},
    { nombre: 'Cooler Cpu Watercooler Gamemax Iceburg 360 Rainbow 295W', descripcion: 'Color Negro Modelo G733 Micrófono integrado Tipo de conector inalámbrico', img: 'notebook13l.jpg', precio: 4500.5},
    { nombre: 'Auricular Gamer Logitech', descripcion: 'Conector RGB para ventilador : Conector 2510 Doble AURA 5V 3 pinesRPM del ventilador : 800 ,2000 RPMFlujo de aire del ventilador : 62-82CFMMaterial del tubo : Caucho de baja evaporaciónTipo Sistema de refrigeración : por agua de CPU', img: 'notebook13l.jpg', precio: 19900.5},
    { nombre: 'Auricular Gamer Logitech', descripcion: 'Color Negro Modelo G733 Micrófono integrado Tipo de conector inalámbrico', img: 'notebook13l.jpg', precio: 4500.5}
  ];

 constructor() { }

 ngOnInit() {

 }
}
