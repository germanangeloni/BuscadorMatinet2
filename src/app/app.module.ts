import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginComponent} from './login/login.component';
import { ProfilesComponent } from './profiles/Profiles.component';
import { SettingsComponent } from './settings/settings.component';
import { LogoutComponent } from './logout/logout.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import {RouterModule, Routes} from '@angular/router';

import { FormsModule } from '@angular/forms';
import { FilterPipe } from './components/posts/pipes/filter.pipe';

import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [

{ path: 'login', component: loginComponent},
{ path: 'logout', component: LogoutComponent},
{ path: 'profiles', component: ProfilesComponent},
{ path: 'services', component: ServicesComponent},
{ path: 'settings', component: SettingsComponent},
{ path: 'home', component: HomeComponent},
{ path: 'posts', component: PostsComponent},
{ path: '', redirectTo: '/login', pathMatch:'full'},
{ path: '**', redirectTo: '/login', pathMatch:'full'}

] 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    loginComponent,
    LogoutComponent,
    PostsComponent,
    ProfilesComponent,
    SettingsComponent,
    FilterPipe,
    ServicesComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



