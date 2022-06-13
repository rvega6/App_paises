import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router: Router,  private loadingController: LoadingController) {  }

  ngOnInit() {
    this.splash();
  }

  async splash(){
    setTimeout(()=>{
      this.router.navigateByUrl('paises');
    }, 3500)

  }
}
