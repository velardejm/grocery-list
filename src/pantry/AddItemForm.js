import React, { useState, useRef, useEffect } from "react";
import {capitalize} from '../resources/functions';

function AddItemForm({ onFormSubmit }) {

    let blankNewItem = {
        name: '',
        qty: 0,
        unit: '',
        category: ''
    };

    let [newItem, setNewItem] = useState(blankNewItem);
    let [valid, setValid] = useState(false);
    let [formHidden, setFormHidden] = useState(false);

    const formRef = useRef(null); 

    useEffect(() => {
        let { name, unit, qty, category } = newItem;
        if (name && unit && qty && category) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [newItem]);

    const onFormInput = (e) => {
        let inputArr = [...formRef.current.querySelectorAll("input")];
        setNewItem({
            name: capitalize(inputArr[0].value),
            unit: capitalize(inputArr[1].value),
            qty: inputArr[2].value,
            category: inputArr[3].value.toLowerCase()
        });
    }

    return (
        <div>
            <form ref={formRef} className="ui form" hidden={formHidden}>
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
                        <button disabled={!valid} className="ui button" type="submit" onClick={(e) => {
                            onFormSubmit(e, newItem);
                            console.log('test');
                            setFormHidden(true);
                        }}>Submit</button>
                    </div>
                </div>
                <p hidden={valid}>Note: Please complete all fields</p>
            </form>
        </div>
    )
}

export default AddItemForm;