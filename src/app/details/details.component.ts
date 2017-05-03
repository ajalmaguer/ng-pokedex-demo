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

}
