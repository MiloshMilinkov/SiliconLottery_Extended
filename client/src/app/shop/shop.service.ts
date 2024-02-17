import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';
import { ShopParams } from '../shared/models/shopParams';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl:string= environment.apiUrl;
  products: Product[] = [];
  brands: Brand[] =[];
  types: Type[] = [];

  constructor(private http:HttpClient) { }

  getProducts(shopParams: ShopParams){
    let params = new HttpParams();

    if(shopParams.brandId !== null){
      params = params.append('brandId', shopParams.brandId);
    }
    if(shopParams.typeId !== null){
      params = params.append('typeId', shopParams.typeId);
    }
    if(shopParams.searchTerm){
      params = params.append('searchTerm', shopParams.searchTerm);
    }
    params = params.append('orderBy', shopParams.orderBy);
    params = params.append('pageIndex', shopParams.pageIndex.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());
    console.log(shopParams.pageIndex,shopParams.pageSize)
    //return this.http.get<Pagination<Product[]>>(this.baseUrl+'products', {params});
    return this.http.get<Pagination<Product[]>>(this.baseUrl+'products', {params}).pipe(
      map(response => {
        this.products = response.data;
        return response;
      })
    )
  }

  getBrands(){
    return this.http.get<Brand[]>(this.baseUrl+'products/brands');
  }

  getTypes(){
    return this.http.get<Type[]>(this.baseUrl+'products/types');
  }

  getProduct(id:number){
    const product = this.products.find(p => p.id === id);

    if(product) return of(product);

    return this.http.get<Product>(this.baseUrl+'products/'+id)
  }
}
