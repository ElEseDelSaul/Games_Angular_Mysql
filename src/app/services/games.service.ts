import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Model
import { Game } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  URL_API: string = "http://localhost:3000/games";

  constructor(private http: HttpClient) { }

  getAllGames() {
    return this.http.get(`${this.URL_API}`);
  }

  getOneGame(id: Number) {
    return this.http.get(`${this.URL_API}/${id}`);
  }

  saveGame(game: Game) {
    return this.http.post(`${this.URL_API}`, game);
  }

  deleteGame(id: Number) {
    return this.http.delete(`${this.URL_API}/${id}`);
  }

  updateGame(id: Number, newGame: Game): Observable<Game> {
    return this.http.put(`${this.URL_API}/${id}`, newGame);
  }

}
