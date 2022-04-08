
import React from 'react';
import { Card, Col, Button } from 'antd';

const FoodBox = ({food, foods, setFoods}) => {

  const deleteFood = () =>{
    const index = foods.findIndex(el=>el.name===food.name)
    if(index>-1){
      const newFoods = [...foods]
      newFoods.splice(index, 1)
      setFoods(newFoods)
    }
  }
  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={(event) => deleteFood(food.name)}> Delete </Button>
      </Card>
    </Col>
  );
};

export default FoodBox;