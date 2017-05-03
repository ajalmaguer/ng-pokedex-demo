import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokeService {
	// make api calls in the service

	test = 'hello from the poke service';
	selectedPokemon: any = {};
	pokemonCollection = [];

	constructor(private http: Http) { }

	getAllPokemon() {
		return this.http.get('https://pokeapi.co/api/v2/pokemon/')
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

	catchPokemon() {
		// get the data I want
		const sprite = this.selectedPokemon.sprites.front_default;
		const name = this.selectedPokemon.name;
		const order = this.selectedPokemon.order;
		const weight = this.selectedPokemon.weight;
		const baseExperience = this.selectedPokemon.base_experience;
		const height = this.selectedPokemon.height;
		
		// create a new pokemon object
		const newPokemon = {
			sprite: sprite,
			name: name,
			order: order,
			weight: weight,
			baseExperience: baseExperience,
			height: height,
		};

		// push that object into the collection
		this.pokemonCollection.push(newPokemon);
	}

	releasePokemon(pokemon) {
		// find index of pokemon
		const index = this.pokemonCollection.indexOf(pokemon);

		// remove from that collection
		this.pokemonCollection.splice(index, 1);
	}

}

interface Pokemon {
	name: string;
	url: string;
}
