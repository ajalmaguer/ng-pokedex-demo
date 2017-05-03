import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke.service';

@Component({
	selector: 'poke-collection',
	templateUrl: './collection.component.html',
	styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
	
	constructor(public pokeService: PokeService) { }
	
	ngOnInit() {
	}

	releasePokemon(pokemon) {
		console.log('remove ', pokemon)
		this.pokeService.releasePokemon(pokemon);
	}
	
}
