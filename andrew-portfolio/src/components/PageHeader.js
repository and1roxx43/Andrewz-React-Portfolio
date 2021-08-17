import { directive } from "@babel/types";
import React from "react";

function Heading({heading}) {

    return (
        <div className="heading-title">
            <h2>{heading}</h2>
        </div>
    )
}

export default Heading;