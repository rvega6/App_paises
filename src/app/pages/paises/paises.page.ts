import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { IonInfiniteScroll } from '@ionic/angular';



@Component({
  selector: 'app-paises',
  templateUrl: './paises.page.html',
  styleUrls: ['./paises.page.scss'],
})
export class PaisesPage implements OnInit {
  
  searchTerm: string;
  paises:any = [];
  cerrar: boolean;
  startUsuarios = 0;
  endUsuarios = 7;  
  QtyToRenderScroll = 10;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor( private http: HttpClient, private iab: InAppBrowser) { }

  ngOnInit(): void {
    this.obtenerPaises();
  }

  obtenerPaises(){
    this.http.get('https://restcountries.com/v3.1/all').subscribe((listaDePaises: any) => {
      listaDePaises.map((auxPais: any) =>{
        let pais = {
          nombre: auxPais.name.common,
          region:  auxPais.region,
          bandera: auxPais.flags.cvs,
          moneda: auxPais.currencies,
          esIndependiente: auxPais.independent,
          mapa:  auxPais.maps.googleMaps,
          poblacion: auxPais.population,
          capital: auxPais.capital
        }

       this.paises.push(pais);
        console.log(listaDePaises);
        
      })
    })
  }

  mapa(mapa){
    this.iab.create(mapa,"_blank");
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  
  loadData(event) {
    setTimeout(() => {
      this.endUsuarios = this.endUsuarios + this.endUsuarios;
      event.target.complete();
    }, 700);
  }

}
