import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <LoadPosts></LoadPosts>
    </div>
  );
}

function LoadPosts(){
  const [posts,setPost] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=> setPost(data))
  },[])
  return(
    <div>
      <h1>this is comment: {posts.length}</h1>
      <div className='post'>
      {
        posts.map(post=><Post post={post} ></Post>)
      }
      </div>
    </div>
  )
}

function Post(props){
  const {email,name,id}=props.post;
  return(
    <div style={{background:'black', color:'white',padding:'10px',margin:'20px'}}>
      <h2>Id: {id}</h2>
      <h3>Name: {name}</h3>
      <h2>Email: {email}</h2>
      
    </div>
  )
}

export default App;
