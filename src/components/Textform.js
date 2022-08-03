import React, { useState } from 'react'

export default function Textform(props) {
    const [text, settext] = useState("")

    let mystyle = {
        backgroundColor: props.colour === "#234b2c" ? "darkgreen" : "#007bff",
        borderColor: props.colour === "#234b2c" ? "darkgreen" : "#007bff"
    }

    const handleUpper = () => {
        // console.log(text);
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handleLower = () => {
        // console.log(text);
        let newText = text.toLowerCase();
        settext(newText);
        props.showAlert("Converted to lowercase!", "success")
    }

    const clearText = () => {
        // console.log(text);
        let newText = "";
        settext(newText);
        props.showAlert("Text cleard!", "success")
    }

    const replaceText = () => {
        let a = prompt("Replace what: ")
        let b = prompt("Replace with: ")
        let newText = text.replace(new RegExp(a, "gi"), b)
        settext(newText)
        props.showAlert("Text replaced!", "success")
    }

    const copyText = () => {
        let a = document.getElementById("exampleFormControlTextarea1")
        a.select()
        navigator.clipboard.writeText(a.value)
        document.getSelection().removeAllRanges()
        props.showAlert("Text is copied to clipboard!", "success")
    }

    // const removeSpace = ()=>{
    //     let a = text.trim()
    //     settext(a)
    // }

    const handleOnChange = (event) => {
        // console.log("On change");
        settext(event.target.value)
    }
    return (
        <div>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" style={{ backgroundColor: props.mode === "dark" ? "#293b37" : "white", color: props.mode === "dark" ? "white" : "black" }} value={text} placeholder="Enter text here ..." id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange}></textarea>
                <button disabled={text.length === 0} className='btn btn-primary my-3 mx-1' style={mystyle} onClick={handleUpper} dark>To UPPERCASE</button>
                <button disabled={text.length === 0} className='btn btn-primary my-3 mx-1' style={mystyle} onClick={handleLower}>To lowercase</button>
                <button disabled={text.length === 0} className='btn btn-primary my-3 mx-1' style={mystyle} onClick={replaceText}>Replace Text</button>
                {/* <button className='btn btn-primary my-3 mx-1' onClick={removeSpace}>Remove Extra Spaces</button> */}
                <button disabled={text.length === 0} className='btn btn-success my-3 mx-1' onClick={copyText}>Copy to Clipboard</button>
                <button disabled={text.length === 0} className='btn btn-danger my-3 mx-1' onClick={clearText}>Clear Text</button>
            </div>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Text Summary</h2>
                <p>
                    No. of Words: {text.split(/\s+/).filter((ele) => { return ele !== "" }).length} <br />
                    No. of Charecters: {text.length} <br />
                    Reading Time: {0.008 * text.split(" ").filter((ele) => { return ele !== "" }).length} mins.
                </p>
                <h2>Preview</h2>
                <p>{text.length === 0 ? "Nothing to preview ..." : text}</p>
            </div>
        </div>
    )
}