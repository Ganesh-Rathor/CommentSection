import React,{useState} from 'react';
import "./ReplyBox.css";

function ReplyBox(props) {
  console.log(props.Person);
  const [value, setvalue] = useState(props.Person);
  function intextHandle(e){
    setvalue(e.target.value);
  }

  return  (
    props.Comment &&
    <>
    
     <div className='comment-section'
     style={{maxWidth :`calc(80% + ${props.wid}%)`}}
     >
        <img className='reply-box-img' src={require("./images/avatars/image-juliusomo.png")} alt="CurrUser" width={32} height={32} />
        <textarea name="replyp" value={ value } onChange={props.TextAreaHandle} onInput={intextHandle} className='reply' id="" cols="30" rows="10"></textarea>
        <button className='clickR-btn' onClick={props.repliedHandle}>Replay</button>
    </div>
    </>
  );
}

export default ReplyBox;