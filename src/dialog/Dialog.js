import React from "react";

function Dialog({show, dialogMessage, dialogYes, dialogNo, yesFunction, noFunction}) {
    if(show) {
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