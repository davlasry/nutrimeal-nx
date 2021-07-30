import { Nutrient } from "./nutrient.interface";

export interface Food {
  additionalDescriptions: string;
  allHighlightFields: string;
  commonNames: string;
  dataType: string;
  description: string;
  fdcId: number;
  foodCategory: string;
  foodNutrients: Nutrient[];
  lowercaseDescription: string;
  mostRecentAcquisitionDate: string;
  ndbNumber: number;
  publishedDate: string;
  scientificName: string;
  score: number;
}
