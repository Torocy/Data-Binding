import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binds',
  templateUrl: './binds.component.html',
  styleUrls: ['./binds.component.scss']
})
export class BindsComponent implements OnInit {
pageTitle: string ="DATA BINDING IN ANGULAR";
imageUrl : string = "assets/images/image8.1.jpg";
btnStatus : boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
