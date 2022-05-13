import React,{useState} from "react";
import Reply from "./Reply";
import ReplayBox from "./ReplyBox";
import RepliedComment from "./RepliedComment";
import Counter from "./Counter";
import "./comment.css";
import User from "./images/avatars/image-juliusomo.png";
import Data from "./data.json";

function Comment(props) {
  
  
  const [clickReply, setClickReply] = useState(false);
  const [Person, setPerson] = useState("Person");
  const [Replay, setReplay] = useState(props.Comment.replies);
  let id = 90;
  
  function replyFunc(e){
    setClickReply(prev => !prev);
    setPerson(e.target.parentNode.parentNode.querySelector(".name").innerText);
  }
  
  const [text, settext] = useState("");

  function repliedHandle(){
    id++;
    setReplay((prev)=>[
      ...prev,
      {
        id:id,
        content:text,
        score:0,
        replyingTo:props.replaiedPerson,
        createdAt: "1 sec ago",
        user:{
          image:{
            png:User
          },
          
        username:Data.currentUser.username
        }
      }
        
    ]);
    setClickReply(false);

  }

  function TextAreaHandle(e){
    settext(e.target.value)
  }
  const wid = 20;
  
  return (
    <>
     <section 
    className="comment-section" 
    style={{maxWidth:`calc(81% + ${wid}%)`}}
    >
        <Counter Comment={props.Comment} score={props.Comment.score}/>
        
        <div className="details">
            <div className="profile">
              <div className="innerProfile">

                <img 
                className="profile-img"
                src={require(`./images/avatars/image-${props.Comment.user.username}.png`)}
                alt="user-img" 
                width={32} height={32}/>

                <span className="name">{props.Comment.user.username} </span>
                </div>


                <div className="replyDelte">
                <span className="time">{props.Comment.createdAt}</span>
                <Reply replyFunc={replyFunc} style={{left: "calc(1rem + 10vw + 3%)"}}/>
                </div>
            </div>
            <div className="message">
                  {props.Comment.content}
            </div>
        </div>
        
    </section>
        {Replay.map(replayComment => <RepliedComment Comment={replayComment} key={replayComment.id} />)}
        
        {clickReply ?<ReplayBox key="12" wid={wid} text={text} Person={ "@"+Person } repliedHandle={repliedHandle} TextAreaHandle={TextAreaHandle} Comment={props.Comment}  />:null}
    </>
  )
}

export default Comment;