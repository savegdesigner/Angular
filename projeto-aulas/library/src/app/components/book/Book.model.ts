class Book {
    public id: number
    public name: string
    public author: string
    public category?: string

    constructor(id: number, name: string, author: string){
        this.id = id
        this.name = name
        this.author = author
    }

    public getBookId(): number {
        return this.id
        
    }

    public getBookName(): string {
        return this.name

    }

    public getBookAuthor(): string {
        return this.author

    }

    public getBookCategory(): string {
        return this.category

    }

}

export default Book