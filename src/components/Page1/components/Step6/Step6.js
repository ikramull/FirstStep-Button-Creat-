import React from "react";
import Swal from 'sweetalert2';
import {Button} from 'reactstrap';
class Step6 extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            is_loading:0,
            icon:''
        }
    }
    render()
    {
        if(this.state.is_loading == 1)
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
                <Button onClick = {
                    () => {
                        this.setState({
                            is_loading:1
                        })
                    }
                }>Loading...</Button>
            </div>
        )
    }
}
export default Step6;