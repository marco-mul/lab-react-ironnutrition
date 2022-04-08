import './App.css';
import 'antd/dist/antd.css';
import foodsList from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsList);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <AddFoodForm foods={foods} setFoods={setFoods} />
      <div className="food-list">
        {foods
            .filter((el) =>
              el.name.toUpperCase().includes(searchValue.toUpperCase())
            )
            .map((food) => (
              <FoodBox
                food={food}
                key={food.name}
                foods={foods}
                setFoods={setFoods}
              />
            ))
        }
      </div>
    </div>
  );
}
export default App;