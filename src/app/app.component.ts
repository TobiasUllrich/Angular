import { Component, OnInit } from '@angular/core'; //OnInit kommt aus der Angular-Library

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { // Unsere Componente implementiert OnInit
  // ************************************************ JAVASCRIPT CODE HIER ********************************************************************
  
  images =['1.jpg','2.jpg','3.jpg']; //let nicht mehr nötig, d.h. man kann, aber muss es nicht weglassen
  currentImage=0;
  showImage=true;


  //OnInit wird direkt beim Laden der Componente gestartet
  ngOnInit(){
    this.updateImage(); // this.notwendig!
  }

  //Funktion ändert die Bilder
  updateImage(){         //function nicht mehr nötig, d.h. man kann, aber muss es nicht weglassen
    
    setInterval(() => {
      //document.getElementById('img-slideshow').src=this.images[this.currentImage];
      this.currentImage++;
      this.currentImage=this.currentImage % this.images.length; // 0, 1, 2 bleiben stehen UND bei 3 kommt Rest 0 raus
      
      this.showImage=false; //Nächstes Bild wäre wegen 'this.currentImage++' direkt an der Reihe, aber weil 'this.showImage=false' wird es nicht angezeigt
      setTimeout(() => {this.showImage=true;},10) //Wir warten kurz 10ms und dann wird auch das neue Bild synchron mit der Animation angezeigt

    },8000)

  }

  

// ************************************************ JAVASCRIPT CODE HIER ********************************************************************
}
