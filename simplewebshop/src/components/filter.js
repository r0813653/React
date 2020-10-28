import React from 'react';
import FilterItem from "./filterItem";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Filter extends React.Component {
    folded;
    icon;


    constructor(props) {
        super(props);


        this.state = {
            folded: false,
            icon: faCaretDown
        }
    }

    render = () => {

        const output = this.props.options.map(s => <div key={s.id}><FilterItem changecheckbox={e =>this.props.changecheckbox(this.props.categoryId ,s.id)} label={s.name} checked={s.checked} recommended={s.recommended} /></div>)

        return <div>
            <span onClick={this.handleChange}><FontAwesomeIcon icon={this.state.icon}></FontAwesomeIcon>{this.props.title}</span>
            <div hidden={this.state.folded}>{output}</div>
        </div>
    }

    handleChange = () => {
        if (this.state.folded){
            this.setState({
                folded: false,
                icon: faCaretDown
            })
        } else {
            this.setState({
                folded: true,
                icon: faCaretUp
            })
        }
    }

}
