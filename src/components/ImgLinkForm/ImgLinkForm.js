import React from "react";
import "./ImgLinkForm.css";

const ImgLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className="f3 ">
                {'Bappi will detect a face, if you add the link & press detect '}
            </p>
            <div className={'center'}>
                <div className="form center pa4 br3 shadpw-5">
                    <input className='f4 pa2 w-70 enter' type={'text'} onChange={onInputChange} /><br />
                    <button className="w-30 grow f4 link ph3 pv2 div white bg-light-blue" onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImgLinkForm;