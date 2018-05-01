import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StarwarsService {
	private base_url: string = 'https://star-wars-edu.run.aws-usw02-pr.ice.predix.io';

	constructor(private http: HttpClient) {}
	getStarWarsData() {
		return this.http.get(this.base_url + '/api/characters');
		//  return this.moviesData;
	}
}
