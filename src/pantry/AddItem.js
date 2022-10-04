import React, { useState, useRef } from 'react';
import './AddItem.css';
// COMPONENTS
import Dialog from '../shared/Dialog';
import AddItemForm from './AddItemForm';

function AddItem({ addPantryItem, pantryItems }) {

    let blankNewItem = {
        name: '',
        qty: 0,
        unit: '',
        category: ''
    };

    let [itemForAddition, setItemForAddition] = useState(blankNewItem);
    let [formVisible, setFormVisible] = useState(true);
    let [addConfirmationVisible, setAddConfirmationVisible] = useState(false);
    let [messageVisible, setMessageVisible] = useState(false);

    let { name, qty, unit } = itemForAddition;

    const onFormSubmit = (e, item) => {
        e.preventDefault();
        setItemForAddition(item);
        setAddConfirmationVisible(true);
    }

    const addItem = (e) => {
        addPantryItem(itemForAddition);
        setAddConfirmationVisible(false);
        setMessageVisible(true);
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
                        dialogMessage={
                            `Are you sure you want to add ${name} - ${qty} ${unit}`
                        }
                        dialogYes={'Yes'}
                        dialogNo={'No'}
                        yesFunction={addItem}
                        noFunction={() => setAddConfirmationVisible(false)} /> : null
                }
            </div>

            <div>

                {messageVisible ?
                    <Dialog showDialog={messageVisible}
                        dialogYes={'Ok'}
                        yesFunction={closeMessageBox}
                        dialogMessage={`Successfully added ${name} - ${qty} ${unit}`}
                    /> : null}

            </div>

            {formVisible ?
                <AddItemForm
                    onFormSubmit={onFormSubmit} /> : null}

        </div>
    );

}

export default AddItem;