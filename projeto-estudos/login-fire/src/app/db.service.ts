import * as firebase from 'firebase'

class Db{

    public post(post: any): void{
        console.log('Post data control')

        firebase.database().ref(`posts/${btoa(post.email)}`)
            .push({
                title: post.title,
                description: post.description
            })
        
    }
}

export default Db