import React from "react";
import { pantryItems } from './data';
import { getCategories } from './functions';
// COMPONENTS
import Pantry from './pantry/Pantry';

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
                <Pantry pantryItems={this.state.pantryItems} addPantryItem={this.addPantryItem} />
                <hr></hr>
            </div>
        );
    }
}

export default App;