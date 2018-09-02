import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';


@Injectable()
export class StorageDataService {
  private static BASE_PATH = 'https://ng-recipe-book-23.firebaseio.com/';
  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

  storeData() {
    const accessToken = this.authService.getToken();
    return this.http.put(
      StorageDataService.BASE_PATH + 'recipes.json?auth=' + accessToken,
      this.recipeService.getRecipes()
    );
  }

  fetchData() {
    const accessToken = this.authService.getToken();
    this.http.get(StorageDataService.BASE_PATH + 'recipes.json?auth=' + accessToken)
      .pipe(map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
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
