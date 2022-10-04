import React from "react";
import { pantryItems } from './resources/data';


// COMPONENTS
import Pantry from "./pantry/Pantry";

class App extends React.Component {
    state = {
        pantryItems: pantryItems
    }

    addPantryItem = (item) => {
        let updatedPantryItems = this.state.pantryItems.slice();
        updatedPantryItems.push(item);
        this.setState({ pantryItems: updatedPantryItems });
    }

    render() {
        return (
            <div>
                <h2 style={{ textAlign: "center" }}>Pantry</h2>
                <Pantry pantryItems={this.state.pantryItems} addPantryItem={this.addPantryItem} />

                <h2 style={{ textAlign: "center" }}>Recipes</h2>
                <Pantry pantryItems={this.state.pantryItems} addPantryItem={this.addPantryItem} />
            </div>
        );
    }
}

export default App;