import React, { useState, useRef, useEffect } from 'react';
import Dialog from '../dialog/Dialog';
import MessageBox from '../message-box/MessageBox';
import './AddItem.css';

function AddItem({ addPantryItem, pantryItems }) {
    // state hooks
    let blankNewItem = {
        name: '',
        qty: 0,
        unit: '',
        category: ''
    };

    let [newItem, setNewItem] = useState(blankNewItem);
    let [valid, setValid] = useState(false);
    let [formVisible, setFormVisible] = useState(true);
    let [addConfirmationVisible, setAddConfirmationVisible] = useState(false);
    let [messageVisible, setMessageVisible] = useState(false);

    // other variables
    // let {name, qty, unit} = pantryItems[pantryItems.length - 1];
    let addItemPromptMessage = `Are you sure you want to add ${newItem.name} - ${newItem.qty} ${newItem.unit}`
    let addItemSuccessMessage = `Succesfully added ${newItem.name} - ${newItem.qty} ${newItem.unit}`

    // refs
    const formRef = useRef(null);

    // effects
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
        setAddConfirmationVisible(false);
        setMessageVisible(true);
        formRef.current.reset();
        setNewItem(blankNewItem);
    }

    const showConfirmation = (e) => {
        e.preventDefault();
        setAddConfirmationVisible(true);
        setFormVisible(false);

    }

    const closeMessageBox = () => {
        setMessageVisible(false);
        setFormVisible(true);
    }

    return (
        <div id='add-item-form'>
            <div>
                {addConfirmationVisible ?
                    <Dialog
                        dialogMessage={addItemPromptMessage}
                        dialogYes={'Yes'}
                        dialogNo={'No'} yesFunction={addItem}
                        noFunction={() => setAddConfirmationVisible(false)} /> : null
                }
            </div>
            <div>

                {messageVisible ?
                    <Dialog showDialog={messageVisible}
                        dialogYes={'Ok'}
                        yesFunction={closeMessageBox}
                        dialogMessage={addItemSuccessMessage}
                    /> : null}

            </div>
            <form ref={formRef} className="ui form" hidden={!formVisible}>
                <div className="fields">
                    <div className="field">
                        <label>Item</label>
                        <input id="item-name"
                            required={true}
                            autoFocus
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
                        <button disabled={!valid} className="ui button" type="submit" onClick={showConfirmation}>Submit</button>
                    </div>
                </div>
                <p hidden={valid}>Note: Please complete all fields</p>
            </form>

        </div>
    );

}

export default AddItem;