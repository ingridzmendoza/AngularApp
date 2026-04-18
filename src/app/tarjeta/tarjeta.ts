import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css'
})
export class Tarjeta {
  @Input() nombre: string = '';
  @Input() edad: number = 0;

  likes: number = 0;

  darLike() {
    this.likes++;
  }
}