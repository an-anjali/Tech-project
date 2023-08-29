import React from "react";
import GCard from "./GCard";
import Gdata from "./Gdata";


function Gallery() {
    return (
        <>
            <h1 className="heading_style1">Our Works</h1>

            <GCard
                imgsrc={Gdata[0].imgsrc}
            />

            <GCard
                imgsrc={Gdata[1].imgsrc}
            />

            <GCard
              imgsrc={Gdata[2].imgsrc}
           />


            <GCard
                imgsrc={Gdata[3].imgsrc}
            />

            <GCard
                imgsrc={Gdata[4].imgsrc}
            />

            <GCard
                imgsrc={Gdata[5].imgsrc}
            />
        </>
    );
}

export default Gallery;