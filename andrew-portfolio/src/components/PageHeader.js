import { directive } from "@babel/types";
import React from "react";

function Heading({heading}) {

    return (
        <div>
            <h1>{heading}</h1>
        </div>
    )
}

export default Heading;