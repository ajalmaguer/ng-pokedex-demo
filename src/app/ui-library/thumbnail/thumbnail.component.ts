import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'poke-thumbnail',
	templateUrl: './thumbnail.component.html',
	styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
	@Input() imageUrl;

	constructor() { }

	ngOnInit() {
		console.log('hello!');
	}

}
