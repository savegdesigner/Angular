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

    public getBooks(): void {
        
    }
}

export default Db