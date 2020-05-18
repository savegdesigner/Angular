import { Observable } from 'rxjs'

let observable = Observable.create(observer => {
    observer.next('Hello')
    observer.next('How are you?')
    setInterval(function() {
        observer.next('Update')
    }, 2000)
    observer.next('Hey')
})

// Next() Error() Complete()
let observer = observable
    .subscribe(
        x => { addItem(x) },
        error => console.log(error))

let observer2 = observable
        .subscribe(
            y => {addItem(y)},
            err => console.log(err)
            )

observer.add(observer2)

function addItem(val) {
    let node = document.createElement("li")
    let textnode = document.createTextNode(val)
    node.appendChild(textnode)
    document.getElementById('output').appendChild(node)
}

setTimeout(() => {
    observer.unsubscribe()
}, 4000)

import { Subject } from 'rxjs'

let subject = new Subject()

subject.subscribe(
    data => addItem('Observer 1: '+ data),
    err => addItem(err),
    () => addItem('Observer 1 completed')
)

subject.next('First Sent')

let observerSubject = subject.subscribe(
    data => addItem('Observer 2: ' + data)
)

subject.next('Second Sent')