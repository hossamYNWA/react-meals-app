import MealItem from "./mealItem/MealItem.js";
import classes from "./AvalMeals.module.css";
import Card from "../UI/Card.js";
const DUMMY_MEALS = [
  {
    id: "m13",
    name: "Lamb Chops",
    description: "slow cooked lamp with garlic and paprika",
    price: 69.99
  },
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99
  },
  {
    id: "m10",
    name: "falafel",
    description: "mixed veggies with special spices",
    price: 12.99
  },
  {
    id: "m12",
    name: "Steak",
    description: "Juicy meat with a very spacial taste",
    price: 68.99
  },
  {
    id: "m21",
    name: "Pasta with Meat",
    description: "cheesy with unresistable meat balls",
    price: 42.99
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99
  }
];

export default function AvalMeals(props) {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      onAdd={props.onAdd}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
