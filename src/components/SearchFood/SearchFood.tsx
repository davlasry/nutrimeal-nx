import React, { FormEvent, useState } from "react";
import { searchFood } from "../../services/fdc-api.service";
import { firestore } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Food } from "../../interfaces/food.interface";

const SearchFood = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [foodResults, setFoodResults] = useState<Food[]>([]);

  const foodsRef = firestore.collection("foods");
  const [foods] = useCollectionData<Food[]>();

  const onSubmitFood = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await searchFood(searchValue);
    console.log(result);
    setFoodResults(result.foods);
  };

  const addFood = (foodData: Food) => {
    foodsRef.add(foodData);
  };

  return (
    <>
      <h2>Search a food</h2>

      <form onSubmit={onSubmitFood}>
        <input
          type="text"
          value={searchValue}
          onChange={({ target }: any) => setSearchValue(target.value)}
        />
        <button type="submit">Search</button>

        <div>
          <h3>Results</h3>
          <div>
            {
              // @ts-ignore
              foodResults.map((food) => (
                <>
                  <div key={food.fdcId}>{food.description}</div>
                  <button onClick={() => addFood(food)}>Add</button>
                </>
              ))
            }
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchFood;
