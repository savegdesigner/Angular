import User from "./User.model";
import * as firebase from 'firebase'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router';

@Injectable()
class Auth {

    public tokenId: string

    constructor(
        private router: Router
    ){}

    public registerUser(user: User): void{
        console.log('Service ready ', user)

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((response: any) => {
                console.log('User registered: ', response)

                delete user.password

                firebase.database().ref(`user_detail/${btoa(user.email)}`)
                    .set(user)
            })
            .catch((error: Error) => {
                console.log(error)
            })

    }

    public loginUser(user: User): void{

        console.log('Service ready: ', user)

        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((response: any) => {
                console.log('Signed in: ', response)

                firebase.auth().currentUser.getIdToken()
                    .then((tokenId: string)=> {
                        this.tokenId = tokenId
                        localStorage.setItem('tokenId', tokenId)
                        this.router.navigate(['home'])
                    })
            })

            .catch((error: Error) => {
                console.log(error)
            })

    }

    public authenticated(): boolean{

        if(this.tokenId === undefined && localStorage.getItem('tokenId') != null){
            this.tokenId = localStorage.getItem('tokenId')
        }

        if(this.tokenId == undefined){
            this.router.navigate([''])
        }

        return this.tokenId !== undefined
        // Retun logic value

    }

    public logout(): void {
        firebase.auth().signOut()
            .then(() => {
                localStorage.removeItem('tokenId')
                this.tokenId = undefined
                this.router.navigate(['login'])

            })
            .catch((error: Error) => {
                console.log(error.message)

            })


    }
}

export default Auth