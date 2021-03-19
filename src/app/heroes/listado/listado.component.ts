import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {
  
  
  heroes: string[] = ['Spiderman','Ironman', 'Hulk', 'Thor', 'Capitan América'];
  heroeBorrado: string = '';
  
  borrarHeroe(): void {
   this.heroeBorrado = this.heroes.shift() || '';
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
