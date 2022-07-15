import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        console.log('Uppar case was cliked');
        props.show("Converted to UpparCase", "success");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        props.show("Converted to LowerCase", "success");
        setText(newText);
    }

    const handleCap = () => {
        let str = text.split(' ');
        let newText = '';
        str.forEach(element => {
            newText += element.charAt(0).toUpperCase() + "" + element.slice(1).toLowerCase() + " ";
        })
        props.show("Capatalized Text", "success");
        setText(newText);
    }

    const handleClear = () => {
        setText('');
    }

    const handleOnChange = (event) => {
        console.log("onchange clicked");
        setText(event.target.value);
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#181616' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#191e42', color: props.mode === 'dark' ? 'white' : '#181616' }} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary m-2" onClick={handleUpClick} >Convert to UpparCase</button>
                <button className="btn btn-primary m-2" onClick={handleLowClick} >Convert to LowerCase</button>
                <button className="btn btn-primary m-2" onClick={handleCap} >Captalize</button>
                <button className="btn btn-primary m-2" onClick={handleClear} >Clear</button>
            </div>
            <div className="container my-2">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words, {text.length} Characters</p>
                <p>It can take {0.008 * text.split(" ").length} minutes to read this text</p>
                <h2>Preview:</h2>
                <p>{text.length > 0 ? text : 'Enter the text above to preview'}</p>
            </div>
        </>
    )
}
