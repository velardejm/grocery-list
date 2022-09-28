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
        if (item && unit && qty && category) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [item, unit, qty, category]);

    // functions
    const onFormInput = (e) => {
        let inputId = e.target.id;
        let inputValue = e.target.value;

        switch (inputId) {
            case "item-name":
                setItem(inputValue);
                break;
            case "item-unit":
                setUnit(inputValue);
                break;
            case "item-qty":
                setQty(inputValue);
                break;
            case "item-category":
                setCategory(inputValue);
                break;
        }
    }

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
                {messageVisible ? <MessageBox addedItem={pantryItems[pantryItems.length - 1]} /> : null}
            </div>
            <form className="ui form">
                <div className="fields">
                    <div className="field">
                        <label>Item</label>
                        <input id="item-name" required={true} ref={elRef} type="text" placeholder="Item" onChange={onFormInput} value={item} />
                    </div>
                    <div className="field">
                        <label>Unit</label>
                        <input id="item-unit" required={true} type="text" onChange={onFormInput} value={unit} placeholder="Unit" />
                    </div>
                    <div className="field">
                        <label>Qty</label>
                        <input id="item-qty" required={true} type="number" placeholder="Qty" onChange={onFormInput} value={qty} />
                    </div>
                    <div className="field">
                        <label>Category</label>
                        <input id="item-category" required={true} type="text" placeholder="Category" onChange={onFormInput} value={category} />
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