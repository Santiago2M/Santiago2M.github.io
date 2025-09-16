import { Routes } from '@angular/router';

import { MainComponent } from './pages/main/main';
import { ContactoComponent } from './pages/contacto/contacto';

export const routes: Routes = [
	{
		path: '',
		component: MainComponent
	},
	{
		path: 'contacto',
		component: ContactoComponent
	}
];
