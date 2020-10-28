import React from 'react';

const FilterItem = (props) => {

    let recommended = ""

    if (props.recommended === true){
        recommended = "Aanbevolen";
    }

    console.log(props.checked);
    return <label>
        <input type="checkbox" onChange={props.changecheckbox} checked={props.checked}/>{props.label} {recommended}
    </label>
}

export default FilterItem;
