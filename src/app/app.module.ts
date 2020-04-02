import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfilesComponent } from './profiles/Profiles.component';
import { SettingsComponent } from './settings/settings.component';
import { LogoutComponent } from './logout/logout.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import {RouterModule, Routes} from '@angular/router';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [

{ path: 'login', component: LoginComponent},
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
    LoginComponent,
    LogoutComponent,
    PostsComponent,
    ProfilesComponent,
    SettingsComponent,
    ServicesComponent,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
