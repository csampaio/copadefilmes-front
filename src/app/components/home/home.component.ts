import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filmes: Array<Filme>;
  error: boolean = false;

  constructor(private catalogoService: CatalogoService) { }

  ngOnInit(): void {
    this.catalogoService.getCatalogo().subscribe( (catalogo) => this.filmes = catalogo,
    (err) => {
      this.error = true;
      console.error(err);
    },
    () => console.log('FIM'));
  }

}
