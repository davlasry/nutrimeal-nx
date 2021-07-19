import React, { FormEvent, useState } from 'react';
import { searchFoodSpoonacular } from '../../services/fdc-api.service';
import { firestore } from '../../firebase';
import { Food } from '../../interfaces/food.interface';

const SearchFood = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [foodResults, setFoodResults] = useState<Food[]>([]);

  const foodsRef = firestore.collection('foods');

  const onSubmitFood = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const result = await searchFood(searchValue);
    const result = await searchFoodSpoonacular(searchValue);
    console.log(result);
    setFoodResults(result.foods);
  };

  return (
    <>
      <h2>Search a food</h2>

      <form onSubmit={onSubmitFood}>
        <input
          type='text'
          value={searchValue}
          onChange={({ target }: any) => setSearchValue(target.value)}
        />
        <button type='submit'>Search</button>

        <div>
          <h3>Results</h3>
          <div>
            {
              // @ts-ignore
              foodResults?.map((food) => (
                <div key={food.fdcId}>
                  <div>{food.description}</div>
                  <button onClick={() => foodsRef.add(food)}>Add</button>
                </div>
              ))
            }
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchFood;
