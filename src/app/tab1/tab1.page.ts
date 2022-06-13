import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  ngOnInit(): void {

  }

  constructor() {}

  // async obtenerTodosLosPaises(){
  //   try{
  //     let res = await fetch('https://restcountries.com/v3.1/all');
  //     let listaDePaises = await res.json();
  //     console.log(listaDePaises);
      
  //   }catch(err){
  //     console.log(err);
      
  //   }
  // }

}
