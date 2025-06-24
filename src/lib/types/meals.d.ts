declare type Meals = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
} & DatabaseFields;

declare type MealByCategory = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
} & DatabaseFields;

declare type MealDetails = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strInstructions: string;
  strMealThumb: string;
} & DatabaseFields;
