import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke.service'

@Component({
	selector: 'poke-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

	constructor(public pokeService: PokeService) { }

	ngOnInit() {
	}

	getSelectedPokemonName() {
		const name = this.pokeService.selectedPokemon.name;
		return name ? name : 'Select a pokemon!';
	}

	getSprite() {
		const url = this.pokeService.selectedPokemon.sprites.front_default;
		return url ? url : '';
	}

	catchMe() {
		console.log('catch pokemon!');
	}

}
