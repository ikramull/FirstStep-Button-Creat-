import React from "react";
import Step3_Button from './components/Step3_Button/Step3_Button';
class Page1 extends React.Component{
    render()
    {
        return(
            <div>
                <Step3_Button text = "Submit" icon = "fas fa-feather" />
                <Step3_Button text = "Submit" icon = "fas fa-feather" icon_pos = "left"/>
                <Step3_Button text = "Submit" icon = "fas fa-feather" icon_pos = "both"/>
            </div>
        )
    }
}
export default Page1;