import React, { useRef, useEffect, useState } from "react";

function Dialog({ dialogMessage, dialogYes, dialogNo, yesFunction, noFunction, otherData }) {

    console.log('dialog mounted');

    let elRef = useRef(null);

    useEffect(() => {
        if (elRef.current) {
            elRef.current.focus();
        }
    });


        return (
            <div>
                <p>{dialogMessage}</p>
                {yesFunction ? <button ref={elRef} onClick={yesFunction}>{dialogYes}</button> : null}
                {noFunction ? <button onClick={noFunction}>{dialogNo}</button> : null}
            </div>
        );

}

export default Dialog;