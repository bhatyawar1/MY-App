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
                <h2 className='mb-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#353b66', color: props.mode === 'dark' ? 'white' : '#181616' }} value={text} id="myBox" rows="6"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleUpClick} >Convert to UpparCase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleLowClick} >Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleCap} >Captalize</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleClear} >Clear</button>
            </div>
            <div className="container my-2">
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words, {text.length} Characters</p>
                <p>It can take {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read this text</p>
                <h2>Preview:</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    )
}
