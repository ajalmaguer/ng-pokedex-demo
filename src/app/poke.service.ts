import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokeService {
	// make api calls in the service

	test = 'hello from the poke service';
	selectedPokemon: any = {};

	constructor(private http: Http) { }

	getAllPokemon() {
		return this.http.get('http://pokeapi.co/api/v2/pokemon/')
						.map(res => {
							return res.json().results;
						});
	}

	getPokeDetails(pokemon) {
		return this.http.get(pokemon.url)
			.map(res => {
				return res.json();
				// return res.json().results
			})
	}

}

interface Pokemon {
	name: string;
	url: string;
}
