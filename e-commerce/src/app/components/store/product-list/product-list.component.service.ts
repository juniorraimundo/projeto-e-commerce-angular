/* 

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "./model/book";

@Injectable()

export class BookService{

    private url = 'https://localhost:44382/api/bookstore';

    HttpOptions = {
        Headers: new HttpHeaders({'content-tipe':'aplication/json'})
    }

    constructor (private http:HttpClient){}

    getBook(){
        return this.http.get(this.url)
    }
} 
*/