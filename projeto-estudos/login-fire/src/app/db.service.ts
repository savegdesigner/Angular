import * as firebase from 'firebase'
import { Injectable } from '@angular/core'
import Upload from './upload.service'

@Injectable()
class Db{

    constructor(private upload: Upload){}

    public post(post: any): void{
        // console.log('Post data control: ')
        // console.log(post)

        firebase.database().ref(`posts/${btoa(post.email)}`)
            .push({
                title: post.title,
                description: post.description
            })
            .then((res: any) => {
                let imageName: number = res.key
                
            firebase.storage().ref()
                .child(`images/${imageName}`)
                .put(post.image)
                .on(firebase.storage.TaskEvent.STATE_CHANGED, 
                    (snapshot: any) => {
                        this.upload.status = 'uploading'
                        this.upload.state = snapshot
                        // console.log(snapshot)
                    },
                    (error)=> {
                        this.upload.status = 'error'
                        // console.log(error)
                    },
                    ()=> {
                        this.upload.status = 'uploaded'
                        // console.log('Uploaded!')
                        
                    })

            })
        
     }

     getPosts(email: string): any{

        firebase.database().ref(`posts/${btoa(email)}`)
            .once('value')
            .then((snapshot: any) => {
                console.log(snapshot.val())
            })

     }

}

export default Db