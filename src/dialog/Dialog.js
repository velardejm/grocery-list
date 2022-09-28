import React from "react";

function Dialog({showDialog, dialogMessage, dialogYes, dialogNo, yesFunction, noFunction}) {
    if(showDialog) {
        return (
            <div>
                <p>{dialogMessage}</p>
                <button onClick={yesFunction}>{dialogYes}</button>
                <button onClick={noFunction}>{dialogNo}</button>
            </div>
        )
    } else {
        return null;
    }
}

export default Dialog;