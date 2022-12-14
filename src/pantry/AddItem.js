import React, { useState, useRef } from 'react';
import './AddItem.css';
import Dialog from '../shared/Dialog';
import AddItemForm from './AddItemForm';

function AddItem({ addPantryItem }) {

    let blankNewItem = {
        name: '',
        qty: 0,
        unit: '',
        category: ''
    };

    let [itemForAddition, setItemForAddition] = useState(blankNewItem);
    let [formVisible, setFormVisible] = useState(true);
    let [addConfirmationVisible, setAddConfirmationVisible] = useState(false);
    let [successMessageVisible, setSuccessMessageVisible] = useState(false);

    let { name, qty, unit } = itemForAddition;

    const onFormSubmit = (e, item) => {
        e.preventDefault();
        setItemForAddition(item);
        setAddConfirmationVisible(true);
    }

    const addItem = () => {
        addPantryItem(itemForAddition);
        setAddConfirmationVisible(false);
        setSuccessMessageVisible(true);
        setFormVisible(false);

    }

    const closeSuccessMessageBox = () => {
        setSuccessMessageVisible(false);
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

                {successMessageVisible ?
                    <Dialog showDialog={successMessageVisible}
                        dialogYes={'Ok'}
                        yesFunction={closeSuccessMessageBox}
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