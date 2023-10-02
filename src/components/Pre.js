import React from "react";

function Pre(props) {
    return <div style={{backgroundColor:" #fff"}} id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
