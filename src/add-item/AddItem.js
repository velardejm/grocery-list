import React, { useState, useRef, useEffect } from 'react';
import Dialog from '../dialog/Dialog';
import MessageBox from '../message-box/MessageBox';
import './AddItem.css';

function AddItem({ addPantryItem, pantryItems }) {
    // state hooks
    let [item, setItem] = useState('');
    let [unit, setUnit] = useState('');
    let [qty, setQty] = useState(0);
    let [category, setCategory] = useState('');
    let [valid, setValid] = useState(false);
    let [dialogVisible, setDialogVisible] = useState(false);
    let [messageVisible, setMessageVisible] = useState(false);

    // other variables
    let dialogMessage = 'Add item to Pantry?';
    let dialogYes = 'Yes';
    let dialogNo = 'No';

    // refs
    const elRef = useRef(null);

    // effects
    useEffect(() => {
        elRef.current.focus();
    }, []);

    useEffect(() => {
        if(item && unit && qty && category) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [item, unit, qty, category]);

    // functions
    // REFACTOR FROM HERE
    const onItemInput = (e) => {
        setItem(e.target.value);
    }

    const onUnitInput = (e) => {
        setUnit(e.target.value);
    }

    const onQtyInput = (e) => {
        setQty(e.target.value);
    }

    const onCategoryInput = (e) => {
        setCategory(e.target.value);
    }
    // REFACTOR TO HERE

    const addItem = (e) => {
        e.preventDefault();
        let newItem = {
            name: item,
            unit: 'pcs',
            qty: qty,
            category: category
        }
        addPantryItem(newItem);
        setItem('');
        setUnit('');
        setQty(0);
        setCategory('');
        setDialogVisible(false);
        elRef.current.focus();
        setMessageVisible(true);
    }

    const showDialog = (e) => {
        e.preventDefault();
        setDialogVisible(true);
    }

    return (
        <div id='add-item-form'>
            <div>
                <Dialog show={dialogVisible} dialogMessage={dialogMessage} dialogYes={dialogYes} dialogNo={dialogNo} yesFunction={addItem} noFunction={() => setDialogVisible(false)} />
            </div>
            <div>
                {messageVisible ? <MessageBox addedItem={pantryItems[pantryItems.length - 1]}/> : null}
            </div>
            <form className="ui form">
                <div className="fields">
                    <div className="field">
                        <label>Item</label>
                        <input required={true} ref={elRef} type="text" placeholder="Item" onChange={onItemInput} value={item} />
                    </div>
                    <div className="field">
                        <label>Unit</label>
                        <input required={true} type="text" onChange={onUnitInput} value={unit} placeholder="Unit" />
                    </div>
                    <div className="field">
                        <label>Qty</label>
                        <input required={true} type="number" placeholder="Qty" onChange={onQtyInput} value={qty} />
                    </div>
                    <div className="field">
                        <label>Category</label>
                        <input required={true} type="text" placeholder="Category" onChange={onCategoryInput} value={category} />
                    </div>
                    <div id='submit-item' className="field">
                        <button disabled={!valid} className="ui button" type="submit" onClick={showDialog}>Submit</button>
                    </div>
                </div>
            </form>
            <p hidden={valid}>Note: Please complete all fields</p>

            <button>Close</button>
        </div>
    );

}

export default AddItem;