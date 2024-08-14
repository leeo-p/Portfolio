import React from "react";

function Pre(props) {
    return <div style={{ backgroundColor: " #8aa6da" }} id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
