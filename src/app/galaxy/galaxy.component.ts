import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarwarsService } from '../service/starwars.service';
import { DataStorage } from '../service/dataStore.service';
import {}

@Component({
	selector: 'app-galaxy',
	templateUrl: './galaxy.component.html',
	styleUrls: ['./galaxy.component.css']
})
export class GalaxyComponent implements OnInit {
	public moviesData=[] 
	constructor(private router: Router, private StarwarsService: StarwarsService, private _data: DataStorage) {}
	_displayImage(e) {
		return 'data:image/png;base64,' + e;
	}
	sendMeHome(e) {
		this._data.data = e;
		this.router.navigate(['home/galaxy', e.id]);
	}
	ngOnInit() {
		this.StarwarsService.getStarWarsData().subscribe(data => (this.moviesData = data));
	}
}
