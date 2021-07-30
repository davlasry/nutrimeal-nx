import React, { FormEvent, useState } from 'react';
import { searchFoodApi } from '../../services/fdc-api.service';
import { firestore } from '../../firebase';

const SearchFood = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [foodResults, setFoodResults] = useState<any[]>([]);

  const foodsRef = firestore.collection('foods');

  const onSubmitFood = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const result = await searchFood(searchValue);
    const result = await searchFoodApi(searchValue);
    console.log(result);
    setFoodResults(result.common);
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
              foodResults?.map((food) => (
                <div key={food.tag_id}>
                  <div>{food.food_name}</div>
                  <img src={food.photo?.thumb} />
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
