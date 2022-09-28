import React from "react";

function MessageBox({ addedItem, showMessage, closeMessageBox }) {
    let { name, unit, qty } = addedItem;

    if (showMessage) {
        return (
            <div>
                <h3>{`Succesfully added ${name} - ${qty} ${unit}`}</h3>
                <button onClick={closeMessageBox}>Ok</button>
            </div>
        );
    } else {
        return null;
    }

}




export default MessageBox;