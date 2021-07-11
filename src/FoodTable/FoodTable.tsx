import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { TABLE_DATA } from "../data/table-data";
import { TABLE_COLUMNS } from "../data/table-columns";
import { firestore } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const FoodTable = () => {
  // const [foods, setFood] = useState([]);
  const foodsRef = firestore.collection("foods");
  const [foods] = useCollectionData();

  const onSubmitFood = (event: any) => {
    foodsRef.add({
      name: "banana",
    });
  };

  return (
    <>
      <button onClick={onSubmitFood}>Submit</button>
      <MUIDataTable
        title={"Food nutriments"}
        data={TABLE_DATA}
        columns={TABLE_COLUMNS}
      />
    </>
  );
};

export default FoodTable;
