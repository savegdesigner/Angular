class Book {
    public id: string = this.generateId()
    public name: string
    public author: string
    public category: string

    constructor(name: string, author: string, category: string){
        this.name = name
        this.author = author
        this.category = category
    }

    public getId(): string {
        return this.id
        
    }

    public getName(): string {
        return this.name

    }

    public getAuthor(): string {
        return this.author

    }

    public getCategory(): string {
        return this.category

    }

    private generateId(): string {
        return Math.random().toString(32).substring(2)
    }

}

export default Book