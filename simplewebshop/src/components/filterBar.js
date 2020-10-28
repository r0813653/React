import React from 'react';
import DataAPI from "../API/dataAPI";
import Filter from "./filter";



export default class FilterBar extends React.Component {

    api = new DataAPI();

    constructor(props) {
        super(props);


        this.state = {
           categories: this.api.getCategories(),
        }
    }

    render = () => {
        const output = this.state.categories.map(s => <Filter changecheckbox={this.changeCheckbox} categoryId={s.id} title={s.name} options={s.options} ></Filter>)
        return <div>{output}</div>
    }

    changeCheckbox = (categoryId, optionId) => {
        this.api.toggleOptionSelected(categoryId, optionId)
        this.setState({
            categories: this.api.getCategories()
        })
    }
}
