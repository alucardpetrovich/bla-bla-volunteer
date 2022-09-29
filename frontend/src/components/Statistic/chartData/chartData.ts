const materialsData = {
  water: {
    used: Math.ceil(Math.random() * 100),
    remainder: Math.ceil(Math.random() * 100),
  },
  medicine: { used: Math.ceil(Math.random() * 100), remainder: Math.ceil(Math.random() * 100) },
  food: { used: Math.ceil(Math.random() * 100), remainder: Math.ceil(Math.random() * 100) },
};

const { water, medicine, food } = materialsData;

export const values = [
  Math.ceil((100 * water.used) / (water.used + water.remainder)),
  Math.ceil((100 * medicine.used) / (medicine.used + medicine.remainder)),
  Math.ceil((100 * food.used) / (food.used + food.remainder)),
];
