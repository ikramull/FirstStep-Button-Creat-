import React from "react";
import Step1_Button from './components/Step1_Button/Step1_Button';
class Page1 extends React.Component{
    render()
    {
        return(
            <div>
                <Step1_Button text = "Submit" />
            </div>
        )
    }
}
export default Page1;