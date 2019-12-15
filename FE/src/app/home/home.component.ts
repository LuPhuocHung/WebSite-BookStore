import { Component, OnInit } from '@angular/core';
import { Books } from '../models/book';
import { BooksService } from '../service/book.service';
import { CateService } from '../service/cate.service';
import { Cate } from '../models/cate';
import { BookPubComponent } from '../book-pub/book-pub.component';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
import { Mess, Cart } from '../models/cart';
import { Publisher } from '../models/publisher';
import { Author } from '../models/author';
import { PublisherService } from '../service/publisher.service';
import { AuthorService } from '../service/author.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Books[];
  cates: Cate[];
  searchbook: Books;
  mess: Mess;
  carts: Cart;
  pubs: Publisher[];
  auts: Author[];
  constructor(private BooksService: BooksService,
              private CateService: CateService, private route: ActivatedRoute, private cartService: CartService,
              private PubService: PublisherService,
              private AuthorService: AuthorService,) { }

  async ngOnInit() {
    this.getAllBook();
    this.getAllCate();
    this.GetCart();
    this.getAllAuthor();
    this.getAllPub();
  }

  getAllPub() {
    this.PubService.getPublishers().subscribe(res => this.pubs = res);
  }
  getAllAuthor() {
    this.AuthorService.getAuthors().subscribe(res => this.auts = res);
  }
  getAllBook() {
    this.BooksService.getBooks().subscribe(res => this.books = res);
  }
  getAllCate() {
    this.CateService.getCates().subscribe(res => this.cates = res);
  }
  // search(searchTerm: string) {
  //   this.searchbook = undefined;
  //   if (searchTerm) {
  //     this.heroesService
  //       .searchHeroes(searchTerm)
  //       .subscribe(heroes => (this.heroes = heroes));
  //   }
  // }
  AddtoCarts() {
    const id = this.route.snapshot.paramMap.get('id');
    this.cartService.AddtoCart(id).subscribe(res => this.mess = res);
  }
  async add(id: string){
    await this.cartService.AddtoCart(id).toPromise().then(res => this.mess = res);
    await console.log(this.mess.message);
  }
  GetCart() {
    this.cartService.getShoppingCart().subscribe(res => this.carts = res);
    console.log(this.carts);
  }
  search(id: string){
    this.BooksService.searchBook(id).subscribe(res => this.books = res);
  }
}
