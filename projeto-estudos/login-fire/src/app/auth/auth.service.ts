import User from "./User.model";
import * as firebase from 'firebase'

class Auth {

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
            })
            .catch((error: Error) => {
                console.log(error)
            })

    }
}

export default Auth