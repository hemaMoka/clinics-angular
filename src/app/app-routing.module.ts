import { DoctorsComponent } from './doctors/doctors.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { SpacificClincComponent } from './spacific-clinc/spacific-clinc.component';

const routes: Routes = [
  {path:"" , redirectTo:"login" , pathMatch:"full"},
  { path: "home", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "doctors", component: DoctorsComponent },
  { path: "contactUs", component: ContactUsComponent },
  { path: "about", component: AboutComponent },
  {path:"spacific-clinc/:id",component:SpacificClincComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
