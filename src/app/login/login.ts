import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from '../Service/auth-service/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private loginservice = inject(Auth);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  login() {
    this.loginservice.login();   // 1. flip the flag to true

    // 2. read where the user originally wanted to go
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '/';

    // 3. actually send them there
    this.router.navigateByUrl(returnUrl);
  }
}
