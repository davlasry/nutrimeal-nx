import React, { useEffect, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import SearchFood from "../SearchFood/SearchFood";
import { firestore } from "../../firebase";
import MUIDataTable from "mui-datatables";
import { TABLE_COLUMNS } from "../../constants/table-columns";
import { NutrientIdMap } from "../../constants/nutrient-ids";

const FoodTable = () => {
  const foodsRef = firestore.collection("foods");
  const [foodsData] = useCollectionData<any>(foodsRef);
  const [foods, setFoods] = useState(foodsData);
  const nutrients = NutrientIdMap;

  useEffect(() => {
    console.log("foodsData ---->", foodsData);
    const formattedFoods = formatFoods(foodsData);
    setFoods(formattedFoods);
  }, [setFoods]);

  useEffect(() => {
    console.log(foods);
  }, foods);

  return (
    <>
      <SearchFood />

      <MUIDataTable
        title={"Food nutriments"}
        // @ts-ignore
        data={foods}
        columns={TABLE_COLUMNS}
      />
    </>
  );
};

const formatFoods = (foods: any): any => {
  return foods?.map((food: any) => {
    // const nutrientsMap = food.foodsNutrients;
    return { ...food, formatted: true };
  });
};

export default FoodTable;
