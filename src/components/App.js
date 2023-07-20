import React from "react";
import blogData from "../data/blog";

//console.log(blogData);

function App() {
  const Article = blogData.posts.map((postObj) => {
    return <ArticleList key={postObj.id} title={postObj.title} date={postObj.date} preview={postObj.preview} />
  })
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    <Header/>
    <About/>
    <main>
    {Article}
    </main>
    
    </div>
  );
}
function Header(){
  return (
    <div>
      <header>
        <h1>{blogData.name}</h1>
      </header>
    </div>
  
  )
}
function About({image = "https://via.placeholder.com/215"}){
  return (
    <div>
      <aside>
        <img src={image} alt="blog logo"/>
        <p>{blogData.about}</p>
      </aside>
    </div>
  
  )
}
function ArticleList(props){
return (
  <div className="card">
      <h3>{props.title}</h3>
      <small>
        {props.date}
      </small>
      <p>
        {props.preview}
      </p>

    </div>
)
}
export default App;
