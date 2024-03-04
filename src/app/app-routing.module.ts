import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowAllPlayerComponent } from './show-all-player/show-all-player.component';
import { LiverTeamComponent } from './liver-team/liver-team.component';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {path:'players',component:ShowAllPlayerComponent},
  {path:'',component:LiverTeamComponent},
  {path:'app',component:AppComponent},
  {path:'player',component:DetailComponent},
  {path:'players/player/:id',component:DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
