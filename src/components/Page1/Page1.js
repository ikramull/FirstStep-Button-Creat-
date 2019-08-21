import React from "react";
import Step1_Button from './components/Step1_Button/Step1_Button';
import Step2_Button from './components/Step2_Button/Step2_Button';
class Page1 extends React.Component{
    render()
    {
        return(
            <div>
                <Step1_Button text = "Submit" />
                <Step2_Button text = "Submit" icon = "fa fa-feather"/>
            </div>
        )
    }
}
export default Page1;