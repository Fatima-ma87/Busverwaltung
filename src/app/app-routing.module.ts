import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbusComponent } from './home/addbus/addbus.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UeubersichtComponent } from './home/ueubersicht/ueubersicht.component';

const routes: Routes = [

  { path: '', redirectTo: 'Bus', pathMatch: 'full' },
  { path: 'Bus', component: HomeComponent },
  { path: 'Bus/addbus', component: AddbusComponent },
  { path: 'Bus/ubersicht', component: UeubersichtComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
