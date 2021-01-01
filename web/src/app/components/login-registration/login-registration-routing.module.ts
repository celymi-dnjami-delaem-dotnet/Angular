import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    {
        path: 'sign-in',
        component: LoginComponent,
    },
    {
        path: 'registration',
        component: RegistrationComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class LoginRegistrationRoutingModule {}