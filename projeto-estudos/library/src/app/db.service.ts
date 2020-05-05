import * as firebase from 'firebase'
import { Injectable } from '@angular/core'
import Book from './Book.model'

@Injectable()
class Db{

    public createBook(book: Book): void {
        firebase.database().ref(`books/${btoa(book.id)}`)
        .push({
            name: book.name,
            author: book.author
        })
        .then(response => {
            console.log(response)
        })
    }

    public getBooks(): Promise<any> {

        let books = []

        return new Promise((resolve, reject) => {

            firebase.database().ref('books/dW5kZWZpbmVk')
            .on('value', (snapshot: any) => {

                snapshot.forEach(child => {
                    // console.log(child.val())
                    books.push(child.val())

                })
            })

            resolve(books)

        })



    }
}

export default Db