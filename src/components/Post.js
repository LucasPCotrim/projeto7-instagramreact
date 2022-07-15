import { useState, useContext } from "react"
import { GlobalContext } from "../contexts/Context";

import PostHeader from "./PostHeader";
import PostButtons from "./PostButtons";
import PostLikes from "./PostLikes";

import './Post.css'



export default function Post(props){
  const post = props.post_info;
  const [liked, setLike] = useState(false);
  const [numLikes, setNumLikes] = useState(post.num_likes);
  const [bookmarked, setBookmarked] = useState(false);

  const {globalState, setGlobalState} = useContext(GlobalContext);

  const like_post = () => {
    if(!liked){
      setLike(true);
      setNumLikes(numLikes+1);
    }; 
    animate_heart_popup(post.id);
  };
  const dislike_post = () => {
    setLike(false);
    setNumLikes(numLikes-1);
  }
  const toggle_bookmark_post = () => {
    setBookmarked(!bookmarked);
  };
  const open_comments = () => {
    let posts = globalState.posts.map((p)=>{
      return (p.id===post.id) ? {...p, selected: true} : {...p}
    });
    setGlobalState({...globalState, screen: 'comments_page', posts: posts});
    disableScrolling(); //disable scrolling
  }


  return (
    <div className="post" id={post.id}>
      <PostHeader
        profile_pic={post.profile_pic}
        profile_name={post.profile_name}
      />
      <img src={post.post_img} alt="" onClick={like_post}/>
      <div className = "pop_up_heart">
        <img src="./imgs/vectorpaint.svg" alt=""/>
      </div>
      <PostButtons
        liked={liked}
        bookmarked={bookmarked}
        like_post={like_post}
        dislike_post={dislike_post}
        toggle_bookmark_post={toggle_bookmark_post}
        open_comments={open_comments}
      />
      <PostLikes
        liked_by_pic={post.liked_by_pic}
        liked_by_profile_name={post.liked_by_profile_name}
        numLikes={numLikes}
      />
    </div>
  );
}


// Auxiliary Functions

function animate_heart_popup(post_id){
  let DOM_pop_up_heart = document.getElementById(post_id).querySelector('.pop_up_heart');
  DOM_pop_up_heart.classList.remove('pop_up_heart_animation');
  void DOM_pop_up_heart.offsetWidth;
  DOM_pop_up_heart.classList.add('pop_up_heart_animation');
}

function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}
