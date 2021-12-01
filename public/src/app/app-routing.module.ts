import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeattleCComponent } from './seattle-c/seattle-c.component';
import { SanjoseCComponent } from './sanjose-c/sanjose-c.component';
import { BurbankCComponent } from './burbank-c/burbank-c.component';
import { WashingtonCComponent } from './washington-c/washington-c.component';
import { ChicagoCComponent } from './chicago-c/chicago-c.component';
import { DallasCComponent } from './dallas-c/dallas-c.component';


const routes: Routes = [
  {
    path: 'seattle',
		component: SeattleCComponent
  },
  {
    path: 'sanjose',
		component: SanjoseCComponent
  },
  {
    path: 'burbank',
		component: BurbankCComponent
  },
  {
    path: 'dallas',
		component: DallasCComponent
  },
  {
    path: 'washington',
		component: WashingtonCComponent
  },
  {
    path: 'chicago',
		component: ChicagoCComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
