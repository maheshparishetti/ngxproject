import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicefileService {

  constructor(private _http:HttpClient) { }
  url1 = "https://3df52e24.ngrok.io/api/KB/";


  url = this.url1+"GetArticles?getall=0&categ=";
  add_article: string =this.url1 +"InsertUpdateKBAricles";
  URLfetchDataById =this.url1 + 'GetKBArticlesById?ArticleId=';
  getArticles1 = this.url1 +"GetCategories";
  URLInsertUpdate =this.url1 + 'InsertUpdateKBAricles';
  readmore =this.url1 + "GetReadArticle?ArticleId=";
  pagination= this.url1 +"GetArticles?getall=0&categ=&";
  search = this.url1 +"GetArticles?getall=0&SearchString=";

  getArticles() {
    return this._http.get(this.url);
  }
  getCategories() {
    return this._http.get(this.getArticles1);
  }
  addArticles(item) {

    let body = JSON.stringify(item);
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.add_article, body, { headers: head });
  }
  readarti(data) {
    console.log(data);
    return this._http.get(this.readmore + data);
  }

}
