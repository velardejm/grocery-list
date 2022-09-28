import React from 'react';
import ReactDOM from 'react-dom/client';
import Pantry from './pantry/Pantry';
import { pantryItems } from './data';

class App extends React.Component {
    state = {
        pantryItems: pantryItems,
        showModal: false   //test purposes
    }

    addPantryItem = (item) => {
        let updatedPantryItems = this.state.pantryItems.slice();
        updatedPantryItems.push(item);
        this.setState({pantryItems:updatedPantryItems});
    }

    render() {
        return (
            <div>
                <Pantry pantryItems={this.state.pantryItems} addPantryItem={this.addPantryItem}/>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);