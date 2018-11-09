import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[] = [
    new Recipe('Burger',
    'A hamburger with a rim of lettuce sitting on a black plate against a black background',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg',
    [
      new Ingredient('meal',1),
      new Ingredient('tomato',2)
    ]),
    new Recipe ('Special fried rice',
    'Fried Rice is a dish of cooked rice that has beeb stir-fried in a wok or a fring pan and is usually',
    '../src/app/img/goreng.jpg',
    [
      new Ingredient('rice',1),
      new Ingredient('meal',3),
      new Ingredient('egg',1)
    ]),
    ];

    getRecipes(){
      return this.recipes.slice();
    }
    //tambahkan method addIngredientsShoppingList dengan parameter ingredient[]
    addIngredientsShoppingList(ingredients : Ingredient[]){
      this.slsService.addIngredients(ingredients);
    }
    //tambahkan parameter pada construktor
    constructor(private slsService : ShoppingListService){}
}
