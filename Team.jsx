import React from "react";
import TCard from "./TCard";
import Tdata from "./Tdata";


function Service() {
    return (
        <>
            <h1 className="heading_style">Our Service</h1>

            <TCard
                className="From=$120"
                imgsrc={Tdata[0].imgsrc}
                title={Tdata[0].title}
                sname={Tdata[0].sname}

            />

            <TCard
                className="From=$220"
                imgsrc={Tdata[1].imgsrc}
                title={Tdata[1].title}
                sname={Tdata[1].sname}

            />

            <TCard
                className="From=$300"
                imgsrc={Tdata[2].imgsrc}
                sname={Tdata[2].sname}
                title={Tdata[2].title}
            />


            <TCard
                className="From=$170"
                imgsrc={Tdata[3].imgsrc}
                title={Tdata[3].title}
                sname={Tdata[3].sname}

            />

            <TCard
                className="From=$250"
                imgsrc={Tdata[4].imgsrc}
                title={Tdata[4].title}
                sname={Tdata[4].sname}

            />

            <TCard
                className="From=$250"
                imgsrc={Tdata[5].imgsrc}
                title={Tdata[5].title}
                sname={Tdata[5].sname}

            />


            <TCard
                className="From=$250"
                imgsrc={Tdata[6].imgsrc}
                title={Tdata[6].title}
                sname={Tdata[6].sname}

            />

            <TCard
                className="From=$250"
                imgsrc={Tdata[7].imgsrc}
                title={Tdata[7].title}
                sname={Tdata[7].sname}

            />


            <TCard
                className="From=$250"
                imgsrc={Tdata[8].imgsrc}
                title={Tdata[8].title}
                sname={Tdata[8].sname}

            />


        </>
    );
}

export default Service;