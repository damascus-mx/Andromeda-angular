import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AUTH_ROUTES } from './auth.routing';

@NgModule({
  imports: [AUTH_ROUTES],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
