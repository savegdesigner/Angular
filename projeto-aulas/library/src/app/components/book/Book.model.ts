class Book {
    public id: number
    public name: string
    public author: string
    public category: string

    constructor(id: number, name: string, author: string, category: string){
        this.id = id
        this.name = name
        this.author = author
        this.category = category
    }

    public getId(): number {
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

    private generateId(): number {
        return 0
    }

}

export default Book