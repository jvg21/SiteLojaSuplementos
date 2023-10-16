import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public image;
  public title;
  public description;

  constructor(title:String, description:String, image: String){
    this.title = title;
    this.description = description;
    this.image = image;
  }

}
