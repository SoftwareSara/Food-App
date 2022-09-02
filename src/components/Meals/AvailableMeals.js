import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Cupcake',
    description: 'Vanilla with vanilla frosting ',
    price: 3.99,
  },
  {
    id: 'm2',
    name: 'Blueberry Muffin',
    description: 'Fresh blueberries, topped with brown sugar',
    price: 4.99,
  },
  {
    id: 'm3',
    name: 'Donut',
    description: 'Choclate Donue with frosting and sprinkles',
    price: 3.99,
  },
  {
    id: 'm4',
    name: 'Espresso',
    description: 'Hot and strong',
    price: 3.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;