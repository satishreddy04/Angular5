import { Component, OnInit } from '@angular/core';
import { DataStorage } from '../../service/dataStore.service';

@Component({
	selector: 'app-glaxy-tab-details',
	templateUrl: './glaxy-tab-details.component.html',
	styleUrls: ['./glaxy-tab-details.component.css']
})
export class GlaxyTabDetailsComponent implements OnInit {
	public data: any;
	public filmslist: any;
	buttonStatus = false;
	nonDisableProperty = true;
	disableProperty = false;
	movieDetails = [];
	localdata = [];
	constructor(private _data: DataStorage) {
		this.data = this._data.data;
		this.filmslist = this._data.data.films;
	}

	saveToFavorate(fims) {
		fims.flag = true;
		// this._data. favourateItems.push(fims);
		this._data.populateStorage(fims);
	}
	_displayImage(e) {
		return 'data:image/png;base64,' + e;
	}

	getClasses(movie) {
		const favItems = this._data.getFavouriteItems();
		const index = favItems.findIndex(fav => {
			return fav.id === movie.id;
		});
		const btnClass = index !== -1 ? 'enable' : 'disable';
		if (btnClass == 'enable') {
			this.buttonStatus = true;
			this.nonDisableProperty = false;
			this.disableProperty = true;
		} else {
			this.buttonStatus = false;
			this.nonDisableProperty = true;
			this.disableProperty = false;
		}
		let classes = {
			button: this.nonDisableProperty,
			disableButton: this.disableProperty
		};
		return classes;
	}
	_checkFavorateItems(a, b) {
		for (var i = 0; i > a.length; i++) {
			for (var d = 0; d > b.length; d++) {
				if (a[i].id == d[i].id) {
					return true;
				}
			}
		}
		let missing = a.filter(item => a.indexOf(item) < 0);
	}

	ngOnInit() {
		this.localdata = JSON.parse(localStorage.getItem('favouratgeItems'));
		this._checkFavorateItems(this.localdata, this.filmslist);
	}
}
