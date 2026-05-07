class Book {
    constructor(title, year, author) {
        this.title = title;
        this.year = year;
        this.author = author;
    }

    static publish(country, region) {
        this.country = country;
        this.region = region;

        return this;
    }
}

const book1 = new Book ('Ikigai', '2022', 'John')
const book2 = Book.publish ('Japan', 'Saitama')

console.log(book1.author);
console.log(book2.country);
