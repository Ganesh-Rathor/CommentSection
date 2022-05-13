// .jshintignore
import React,{useState} from 'react';
import Replay from "./Reply";
import Delete from "./Delete";
import Counter from "./Counter";
import Data from "./data.json";
import "./RepliedComment.css";

function RepliedComment(props) {  
  const [editText, setEditText] = useState(false);
  
  function handleUpdate(e){
    setEditText(false) 
    e.target.parentNode.parentNode.parentNode.querySelector(".message").setAttribute("contenteditable", editText);
    e.target.parentNode.parentNode.parentNode.querySelector(".message").style.color = "var(--Grayish-Blue)";
    console.log(e.target.parentNode.parentNode.parentNode);
  }

  function EditComment (e){
    setEditText(true)    
    if(editText){
      e.target.parentNode.parentNode.parentNode.querySelector(".message").setAttribute("contenteditable", editText);
      e.target.parentNode.parentNode.parentNode.querySelector(".message").style.backgroundColor = "white";
      e.target.parentNode.parentNode.parentNode.querySelector(".message").style.color = "black";
      e.target.parentNode.parentNode.parentNode.querySelector(".message").focus();
    }
  }
  return (
    <>
      <div className="hr-row"
      style={{width :`95%`}}
      >

        <section 
            className="comment-section" 
            style={{width :`95%`}}
            >

        <Counter Comment={props.Comment} score={props.Comment.score} />
        <div className="details">
            <div className="profile">
              <div className="innerProfile">

                <img className='profile-img' src={require(`./images/avatars/image-${props.Comment.user.username}.png`)} alt="user-img" 
                width={32} height={32}/>

                <span className="name">{props.Comment.user.username} </span>
                </div>


                <div className="replyDelte">
                <span className="time">{props.Comment.createdAt}</span>
                {props.Comment.user.username === Data.currentUser.username ? <Delete editText={editText} EditComment={EditComment} style={{left: "calc(1rem + 3vw)"}} /> : <Replay replyFunc={props.replyFunc} style={{left: "calc(1rem + 6vw)"}} />}
                </div>
                
            </div>


            <div className="message">
                  {props.Comment.content}
            </div>
            {editText ? <button className='updateBtn' onClick={handleUpdate}>Update</button>:null}
        </div>
        
    </section>
    </div>
    </>
  )
}

export default RepliedComment