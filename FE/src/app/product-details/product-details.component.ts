import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../service/book.service';
import { Books, Books1 } from '../models/book';
import { ReviewsService } from '../service/review.service';
import { Review } from '../models/review';
import { AuthorService } from '../service/author.service';
import { Author } from '../models/author';
import { CateService } from '../service/cate.service';
import { Cate } from '../models/cate';
import { CartService } from '../service/cart.service';
import { Mess } from '../models/cart';
import { PublisherService } from '../service/publisher.service';
import { Publisher } from '../models/publisher';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  books: Books;
  review: Review;
  idrv: string;
  reviews: Review[];
  addreivew: Review;
  author: Author;
  cates: Cate[];
  mess: Mess;
  pub: Publisher[];
  pubs: Publisher[];
  auts: Author[];
  books1: Books[];
  cates1: Cate[];
  constructor(
    private route: ActivatedRoute,
    private BooksService: BooksService,
    private ReviewService: ReviewsService,
    private AuthorsService: AuthorService,
    private CateService: CateService,
    private cartService: CartService,
    private publisherService: PublisherService
  ) { }

  async ngOnInit() {
    await this.getBookfromRoute();
    await this.getReviewfromIDBook();
    await this.getAuthorfromIDBook();
    await this.getCatefromIDBook();
    await this.getAllPublisher();
    await this.getAllBook();
    await this.getAllCate();
    await this.getAllAuthor();
    await this.getAllPub();
  }
  getAllPub() {
    this.publisherService.getPublishers().subscribe(res => this.pubs = res);
  }
  getAllAuthor() {
    this.AuthorsService.getAuthors().subscribe(res => this.auts = res);
  }
  getAllBook() {
    this.BooksService.getBooks().subscribe(res => this.books1 = res);
  }
  getAllCate() {
    this.CateService.getCates().subscribe(res => this.cates1 = res);
  }
  async getBookfromRoute() {
    const id = this.route.snapshot.paramMap.get('id');
    await this.BooksService.getBooksFromID(id).toPromise().then(res => this.books = res,);

  }
  // getReviewfromID(id: string) {
  //   const idrv = this.books.reviews;
  //   this.ReviewService.getReviewFromID(id).subscribe(res => this.review = res);
  //   console.log(this.review);
  // }
  async getReviewfromIDBook() {
    const id = this.route.snapshot.paramMap.get('id');
    await this.ReviewService.getReviewFromIDBook(id).toPromise().then(res => this.reviews = res);

  }
  async save(review: number, comment: string) {
    const bookId = this.route.snapshot.paramMap.get('id');
    const newReview: Review = { review, comment, bookId } as Review;
    await this.ReviewService.addReview(newReview).toPromise().then(res => this.addreivew = res);
    await this.getReviewfromIDBook();
  }
  async getAuthorfromIDBook() {
    const id = this.route.snapshot.paramMap.get('id');
    await this.AuthorsService.getAuthorFromIDBook(id).toPromise().then(res => this.author = res);
  }
  async getCatefromIDBook() {
    const id = this.route.snapshot.paramMap.get('id');
    await this.CateService.getCateFromID(id).toPromise().then(res => this.cates = res);

  }
  async getAllPublisher() {
    await this.publisherService.getPublishers().toPromise().then(res => this.pub = res,);

  }
  async add(){
    await alert('Thêm Thành Công');
  }
}
