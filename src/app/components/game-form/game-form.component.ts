import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
//Model
import { Game } from '../../models/Game';
//Service
import { GamesService } from "../../services/games.service";

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';  //Asignar una clase a todo el componente

  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  editStatus: boolean = false;

  constructor(private gameService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //Comprobar la existencia del id por la URL atraves del Activerouter
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.gameService.getOneGame(params.id).subscribe(
        res => {
          this.game = res;
          console.log(res);
          this.editStatus = true;
        },
        err => console.error(err)
      )
    }
  }

  saveGame() {
    //Eliminar campos del objeto
    delete this.game.created_at;
    delete this.game.id;

    this.gameService.saveGame(this.game).subscribe(
      game => {
        console.log(game);
        this.router.navigate(['/games']);
      },
      err => console.error(err)
    )
  }

  updateGame(){
    delete this.game.created_at;
    this.gameService.updateGame(this.game.id , this.game).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/games']);
        this.editStatus = false;
      },
      err=>console.error(err)
    )
  }

}
