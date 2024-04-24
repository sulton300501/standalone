import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { response } from 'express';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {



  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  hide = true;
  form!: FormGroup;
  fb = inject(FormBuilder);
  authService = inject(AuthService)
  decodedToken:any | null
  tokenKey='token' 
  roles:string[]=[]



login(){
  this.authService.login(this.form.value).subscribe(
    {
      next:(response)=> {


   this.decodedToken=jwtDecode(localStorage.getItem(this.tokenKey)!)
  
   for (let index = 0; index < this.decodedToken.role.length; index++) {
    const element = this.decodedToken.role[index];
    if(this.decodedToken.role[index]==='Admin'){
      this.router.navigate(['/users'])
    }else if(this.decodedToken.role[index]==='Student'){
      this.router.navigate(['/student-profile'])
    }
    
   }

         this.matSnackBar.open(response.message,'Close',{
          duration:5000,
          horizontalPosition:'center'
         })
      },
      error:(err)=>{
      
      }
    }
  )
}


ngOnInit(): void {
  this.form=this.fb.group({
    email:['',[Validators.required , Validators.email]],
    password:['',Validators.required],
  })
}


}
