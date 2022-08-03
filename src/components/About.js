import React from 'react'

export default function About(props) {
    // const [mystyle, setMystyle] = useState({
    //     backgroundColor: props.mode === "dark" ? "#151f59" : "white",
    // })

    let mystyle = {
        backgroundColor: props.mode === "dark" ? (props.colour === "#151f59" ? "#151f59" : "#234b2c") : "white",
        color: props.mode === "dark" ? "white" : "black"
    }
    // const [darkbtn, setdarkbtn] = useState("Enable Dark Mode")

    // const toggleDark = () => {
    //     if (mystyle.backgroundColor === "white") {
    //         setmystyle(
    //             {
    //                 color: "white",
    //                 backgroundColor: "black",
    //                 border: "1px solid white"
    //             }
    //         )
    //         setdarkbtn("Enable Light Mode")
    //     }
    //     else {
    //         setmystyle(
    //             {
    //                 color: "black",
    //                 backgroundColor: "white"
    //             }
    //         )
    //         setdarkbtn("Enable Dark Mode")
    //     }
    // }

    return (
        <div className='container my-3' style={mystyle}>
            <h1>About Us</h1>
            <p>
                Hello there, Welcome to the TextUtils Website. We provide the following functionalities.
            </p>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            UPPERCASE
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show my-2" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Converts the text to uppercase.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            lowercase
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse my-2" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Converts the text to lowercase.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Replace Text
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>You can replace a word with another word.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Copy to Clopboard
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>You can copy the contents of the textbox to the clipboard.</strong>
                        </div>
                    </div>
                </div>
                {/* <button className='btn btn-primary my-2' onClick={toggleDark}>{darkbtn}</button> */}
                {/* <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{darkbtn}</label>
                </div> */}
            </div>
        </div>
    )
}
