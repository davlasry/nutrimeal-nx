import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SearchFood from '../SearchFood/SearchFood';
import { firestore } from '../../firebase';
import MUIDataTable from 'mui-datatables';
import { NutrientIdMap } from '../../constants/nutrient-ids';
import { Food } from '../../interfaces/food.interface';
import {
  calculateNutrientsTotal,
  transformFood,
} from '../../utils/food-table.util';
import { TABLE_COLUMNS } from './table-columns';

const FoodTablePage = () => {
  const foodsRef = firestore.collection('foods');
  const [foodsData] = useCollectionData<any>(foodsRef, {
    transform: (food: Food) => {
      return transformFood(food);
    },
  });
  const onRowSelectionChange = (rowsSelected) => {
    const selectedFoods = rowsSelected.map((rowIndex) => foodsData[rowIndex]);
    console.log('selectedFoods ---->', selectedFoods);
    const totalEnergy = calculateTotalEnergy(selectedFoods);
    console.log('totalEnergy ---->', totalEnergy);
    const nutrientsTotals = calculateNutrientsTotal(selectedFoods);
    console.log('nutrientsTotals ---->', nutrientsTotals);
  };

  const calculateTotalEnergy = (foods: Food[]) => {
    return foods.reduce((total, food) => {
      return total + food.foodNutrients[NutrientIdMap.Energy]?.value;
    }, 0);
  };

  const options = {
    enableNestedDataAccess: '.',
    onPageChange: () => {
      console.log('hi');
    },
    onChangeRowsPerPage: () => {},
    onRowSelectionChange: (
      _currentRowsSelected,
      _allRowsSelected,
      rowsSelected
    ) => {
      onRowSelectionChange(rowsSelected);
    },
  };

  return (
    <>
      <SearchFood />

      <MUIDataTable
        title={'Food nutriments'}
        // @ts-ignore
        data={foodsData}
        columns={TABLE_COLUMNS}
        options={options}
      />
    </>
  );
};

export default FoodTablePage;
