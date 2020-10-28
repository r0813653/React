import React from 'react';

const FilterItem = (props) => {

    let recommended = ""

    if (props.recommended === true){
        recommended = "Aanbevolen";
    }

    console.log(props.checked);
    return <label>
        <input type="checkbox" checked={props.checked}/>{props.label} {recommended}
    </label>
}

export default FilterItem;
