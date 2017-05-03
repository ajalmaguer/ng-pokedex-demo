import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke.service'

@Component({
	selector: 'poke-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	pokeList;

	constructor(private pokeService: PokeService) { }

	ngOnInit() {
		this.pokeService.getAllPokemon().subscribe(
			(res) => {
				this.pokeList = res;
			}, (err) => {
			}
		)
	}

	selectPokemon(pokemon) {
		this.pokeService.selectedPokemon = pokemon;

		this.pokeService.getPokeDetails(pokemon).subscribe(
			res => {
				// console.log('res =', res);
				this.pokeService.selectedPokemon = res;
			}, err => {
			}
		);
	}

}
