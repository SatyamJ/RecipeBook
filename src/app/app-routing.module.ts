import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';

const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/recipes',
      pathMatch: 'full'
    },
    {
      path: 'shopping-list',
      component: ShoppingListComponent
    },
    {
      path: 'signin',
      component: SigninComponent
    },
    {
      path: 'signup',
      component: SignupComponent
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
