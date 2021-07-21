import { NutrientIdMap } from '../../constants/nutrient-ids';

export const TABLE_COLUMNS = [
  {
    name: 'description',
    label: 'Food',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: `foodNutrients.${NutrientIdMap.Energy}.value`,
    label: 'Kcal',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: `foodNutrients.${NutrientIdMap.Protein}.value`,
    label: 'Prot.',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: `foodNutrients.${NutrientIdMap.Lipid}.value`,
    label: 'Lip.',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: `foodNutrients.${NutrientIdMap.Carb}.value`,
    label: 'Carb.',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: `foodNutrients.${NutrientIdMap.Alcohol}.value`,
    label: 'Alcohol',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: `foodNutrients.${NutrientIdMap.Caffeine}.value`,
    label: 'Caffeine',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: `foodNutrients.${NutrientIdMap.Theobromine}.value`,
    label: 'Theobromine',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: `foodNutrients.${NutrientIdMap.Fiber}.value`,
    label: 'Fiber',
    options: {
      filter: true,
      sort: true,
    },
  },
];
