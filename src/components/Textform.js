import React, { useState } from "react";

export default function Textform(props) 
{
  const [text, settext] = useState("");
 
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Your Text is now Converted to UpperCase", "success")
  };

  const handlelowclick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("Your Text is now Converted to LowerCase", "success")

  };
  
  const handleClearAll = () => {
    let newtext = "";
    settext(newtext);
    props.showalert(" Your all text has been CLeared", "success")

  };

  const handleonchange = (event) => {
    console.log("ON change");
    settext(event.target.value);
  };
  
  const [Mystyle, setmystyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
  const [btntext,setbtntext] = useState("Enable dark mode")
  
 const Toggledarkmode = ()=>{
    if(Mystyle.color == 'black'){
      setmystyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setbtntext("enable light mode")
    }
    else{
      setmystyle({
        color: 'black',
      backgroundColor: 'white'
    })
    setbtntext("enable dark mode")
  }
  }



  return (
    <div style={{backgroundColor:props.mode==='dark'?'rgb(36 74 112)':'white'}} >
      <div className="container" style={{backgroundColor:props.mode==='dark'?'rgb(36 74 112)':'white'}}>
        <h1 className="heading">Enter your text below:</h1>
          <textarea className="form-control " style={{color:'black', backgroundColor:props.mode==='dark'?'rgb(63 101 141)':'white'}} onChange={handleonchange} id="floatingTextarea" value={text} rows='16'></textarea>
       
        <button type="button" className="btn btn-primary mx-2 my-4" onClick={handleupclick}>Convert to Capital</button>
        <button type="button" className="btn btn-primary mx-2 my-4" onClick={handlelowclick}>Convert to Small</button>
        <button type="button" className="btn btn-primary mx-2 my-4" onClick={handleClearAll}>Clear All</button>
        {/* <button className="button mx-2" style={Mystyle} onClick={Toggledarkmode}>{btntext}</button> */}
    
      </div>
    </div>
  );
}
