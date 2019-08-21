import React from "react";
import Swal from 'sweetalert2';
class Step5 extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            change_icon_start:0,
            icon:''
        }
    }
    change_icon(icon)
    {   
        this.setState({
            change_icon_start:1,
            icon:icon
        });
        this.setState({
            change_icon_start:0,
        });
    }
    render()
    {
        if(this.state.change_icon_start == 0)
        {
            Swal({
            title: 'Please wait...',
            text: "loading.....",
            onOpen: () => {
              Swal.showLoading();
            },
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false
             });
        }else{
            Swal.close();
        }
        
        return(
            <div>
                <i className = {this.state.icon}></i> 
            </div>
        )
    }
}
export default Step5;