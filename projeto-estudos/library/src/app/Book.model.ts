class Book {
    id?: string
    name: string
    author: string

    constructor(name: string, author: string){
        // this.id = this.generateId()
        this.name = name
        this.author = author
    }

    public generateId(): string{
        let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        return id
    }
}

export default Book