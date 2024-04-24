import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Router, RouterLink } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UsersComponent } from './admin/users/users.component';
import { UserDetailsComponent } from './admin/users/user-details/user-details.component';
import { StudentsComponent } from './admin/students/students.component';
import { StudentDetailsComponent } from './admin/students/student-details/student-details.component';
import { StudentProfileComponent } from './admin/students/student-profile/student-profile.component';
import { UserProfileComponent } from './admin/users/user-profile/user-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UsersComponent,
    UserDetailsComponent,
    StudentsComponent,
    StudentDetailsComponent,
    StudentProfileComponent,
    UserProfileComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule,
    HttpClientModule
    


  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient()

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
