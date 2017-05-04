import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'poke-collection',
	templateUrl: './collection.component.html',
	styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
	pokeAImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png';

	constructor() { }
	
	ngOnInit() {
	}
	
}
