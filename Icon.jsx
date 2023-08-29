import React from "react";
import icon1 from "./Image/icon-1.png";
import icon2 from "./Image/icon-2.png";
import icon3 from "./Image/icon-3.png";
import icon4 from "./Image/icon-4.png";



function Icon (){
    return(
        <>
        
                   <div className="icon1"><img src={icon1} alt="icon" /><h4>Best Beauty Experts</h4></div>
                   <div className="icon2"><img src={icon2} alt="icon" /><h4>Quality Care Products</h4></div>
                   <div className="icon3"><img src={icon3} alt="icon" /><h4>Diverse Service List</h4></div>
                   <div className="icon4"><img src={icon4} alt="icon" /><h4>Trust From Customers</h4></div>
        
        </>
    );
}

export default Icon;