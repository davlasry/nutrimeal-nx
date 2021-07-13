import axios from "axios";

const FDC_API_URL = "https://api.nal.usda.gov/fdc/v1/foods";
const FDC_API_KEY = process.env.REACT_APP_FDC_API_KEY;

export const searchFood = async (keyword: string) => {
  const response = await axios.get(
    `${FDC_API_URL}/search?query=${keyword}&dataType=Foundation&api_key=${FDC_API_KEY}`
  );
  return response.data;
};
