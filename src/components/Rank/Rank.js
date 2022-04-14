import React from "react";

// const Rank = () => {
//     return (
//         <div>
//             <div className="red f3">
//                 {'Liu kang your Rank is...'}
//             </div>
//             <div className=" f1">
//                 {'#5'}
//             </div>
//         </div>
//     );
// }

const Rank = ({ name, entries }) => {

    return (
        <div>
            <div className="red f3">
                {`${name},  your Rank is...`}
            </div>
            <div className=" white f1">
                {entries}
            </div>
        </div>
    );
}
// and display them in the < div >:

// { `${name} , your current rank is...` }
// <div className='white f1 '>
//     {entries}

//     }
export default Rank;