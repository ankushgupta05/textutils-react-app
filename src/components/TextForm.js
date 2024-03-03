import { element } from 'prop-types';
import React, {useState} from 'react'

function TextForm(props) {
  


  const handleUpClick = ()=>{
    // console.log("Uppercase Was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
    // setText("You have cliked on handleUpClinked")
  }
  
  
  const handleLoClick = ()=>{
    // console.log("Uppercase Was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    // setText("You have cliked on handleUpClinked")
    props.showAlert("Converted to Lowercase","success")
  }
  
  // This function copy all containt
  const handleCopy = ()=>{
    // console.log("I am copy")
    // var text = document.getElementById("myBox")
    // text.Select();
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard","success")
  }
  
  // This function remove extraspaces
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Space Removed","success")
  }
  
  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","success")
  }
  
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);

  }
  
  const [text, setText] = useState('');
    // text = "new text"; // This is wrong way to change text of useState
    // setText("new text"); // Correct way
  
    return (
      <>
    <div className='container' style={{color :props.mode === 'dark'?'white':'#042743'}}>

        <h1 className='my-4'>{props.heading} </h1>
        <div className="mb-3 MY-3 ">
        <textarea className="form-control" id="MyBox" rows="8" value={text} style={{backgroundColor :props.mode === 'dark'?'#13466e':'white',color: props.mode === 'dark'?'white':'#042743'}} onChange={handleOnChange} ></textarea>
        </div>
        <button disabled={text.length ===0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}  >Convert To Uppercase</button>
        <button disabled={text.length ===0} className='btn btn-primary mx-2 my-1' onClick={handleLoClick} >Convert To Lowercase</button>
        <button disabled={text.length ===0} className='btn btn-primary mx-2 my-1' onClick={handleClearClick} >Clear Text</button>
        <button disabled={text.length ===0} className='btn btn-primary mx-2 my-1' onClick={handleCopy} >Copy Text</button>
        <button disabled={text.length ===0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces} >Remove Extra space</button>

    </div>
    
    <div className="container my-3" style={{color :props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        {/* <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length}</p> */}
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length}</p>
        <p>{0.08 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minut Read.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
    </div>

    </>
  )
}

export default TextForm
