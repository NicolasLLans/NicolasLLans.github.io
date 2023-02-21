import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barranav',
  templateUrl: './barranav.component.html',
  styleUrls: ['./barranav.component.css']
})
export class BarranavComponent implements OnInit {
   
  
  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  aplicarEstilos(botonActual: any) {
    const botones = document.getElementsByClassName('boton');
    for (let i = 0; i < botones.length; i++) {
      botones[i].classList.remove('activo');
    }
    botonActual.classList.add('activo');
  }

}