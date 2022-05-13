import React,{useState} from 'react';
import "./Delete.css";
import deleteImg from "./images/icon-delete.svg";
import editImg from "./images/icon-edit.svg";


function Delete(props) {
  
  function DeleteComment (e){
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.style.display="none";
  }
  
  
  return (
    <div className='delete-main' style={props.style}>
        <button className="delete" onClick={DeleteComment}><img className='delete-img' src={deleteImg} alt="delete" width={17} height={20} /> Delete</button>
        <button className="edit" onClick={props.EditComment}><img  className='edit-img' src={editImg} alt="edit" width={17} height={20} />Edit</button>
        
    </div>
  )
}

export default Delete;