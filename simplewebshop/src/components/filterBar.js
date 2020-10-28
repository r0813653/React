import React from 'react';
import DataAPI from "../API/dataAPI";
import Filter from "./filter";



export default class FilterBar extends React.Component {

    api = new DataAPI();

    constructor(props) {
        super(props);


        this.state = {
        }
    }

    render = () => {
        const output = this.api.getCategories().map(s => <Filter title={s.name} options={s.options} ></Filter>)
        return <div><p>Teeest</p></div>
    }

}
