import User from "./User.model";
import * as firebase from 'firebase'

class Auth {

    public registerUser(user: User): void{
        console.log('Service ready ', user)

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((response: any) => {
                console.log(response)
            })
            .catch((error: Error) => {
                console.log(error)
            })
    }
}

export default Auth