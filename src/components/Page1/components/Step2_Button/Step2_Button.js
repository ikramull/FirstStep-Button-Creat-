import React from "react";
import {Button} from 'reactstrap';
class Step2_Button extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <Button>{this.props.text}<i className = {this.props.icon}></i></Button>
        )
    }
}
export default Step2_Button;