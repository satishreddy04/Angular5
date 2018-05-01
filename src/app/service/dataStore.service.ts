import { Injectable } from '@angular/core';

@Injectable()
export class DataStorage {
	public data: any;
	public favourateItems = [];
	_getFavourateItem() {
		alert('hello');
	}

	getFavouriteItems() {
		const fav = localStorage.getItem('favouratgeItems');
		return JSON.parse(fav);
	}

	populateStorage(a) {
		var s = this.favourateItems;
		var d = s.push(a);
		localStorage.setItem('favouratgeItems', JSON.stringify(s));
		console.log(s);
	}

	public constructor() {}
}
