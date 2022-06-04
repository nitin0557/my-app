import React, {useState} from 'react'


export default function TextForm(props)
 {
  

     const handleUpClick = () => {
         let newText = text.toUpperCase();
         setText(newText)
         props.showAlert("uppercase","success");
         

     }
     const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("lowercase","success");

    }

     const handleOnchange = (event) =>{
         setText(event.target.value);
    }
    const handlereset = () =>{
         setText("");
         props.showAlert("Reset","success");
   }
   const capitalize = () =>
    {
    // storing the first char of the string
  // converting that to uppercase
    setText(
        text.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
    ); // printing it with rest excluding the first char by using slice
    props.showAlert("Capitalized","success");
   }
   
   
   const handleCopy = () => {
    
     navigator.clipboard.writeText(text);
     props.showAlert("Copied to Clipboard","success");
    
   }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces","success");
    
  }
  const [text ,setText] = useState('');
  return (
    <>
    <div className="container" style={{color :props.mode === 'dark'? 'white': '#042743'}}>
           <h1 >{props.heading}</h1>

            <div className="mb-3">
            <textarea className="form-control" onChange ={handleOnchange} style={{backgroundColor :props.mode === 'dark'? 'grey': 'white'
             ,color :props.mode === 'dark'? 'white': '#042743' }}value={text} id="myBox " rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case </button>
            <button className="btn btn-primary mx-3" onClick={handleloClick}>Convert to Lower Case </button>
            <button className="btn btn-primary mx-0" onClick={handlereset} >Clear </button>
            <button className="btn btn-primary mx-2" onClick={capitalize} >Auto Capitalize </button>
             <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text </button> 
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces </button>
    </div>
            <div className="container">

            <h1>Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} minutes to read </p>
            <h1>PREVIEW</h1>
            <p>{text.length >0 ?text:"Enter something in the the text box "}</p>
            
            </div>
 

   
</>
        
  )
}
