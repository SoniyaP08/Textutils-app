    import React , {useState}from 'react'

    export default function TextForm(props) {
        const handleExtraSpaces =()=>
            {
                console.log("Extra Spaces was removed");
                let newText=text.split(/[ ]+/);
                setText(newText.join(" "));
                props.showAlert("Extra Spaces Removed!","success");
            }
        const handleUpClick =()=>
            {
                console.log("Uppercase was clicked "+ text);
                let newText=text.toUpperCase();
                setText(newText);
                props.showAlert("Converted to Uppercase!","success");
            }
            const handleLoClick =()=>
                {
                    console.log("Lowercase was clicked "+ text);
                    let newText=text.toLowerCase();
                    setText(newText);
                    props.showAlert("Converted to Lowercase!","success");
                }
                const handleCopy =()=>
                    {
                        console.log("Copy text was clicked");
                        var text=document.getElementById("mybox");
                        text.select();
                        navigator.clipboard.writeText(text.value);
                        props.showAlert("Copied to Clipboard!","success");
                    }
                    const handleClearClick =()=>
                        {
                            console.log("Clear Text was clicked "+ text);
                            let newText='';
                            setText(newText);
                            props.showAlert("Text Cleared","success");
                        }
                const capitalizeFirst =()=>
                {
                 console.log("First Letter Capitalized");
                 let words=text.split(" ");
                 let capWords=[];
                 for(let i=0;i<words.length;i++)
                    {
                       let word=words[i];
                       if(word.length>0)
                        {
                            let capWord=word[0].toUpperCase()+word.slice(1);
                            capWords.push(capWord);
                        }
                    }
                setText(capWords.join(' '));
                props.showAlert("First Letter Capitalized!","success");
                }
        const handleOnChange =(event)=>
            {
                console.log("On changed");
                setText(event.target.value);
            }

        const [text,setText]=useState('');

    return (
        <>
        <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor : props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}></textarea>
    </div>
    <button className=" btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className=" btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowerrcase</button>
    <button className=" btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className=" btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className=" btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className=" btn btn-primary mx-2" onClick={capitalizeFirst}>Capitalize First Letter</button>
        </div>

        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Your text Summary</h2>
            {/*<p>{text.split(" ").length}words, {text.length} characters</p>*/}
            <p>{text.trim().split(/\s+/).filter(word => word.length > 0).length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview here"}</p>
        </div>
        </>
    )
    }
