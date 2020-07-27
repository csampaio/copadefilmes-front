import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filmes: Array<Filme> = Array<Filme>();
  filmesSelecionados: Array<Filme> = Array<Filme>();
  error: boolean = false;
  carregando: boolean = false;
  contadorFilmes: number = 0;

  constructor(private catalogoService: CatalogoService) { }

  ngOnInit(): void {
    this.carregando = true;
    this.catalogoService.getCatalogo().subscribe( 
      (catalogo) => {
        catalogo.forEach( item => {
          this.filmes.push(
            {
              id: item.id,
              titulo: item.titulo,
              nota: item.nota,
              ano: item.ano,
              selected: false
            })
        });
      },
      (err) => {
        this.error = true;
        console.error(err);
        this.carregando = false;
      },
      () => this.carregando = false)
  }

  /**
   * Seleciona ou deseleciona um filme, adicionando a lista de filmes selecionados
   * @param index indice do filme na lista de filmes
   * @param filme filme selecionado
   */
  private onSelectFilme(index, filme:Filme) {
    if (this.contadorFilmes < 8 || filme.selected) {
      if (!filme.selected) {
        this.filmesSelecionados.push(filme);
      } else {
        let i = this.filmesSelecionados.indexOf(filme);
        this.filmesSelecionados.splice(i,1);
      }
      this.contadorFilmes = this.filmesSelecionados.length;
      this.filmes[index].selected = !filme.selected;
    } else {
      alert("Apenas 8 filmes podem ser selecionados.")
    }
  }

}
