import React from "react";
import { pantryItems } from './resources/data';
import Pantry from "./pantry/Pantry";
import Recipes from "./recipes/Recipes";



class App extends React.Component {
    state = {
        pantryItems: pantryItems
    }

    addPantryItem = (item) => {
        this.setState({ pantryItems: [...pantryItems, item] });
    }

    render() {
        return (
            <div>
                {/* <h2 style={{ textAlign: "center" }}>Pantry</h2>
                <Pantry pantryItems={this.state.pantryItems} addPantryItem={this.addPantryItem} /> */}

                <h2 style={{ textAlign: "center" }}>Recipes</h2>
                <Recipes />
                
            </div>
        );
    }
}

export default App;