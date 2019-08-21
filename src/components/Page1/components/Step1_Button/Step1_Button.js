import React from "react";
import {Button} from 'reactstrap';
class Step1_Button extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <Button>{this.props.text}</Button>
        )
    }
}
export default Step1_Button;