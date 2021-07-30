import React, { useEffect } from 'react';
import {
  addProducts,
  selectProducts,
} from '../../features/products/productsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

const FoodTablePage = () => {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addProducts());
  }, []);

  return (
    <main>
      <h2>Products</h2>
      {products.map((product) => (
        <>
          <div>{product.title}</div>
          <div>{product.description}</div>
          <hr />
        </>
      ))}
    </main>
  );
  // const foodsRef = firestore.collection('foods');
  // const [foodsData] = useCollectionData<any>(foodsRef, {
  //   transform: (food: Food) => {
  //     return transformFood(food);
  //   },
  // });
  // const onRowSelectionChange = (rowsSelected: any) => {
  //   const selectedFoods = rowsSelected.map(
  //     (rowIndex: any) => foodsData?.[rowIndex]
  //   );
  //   console.log('selectedFoods ---->', selectedFoods);
  //   const totalEnergy = calculateTotalEnergy(selectedFoods);
  //   console.log('totalEnergy ---->', totalEnergy);
  //   const nutrientsTotals = calculateNutrientsTotal(selectedFoods);
  //   console.log('nutrientsTotals ---->', nutrientsTotals);
  // };
  //
  // const calculateTotalEnergy = (foods: Food[]) => {
  //   return foods.reduce((total, food) => {
  //     return total + food.foodNutrients[NutrientIdMap.Energy]?.value;
  //   }, 0);
  // };
  //
  // const options = {
  //   enableNestedDataAccess: '.',
  //   onPageChange: () => {
  //     console.log('hi');
  //   },
  //   // eslint-disable-next-line @typescript-eslint/no-empty-function
  //   onChangeRowsPerPage: () => {},
  //   onRowSelectionChange: (
  //     _currentRowsSelected: any,
  //     _allRowsSelected: any,
  //     rowsSelected: any
  //   ) => {
  //     onRowSelectionChange(rowsSelected);
  //   },
  // };
  //
  // return (
  //   <>
  //     {/*<SearchFood />*/}
  //
  //     <MUIDataTable
  //       title={'Food nutriments'}
  //       // @ts-ignore
  //       data={foodsData}
  //       columns={TABLE_COLUMNS}
  //       options={options}
  //     />
  //   </>
  // );
};

export default FoodTablePage;
