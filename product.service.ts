import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product';
@Injectable({
  providedIn: 'root'
})

export class ProductService
{
  url="https://localhost:44371/api/v1/Product";
  constructor(private http:HttpClient){}
  getAllProdcuts():Observable<Product[]>
  {
    return this.http.get<Product[]>
    
    (this.url);
  }
  getProductById(id:string):Observable<Product>
  {
    
    return this.http.get<Product>(this.url + '/'+id);
  }
  CreateProduct(product:Product):Observable<Product>
  {
    const httpOptions = {headers:new HttpHeaders({'ContentType' : 'application/json'})};
    
    return this.http.post<Product>(this.url,product,httpOptions);
  }
  UpdateProduct(product:Product):Observable<Product>
  {
    const httpOptions = {headers:new HttpHeaders({'ContentType':'application/json'})};
    
    return this.http.put<Product>(this.url ,product,httpOptions);
  }
  DeleteProduct(id:string):Observable<number>
  {
    const httpOptions = {headers: new HttpHeaders({'ContentType':'application/json'})};
    
    return this.http.delete<number>(this.url + '?id=' + id,httpOptions);
  }
}
