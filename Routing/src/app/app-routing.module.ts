import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingComponent } from './setting/setting.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';

const routes: Route[] = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'setting',
    component:SettingComponent,
    children:[
      {
        path:'',
        redirectTo:'profile',
        pathMatch:'full'
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'contact',
        component:ContactComponent,
      },
      {
        path:'**',
        redirectTo:'profile',
        pathMatch:'full'
      },
    ]
  },

  {
    path:'**', //wildcard- Other url
    component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
