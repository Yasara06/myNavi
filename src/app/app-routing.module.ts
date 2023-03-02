import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home' , component: HomeComponent},
  {path:'services', component:ServicesComponent},
  {path:'products', component:ProductsComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
