import React from "react";

function Pre(props) {
    return <div style={{ backgroundColor: " #1e2f4c" }} id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
