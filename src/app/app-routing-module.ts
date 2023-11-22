import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Home-page/sign-in/sign-in.component';
import { ContainerComponent } from './Home-page/container/container.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { MyshopsComponent } from './admin/components/myshops/myshops.component';
import { HomeComponent } from './admin/components/home/home.component';
import { NavComponent } from './Home-page/nav/nav.component';

const appRoute: Routes = [
  { path: 'home', component: ContainerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'myshops', component: MyshopsComponent },
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
        ],
      },
    ],
  },

  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   children: [
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //     // { path: 'upload', component: UploadComponent },
  //     {
  //       path: 'dashboard',
  //       component: DashboardComponent,
  //       children: [
  //         // {path: '',redirectTo: 'upload',pathMatch: 'full'},

  //         { path: 'myHouses', component: MyshopsComponent },
  //         { path: 'dash', component: DashboardComponent },
  //       ],
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
