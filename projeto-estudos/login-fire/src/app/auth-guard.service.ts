import { CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'
import Auth from './auth/auth.service'

@Injectable()
class AuthGuard implements CanActivate{

    constructor(
        private auth: Auth
    ){}

    canActivate(): boolean{
        return this.auth.authenticated()
        
    }
}

export default AuthGuard