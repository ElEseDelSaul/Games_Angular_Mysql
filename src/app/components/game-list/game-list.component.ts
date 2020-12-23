import { Component, OnInit, HostBinding } from '@angular/core';
//Service
import { GamesService } from "../../services/games.service";
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  games: any = [];

  constructor(private gameService: GamesService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gameService.getAllGames().subscribe(
      games => {
        this.games = games
        //console.log(games)
      },
      err => console.error(err)
    );
  }

  deleteGame(id: Number) {
    let r = confirm('Are you sure to delete it?');
    if (r) {
      this.gameService.deleteGame(id).subscribe(
        res => {
          console.log(res),
          this.getGames();
        },
        err => console.error(err)
      )
    }
  }

}
