import React, { Component } from 'react';
import Main from "./Main";

class FoodApp extends Component {
  state = {
    foods: [],
    selectedFood: null,
  };

  componentDidMount() {
    // Carregar dados do localStorage ao iniciar o aplicativo
    const storedFoods = JSON.parse(localStorage.getItem('foods-app:foods')) || [];
    this.setState({ foods: storedFoods });
  }

  nextId = () => {
    const ids = this.state.foods.map((food) => food.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }

  loadFoods = (newFoods) => {
    this.setState({ foods: newFoods });
    localStorage.setItem('foods-app:foods', JSON.stringify(newFoods));
  }

  createFood = (food) => {
    const newFood = { id: this.nextId(), ...food };
    const newFoods = [...this.state.foods, newFood];
    this.loadFoods(newFoods);
  }

  readFood = (id) => {
    const food = this.state.foods.find((food) => food.id === id);
    this.setState({ selectedFood: food });
  }

  updateFood = (id, updatedFood) => {
    const updatedFoods = this.state.foods.map((food) => {
      if (food.id === id) {
        return { ...food, ...updatedFood };
      }
      return food;
    });
    this.loadFoods(updatedFoods);
  }

  destroyFood = (id) => {
    const filteredFoods = this.state.foods.filter((food) => food.id !== id);
    this.loadFoods(filteredFoods);
  }

  render() {
    return (
      <div>
        <h1>Food App</h1>
        <FoodList
          foods={this.state.foods}
          onSelectFood={this.readFood}
          onDeleteFood={this.destroyFood}
        />
        <FoodForm onCreateFood={this.createFood} onUpdateFood={this.updateFood} selectedFood={this.state.selectedFood} />
      </div>
    );
  }
}

class FoodList extends Component {
  render() {
    const { foods, onSelectFood, onDeleteFood } = this.props;

    return (
      <div>
        <h2>Food List</h2>
        <ul>
          {foods.map((food) => (
            <li key={food.id}>
              {food.name}
              <button onClick={() => onSelectFood(food.id)}>Edit</button>
              <button onClick={() => onDeleteFood(food.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class FoodForm extends Component {
  state = {
    name: '',
  };

  componentDidUpdate(prevProps) {
    if (this.props.selectedFood !== prevProps.selectedFood) {
      this.setState({ name: this.props.selectedFood ? this.props.selectedFood.name : '' });
    }
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.selectedFood) {
      this.props.onUpdateFood(this.props.selectedFood.id, { name: this.state.name });
    } else {
      this.props.onCreateFood({ name: this.state.name });
    }
    this.setState({ name: '' });
  }

  render() {
    return (
      <div>
        <h2>Food Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Food Name" value={this.state.name} onChange={this.handleNameChange} />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default FoodApp;
