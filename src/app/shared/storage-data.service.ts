import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';


@Injectable()
export class StorageDataService {
  private static BASE_PATH = 'https://ng-recipe-book-23.firebaseio.com/';
  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeData() {
    // const accessToken = this.authService.getToken();
    /*
    return this.httpClient.put(
      StorageDataService.BASE_PATH + 'recipes.json',
      this.recipeService.getRecipes(),
      {
        observe: 'body',
        params: new HttpParams().set('auth', accessToken)
      }
    );
    */

    const req = new HttpRequest(
      'PUT',
      StorageDataService.BASE_PATH + 'recipes.json',
      this.recipeService.getRecipes(),
      {
        reportProgress: true
        // params: new HttpParams().set('auth', accessToken)
      });
    return this.httpClient.request(req);
  }

  fetchData() {
    // const accessToken = this.authService.getToken();
    this.httpClient.get<Recipe[]>(StorageDataService.BASE_PATH + 'recipes.json',
      {
        observe: 'body',
        responseType: 'json'
        // params: new HttpParams().set('auth', accessToken)
      })
      .pipe(map(
        (recipes: Recipe[]) => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
