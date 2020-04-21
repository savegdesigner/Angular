import { of, Observer } from 'rxjs'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

// map(x => 2 * 2)(of(1, 2, 3)).subscribe(v => console.log(`value: ${v}`))

let testObservable = Observable.create((observer: Observer<string>) => {
    observer.next('first stream event')
})

testObservable.subscribe((result: any) => {
    console.log(result)
})

let testObservable2 = Observable.create((observer: Observer<number>) => {
    observer.next(5)
    // observer.error('Something went wrong on event stream')
    observer.complete()
    observer.next(2)
})

testObservable2.subscribe((result: number) => {
    console.log(`${result} * 5 = ${result * 5}`),
    (error: string) => {console.log(error)},
    () => { console.log('Stream ended') }
})