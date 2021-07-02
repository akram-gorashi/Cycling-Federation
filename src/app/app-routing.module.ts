import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterRiderComponent } from "./components/register-rider/register-rider.component";
import { RidersListComponent } from "./components/riders-list/riders-list.component";

const routes: Routes = [
   {path: '', component: RidersListComponent},
   {path: 'register-new-riders', component: RegisterRiderComponent}
]

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})


export class AppRoutingModule { }
