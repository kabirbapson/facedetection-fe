import React from "react";

const FaceRecognition = ({ imageURL }) => {
    return (
        <div className=" pa3 ma2 w-70 center br2 shadow-5">
            <img src={imageURL} alt="" />
        </div>
    );
}
export default FaceRecognition;