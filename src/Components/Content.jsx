import React, { useState } from "react";

const Content = ({qn, ans}) => {
    const [show, setShow] = useState(false);

    function handleToggle() {
        setShow(!show)
    }

    return (
        <>
            <div className="card mt-3" data-bs-theme="dark">
                <div className="card-title h6  p-3 m-0" onClick={handleToggle}>
                   {qn}
                </div>
                <div className={show ? 'card-body b-block' : 'card-body d-none'}>
                    {ans}
                </div>
            </div>
        </>
    );
};

export default Content;

