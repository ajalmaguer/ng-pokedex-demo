import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { ButtonComponent } from './button/button.component';
import { Button2Component } from './button-2/button-2.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ThumbnailComponent, 
		ButtonComponent, Button2Component
	],
	exports: [
		ThumbnailComponent,
		ButtonComponent,
		Button2Component
	]
})
export class UiLibraryModule { }
