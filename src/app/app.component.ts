import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { CartComponent } from './Components/cart/cart.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,HeaderComponent,FooterComponent,ProductsComponent,SideMenuComponent,NavBarComponent,LifeCycleComponent,CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-store';
}
