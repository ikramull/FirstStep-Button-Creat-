import React from "react";
import {Button} from 'reactstrap';
class Step3_Button extends React.Component{
    constructor(props)
    {
        super(props);
        this.render_icon = this.render_icon.bind(this);
    }
    render_icon()
    {
        if(this.props.icon_pos == "left")
        {
            return(
                <Button><i className = {this.props.icon}></i>{this.props.text}</Button>
            );
        }else if(this.props.icon_pos == "both")
        {
            return(
                <Button><i className = {this.props.icon}></i>{this.props.text}<i className = {this.props.icon}></i></Button>
            );
        }else
        {
            return(
                <Button>{this.props.text}<i className = {this.props.icon}></i></Button>
            );
        }
    }
    render()
    {
        return(
            <Button>{this.render_icon()}</Button>
        )
    }
}
export default Step3_Button;