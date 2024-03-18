import { Routes } from '@angular/router';
import { NotFoundError, config } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';

export const routes: Routes = [
  {path:"home",component:HomeComponent,title:"home"},
   {path:"login",component:LoginComponent ,title:"login"},
  {path:"profile",component:ProfileComponent,title:"profile"},
  {path:"about",component:AboutComponent,title:"about"},
  {path:"contact",component:ContactComponent,title:"contact"},
  {path:"product/:id",component:ProductDetailsComponent,title:"productdetails"},
  {path:"cart",component:CartComponent,title:"cart"},
  {path:"**",component:NotFoundError,title:"error"},


];
export default config;
