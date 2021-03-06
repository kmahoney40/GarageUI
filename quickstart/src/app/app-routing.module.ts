import { NgModule }      from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { PiplatesComponent }    from './components/piplates/piplates.component';

const routes: Routes = [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'heroes', component: HeroesComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'detail/:id', component: HeroDetailComponent },
      { path: 'piplates', component: PiplatesComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
