import React, { useState, useRef, useEffect } from 'react';
import Dialog from '../dialog/Dialog';
import AddItemForm from '../add-item-form/AddItemForm';
import './AddItem.css';

function AddItemRefactored({ addPantryItem, pantryItems }) {
    // state hooks
    let blankNewItem = {
        name: '',
        qty: 0,
        unit: '',
        category: ''
    };

    let [itemForAddition, setItemForAddition] = useState(null);
    let [resetFormAlert, setResetFormAlert] = useState(false);
    let [formVisible, setFormVisible] = useState(true);
    let [addConfirmationVisible, setAddConfirmationVisible] = useState(false);
    let [messageVisible, setMessageVisible] = useState(false);

    // other variables
    // let {name, qty, unit} = pantryItems[pantryItems.length - 1];
    // let {name, qty, unit} = itemForAddition





    // refs
    const formRef = useRef(null);

    // effects

    // functions

    // useEffect(() => {
    //     console.log('setItemForAddition was updated.');
    // }, [itemForAddition]);


    const onFormSubmit = (e, item) => {
        e.preventDefault();
        setItemForAddition(item);
        setAddConfirmationVisible(true);
    }

    const updateItemForAddition = (item) => {
        setItemForAddition(item);
        setAddConfirmationVisible(true);
        setFormVisible(false);
        console.log(itemForAddition);
    }

    // const showConfirmation = (e) => {
    //     e.preventDefault();
    //     setAddConfirmationVisible(true);
    //     setFormVisible(false);

    // }

    const addItem = (e) => {
        addPantryItem(itemForAddition);
        console.log(pantryItems);
        setResetFormAlert(true);
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
                        dialogMessage={'addItemPromptMessage'}
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
                        dialogMessage={'addItemSuccessMessage'}
                    /> : null}

            </div>


            {formVisible ?
                <AddItemForm
                    addPantryItem={addPantryItem}
                    onFormSubmit={onFormSubmit}
                    updateItemForAddition={updateItemForAddition}
                    resetFormAlert={resetFormAlert} /> : null}

        </div>
    );

}

export default AddItemRefactored;