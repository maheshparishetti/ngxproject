import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';

const arr: Routes=[
  {path:'',component:HomeComponent}
]

export const routerModule=RouterModule.forRoot(arr);
