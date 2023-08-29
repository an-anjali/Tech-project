import React from "react";
function TCard(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="" className="card_img" />
                    <div className="card_info">
                        <span className="card_category">{props.title}</span>
                        <h3 className="card_title">{props.className}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TCard;


