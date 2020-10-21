import React from 'react';
import ReactDOM from 'react-dom';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';
import Filter from "./components/filter";
import FilterItem from "./components/filterItem";
import categories from "./API/categories";



ReactDOM.render(
    <div>
        <Filter title={categories[0].name} options={categories[0].options}/>
    </div>,
    document.getElementById('root')
);

