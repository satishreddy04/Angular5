import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { ToDoAppComponent } from './to-do-app/to-do-app.component';
import { TodoInputComponent } from './to-do-app/todo-input/todo-input.component';
import { TodoListComponent } from './to-do-app/todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CryptoAppComponent } from './crypto-app/crypto-app.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { GalaxyComponent } from './galaxy/galaxy.component';
import { GalaxyDetailsComponent } from './galaxy/galaxy-details/galaxy-details.component';
import { GlaxyTabDetailsComponent } from './galaxy/glaxy-tab-details/glaxy-tab-details.component';
import { JediEnrollmentComponent } from './galaxy/jedi-enrollment/jedi-enrollment.component';
import { MyFavouratesComponent } from './galaxy/my-favourates/my-favourates.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DataStorage } from './service/dataStore.service';
import { StarwarsService } from './service/starwars.service';

const appRoutes: Routes = [
	{ path: '', component: SplashscreenComponent },
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{
				path: 'galaxy',
				component: GalaxyComponent
			},

			{
				path: 'enrollment',
				component: JediEnrollmentComponent
			},
			{
				path: 'myfavourate',
				component: MyFavouratesComponent
			}
		]
	},
	{
		path: 'home/galaxy/:id',
		component: GlaxyTabDetailsComponent
	},
	// redirectTo: '/home', pathMatch: 'full' },
	{ path: 'galaxy', component: GalaxyComponent },
	// { path: 'home', component: HomeComponent },
	{ path: 'todo', component: ToDoAppComponent },
	{ path: 'cypto', component: CryptoAppComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		CryptoAppComponent,
		ToDoAppComponent,
		HomeComponent,
		TodoInputComponent,
		TodoListComponent,
		PageNotFoundComponent,
		SplashscreenComponent,
		GalaxyComponent,
		GalaxyDetailsComponent,
		GlaxyTabDetailsComponent,
		JediEnrollmentComponent,
		MyFavouratesComponent,
		FilterPipe
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		WebcamModule,
		NgbModule,
		HttpClientModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [StarwarsService, DataStorage],
	bootstrap: [AppComponent]
})
export class AppModule {}
