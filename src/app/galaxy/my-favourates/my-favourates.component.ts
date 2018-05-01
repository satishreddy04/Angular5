import { Component, OnInit } from '@angular/core';
import { DataStorage } from '../../service/dataStore.service';

@Component({
	selector: 'app-my-favourates',
	templateUrl: './my-favourates.component.html',
	styleUrls: ['./my-favourates.component.css']
})
export class MyFavouratesComponent implements OnInit {
	public favourates: any;
	constructor(private _data: DataStorage) {
		this.favourates = JSON.parse(localStorage.getItem('favouratgeItems'));
	}
	_displayImage(e) {
		return 'data:image/png;base64,' + e;
	}

	ngOnInit() {}
}
