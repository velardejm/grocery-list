import React, { useState, useRef, useEffect } from 'react';
import Dialog from '../dialog/Dialog';
import MessageBox from '../message-box/MessageBox';
import './AddItem.css';

function AddItem({ addPantryItem, pantryItems }) {
    // state hooks
    let [newItem, setNewItem] = useState({
        name: '',
        qty: 0,
        unit: '',
        category: ''
    });
    let [valid, setValid] = useState(false);
    let [dialogVisible, setDialogVisible] = useState(false);
    let [messageVisible, setMessageVisible] = useState(false);

    // other variables
    let dialogMessage = 'Add item to Pantry?';

    // refs
    const elRef = useRef(null);
    const formRef = useRef(null);

    // effects
    useEffect(() => {
        elRef.current.focus();
    }, []);

    useEffect(() => {
        let { name, unit, qty, category } = newItem;
        if (name && unit && qty && category) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [newItem]);

    // functions
    const onFormInput = (e) => {
        let inputArr = [...formRef.current.querySelectorAll("input")];
        setNewItem({
            name: inputArr[0].value,
            unit: inputArr[1].value,
            qty: inputArr[2].value,
            category: inputArr[3].value
        });
    }

    const addItem = (e) => {
        e.preventDefault();
        let inputArr = [...formRef.current.querySelectorAll("input")];
        let item = {
            name: inputArr[0].value,
            unit: inputArr[1].value,
            qty: inputArr[2].value,
            category: inputArr[3].value
        }
        addPantryItem(item);
        setDialogVisible(false);
        setMessageVisible(true);
        formRef.current.reset();
        elRef.current.focus();
    }

    const showDialog = (e) => {
        e.preventDefault();
        setDialogVisible(true);
    }

    const closeMessageBox = () => {
        setMessageVisible(false);
    }

    return (
        <div id='add-item-form'>
            <div>
                <Dialog
                    showDialog={dialogVisible}
                    dialogMessage={dialogMessage}
                    dialogYes={'Yes'}
                    dialogNo={'No'} yesFunction={addItem}
                    noFunction={() => setDialogVisible(false)} />
            </div>
            <div>
                <MessageBox showMessage={messageVisible} closeMessageBox={closeMessageBox} addedItem={pantryItems[pantryItems.length - 1]} />
            </div>
            <form ref={formRef} className="ui form">
                <div className="fields">
                    <div className="field">
                        <label>Item</label>
                        <input id="item-name"
                            required={true}
                            ref={elRef}
                            type="text"
                            placeholder="Item"
                            onChange={onFormInput} />
                    </div>
                    <div className="field">
                        <label>Unit</label>
                        <input id="item-unit"
                            required={true}
                            type="text"
                            onChange={onFormInput}
                            placeholder="Unit" />
                    </div>
                    <div className="field">
                        <label>Qty</label>
                        <input id="item-qty"
                            required={true}
                            type="number"
                            placeholder="Qty"
                            onChange={onFormInput} />
                    </div>
                    <div className="field">
                        <label>Category</label>
                        <input id="item-category"
                            required={true}
                            type="text" placeholder="Category" onChange={onFormInput} />
                    </div>
                    <div id='submit-item' className="field">
                        <button disabled={!valid} className="ui button" type="submit" onClick={showDialog}>Submit</button>
                    </div>
                </div>
            </form>
            <p hidden={valid}>Note: Please complete all fields</p>
        </div>
    );

}

export default AddItem;