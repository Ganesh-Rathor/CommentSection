import './App.css';
import React from 'react';
import Comment from "./comment";
import Data from "./data.json";

function App() {
  return (
    <>
    <section className="secoundRoot">

    {Data.comments.map((comment)=>{
      return ( <Comment Comment={comment} key={comment.id} />)
    })}

    </section>
    </>
  );
}

export default App;
