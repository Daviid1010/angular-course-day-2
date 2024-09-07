import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookTitle: string = ""
  bookAuthor: string = ""

  books: Book[] = []

  ngOnInit(): void {
    let localBookStorage = localStorage.getItem("books")
    this.books = localBookStorage ? JSON.parse(localBookStorage) :  []

  }


  addBook() {
    if(this.bookTitle.trim().length && this.bookAuthor.trim().length) {
      let newBook: Book = {
        id: Date.now(),
        title: this.bookTitle,
        author: this.bookAuthor
      };

      this.books.push(newBook);
      localStorage.setItem("books", JSON.stringify(this.books))

    }
  }

  deleteBook(index: number) {
    this.books.splice(index, 1)
    localStorage.setItem("books", JSON.stringify(this.books))
  }

}
