import * as firebase from 'firebase'

class Db{

    public post(post: any): void{
        console.log('Post data control: ')
        console.log(post)

        let imageName: number = Date.now()

        firebase.storage().ref()
            .child(`images/${imageName}`)
            .put(post.image)
            .on(firebase.storage.TaskEvent.STATE_CHANGED, 
                (snapshot: any) => {
                    console.log(snapshot)
                },
                (error)=> {
                    console.log(error)
                },
                ()=> {
                    console.log('Uploaded!')
                })

        // firebase.database().ref(`posts/${btoa(post.email)}`)
        //     .push({
        //         title: post.title,
        //         description: post.description
        //     })
        
    }
}

export default Db