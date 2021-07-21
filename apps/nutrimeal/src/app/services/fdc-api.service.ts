import axios from 'axios';

const FDC_API_URL = 'https://api.nal.usda.gov/fdc/v1/foods';
const FDC_API_KEY = process.env.REACT_APP_FDC_API_KEY;

const SPOONACULAR_API_URL = 'https://api.spoonacular.com';
const SPOONACULAR_API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

export const searchFood = async (keyword: string, pageSize = 10) => {
  const response = await axios.get(
    `${FDC_API_URL}/search?query=${keyword}&dataType=Survey (FNDDS)&pageSize=${pageSize}&api_key=${FDC_API_KEY}`
  );
  return response.data;
};

export const searchFoodSpoonacular = async (keyword: string, pageSize = 10) => {
  const response = await axios.get(
    `${SPOONACULAR_API_URL}/food/ingredients/search?apiKey=${SPOONACULAR_API_KEY}&query=banana`
  );
  console.log(response);
  return response.data;
};
