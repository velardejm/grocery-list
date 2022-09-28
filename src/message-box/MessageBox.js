import React, { useEffect, useState } from "react";

function MessageBox({addedItem}) {
    let [show, setShow] = useState(true);
    let {name, unit, qty} = addedItem;

    
    const closeMessageBox = () => {
        setShow(false);
    }

    if (show) {
        return (
            <div>
                <h3>{`Succesfully added ${name} - ${qty} ${unit}`}</h3>
                <button onClick={closeMessageBox}>Ok</button>
            </div>
        );
    }

    if (!show) {
        return null;
    }

}




export default MessageBox;