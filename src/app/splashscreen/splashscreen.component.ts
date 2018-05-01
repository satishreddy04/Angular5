import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-splashscreen',
	templateUrl: './splashscreen.component.html',
	styleUrls: ['./splashscreen.component.css']
})
export class SplashscreenComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {
		setTimeout((router: Router) => {
			this.router.navigate(['/home/galaxy']);
		}, 3000);
	}
}
