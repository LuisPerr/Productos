import { Component, OnInit } from '@angular/core';
import { IEmpresas } from './empresas';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  empresas: IEmpresas[] = [];
  constructor( private _HomeService: HomeService ) { }

  ngOnInit() {
    this.getEmpresas();
  }

  getEmpresas(): void {
    console.log( 'getEmpresas' );
    this._HomeService.getEmpresas().subscribe(resp => {
        this.empresas = resp;
        console.log('this.empresas', this.empresas);
    }, error => {
        console.log('Ocurrio un error al cargar las empresas');
    });
}

}
