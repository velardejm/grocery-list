import React, { useState, useRef } from 'react';
import Dialog from '../dialog/Dialog';
import AddItemForm from '../add-item-form/AddItemForm';
import './AddItem.css';

function AddItem({ addPantryItem, pantryItems }) {

    let [itemForAddition, setItemForAddition] = useState(null);
    let [formVisible, setFormVisible] = useState(true);
    let [addConfirmationVisible, setAddConfirmationVisible] = useState(false);
    let [messageVisible, setMessageVisible] = useState(false);

    const onFormSubmit = (e, item) => {
        e.preventDefault();
        setItemForAddition(item);
        setAddConfirmationVisible(true);
    }

    const addItem = (e) => {
        addPantryItem(itemForAddition);
        console.log(pantryItems);
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
                            `Are you sure you want to add ${itemForAddition.name} - ${itemForAddition.qty} ${itemForAddition.unit}`
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
                        dialogMessage={`Successfully added ${itemForAddition.name} - ${itemForAddition.qty} ${itemForAddition.unit}`}
                    /> : null}

            </div>


            {formVisible ?
                <AddItemForm
                    addPantryItem={addPantryItem}
                    onFormSubmit={onFormSubmit} /> : null}

        </div>
    );

}

export default AddItem;