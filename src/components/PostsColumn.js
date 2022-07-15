import { useContext } from "react"
import { GlobalContext } from "../contexts/Context";

import Post from "./Post";

import './PostsColumn.css'

export default function PostsColumn(){
  const {globalState, } = useContext(GlobalContext);

  return (
    <div className="posts_column">
      {globalState.posts.map((post, index)=>(<Post post_info={post} key={index}/>))}
    </div>
  );
}

