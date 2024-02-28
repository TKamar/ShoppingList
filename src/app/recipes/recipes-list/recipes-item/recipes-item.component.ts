import { Component, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe: Recipe | any;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onItemSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);

  }

}
