import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filmes: Array<number>;

  constructor() { }

  ngOnInit(): void {
    this.filmes = Array(16).fill(0,0,16);
  }

}
