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

     getPosts(email: string): Promise<any> {

        return new Promise((resolve, reject) => {
            
        })

        firebase.database().ref(`posts/${btoa(email)}`)
            .once('value')
            .then((snapshot: any) => {
                // console.log(snapshot.val())

                let posts: Array<any> = []

                snapshot.forEach((childSnapshot: any) => {

                    let post = childSnapshot.val()

                    firebase.storage().ref()
                        .child(`images/${childSnapshot.key}`)
                        .getDownloadURL()
                        .then((url: string) => {
                            // console.log(url)
                            post.imageUrl = url

                            firebase.database().ref(`user_detail/${btoa(email)}`)
                                .once('value')
                                .then((snapshot: any) => {
                                    // console.log(snapshot.val())

                                    post.username = snapshot.val().username
                                    posts.push(post)

                                })
                            // console.log(post)

                        })
                        

                })

            })

     }

}

export default Db