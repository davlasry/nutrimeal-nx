export const TABLE_COLUMNS = [
  // {
  //   name: "food",
  //   label: "Food",
  //   options: {
  //     filter: true,
  //     sort: true,
  //   },
  // },
  {
    name: "description",
    label: "Food",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "foodNutrients[0].value",
    label: "Kcal",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "protein",
    label: "Prot.",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "lipids",
    label: "Lip.",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "carbs",
    label: "Carb.",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "water",
    label: "Water",
    options: {
      filter: true,
      sort: false,
    },
  },
];
