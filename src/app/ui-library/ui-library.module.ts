import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ButtonComponent, 
		ThumbnailComponent
	],
	exports: [
		ButtonComponent, 
		ThumbnailComponent
	]
})
export class UiLibraryModule { }
