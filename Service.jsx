import React from "react";
import SCard from "./SCard";
import Sdata from "./Sdata";


function Service() {
    return (
        <>
            <h1 className="heading_style">Our Service</h1>

            <SCard
                className="From=$120"
                imgsrc={Sdata[0].imgsrc}
                title={Sdata[0].title}
                sname={Sdata[0].sname}

            />

            <SCard
                className="From=$220"
                imgsrc={Sdata[1].imgsrc}
                title={Sdata[1].title}
                sname={Sdata[1].sname}

            />

            <SCard
                className="From=$300"
                imgsrc={Sdata[2].imgsrc}
                sname={Sdata[2].sname}
                title={Sdata[2].title}
            />


            <SCard
                className="From=$170"
                imgsrc={Sdata[3].imgsrc}
                title={Sdata[3].title}
                sname={Sdata[3].sname}

            />

            <SCard
                className="From=$250"
                imgsrc={Sdata[4].imgsrc}
                title={Sdata[4].title}
                sname={Sdata[4].sname}

            />

            <SCard
                className="From=$250"
                imgsrc={Sdata[5].imgsrc}
                title={Sdata[5].title}
                sname={Sdata[5].sname}

            />
        </>
    );
}

export default Service;