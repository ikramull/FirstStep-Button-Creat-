import React from "react";
import {Button} from 'reactstrap';
import Swal from 'sweetalert2';
class Step3_Button extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            change_content_start:0,
            content:''
        }
    }
    change_content(content)
    {   
        this.setState({
            change_content_start:1,
            content:content
        });
        this.setState({
            change_content_start:0,
        });
    }
    render()
    {
        if(this.state.change_content_start == 0)
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
                {this.state.content}
            </div>
        )
    }
}
export default Step3_Button;