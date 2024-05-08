import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from 'src/app/shared/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy{

  currentLanguage: string = 'en';
  languageSubscription: Subscription;
  
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  returnUrl:string;

  constructor(private accountService: AccountService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private languageService: LanguageService){
      this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl' || '/shop'];
      this.languageSubscription = this.languageService.currentLanguage$.subscribe(lang => {
        this.currentLanguage = lang;
      });
    }

  onSubmit(){
   this.accountService.Login(this.loginForm.value).subscribe({
      next: () => this.router.navigateByUrl(this.returnUrl)
    })
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
}
}
