import { Food } from '../interfaces/food.interface';
import { FoodFormatted } from '../interfaces/food-formatted.interface';

export const convertArrayToObject = (array: any, keyProperty: string) => {
  return array.reduce((object: { [key: string]: any }, element: any) => {
    return {
      ...object,
      [element[keyProperty]]: element,
    };
  }, {});
};

export const transformFood = (food: Food): FoodFormatted => {
  return {
    ...food,
    foodNutrients: convertArrayToObject(food.foodNutrients, 'nutrientId'),
  };
};

export const calculateNutrientsTotal = (
  foods: Food[]
): { [key: string]: number } => {
  return foods.reduce((nutrientsTotals: any, food: any) => {
    Object.entries(food.foodNutrients).forEach(([id, nutrient]: any) => {
      nutrientsTotals[id] = (nutrientsTotals[id] || 0) + nutrient.value;
    });
    return nutrientsTotals;
  }, {});
};

export const buildTotalsRow = (nutrientTotals: any): FoodFormatted => {
  return {
    additionalDescriptions: '',
    allHighlightFields: '',
    commonNames: '',
    dataType: '',
    description: 'Totals',
    fdcId: 0,
    foodCategory: '',
    foodNutrients: nutrientTotals,
    lowercaseDescription: '',
    mostRecentAcquisitionDate: '',
    ndbNumber: 0,
    publishedDate: '',
    scientificName: '',
    score: 0,
  };
};
