import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerDetailGuard implements CanActivate {

  constructor( private router: Router ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id = +next.url[1].path;
      if( isNaN(id) ){
        alert( "ID no válido" );
        this.router.navigate( ['/beers'] );
        return false;
      }

      return true;
  }
}