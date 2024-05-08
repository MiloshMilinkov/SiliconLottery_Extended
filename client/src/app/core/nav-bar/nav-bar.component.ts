import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { LanguageService } from 'src/app/shared/language.service';
import { BasketItem } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  currentLanguage: string = 'en';
  languageSubscription: Subscription;

  constructor(public basketService:BasketService, public accountService:AccountService, public languageService:LanguageService){
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }
  
  getCount(items: BasketItem[]){
    return items.reduce((sum,item)=>sum+item.quantity,0);
  }

  setLanguage(language: string) {
    this.languageService.setLanguage(language);
  }
  
  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}
