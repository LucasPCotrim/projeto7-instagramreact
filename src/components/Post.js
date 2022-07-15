import { useState } from "react"

import PostHeader from "./PostHeader";
import PostButtons from "./PostButtons";
import PostLikes from "./PostLikes";

export default function Post(props){
  const post = props.post_info;
  const post_id = 'post_' + props.id;
  const [liked, setLike] = useState(false);
  const [numLikes, setNumLikes] = useState(post.num_likes);
  const [bookmarked, setBookmarked] = useState(false);

  const like_post = () => {
    if(!liked){
      setLike(true);
      setNumLikes(numLikes+1);
    }; 

    let DOM_pop_up_heart = document.getElementById(post_id).querySelector('.pop_up_heart');
    DOM_pop_up_heart.classList.remove('pop_up_heart_animation'); // reset animation
    void DOM_pop_up_heart.offsetWidth; // trigger reflow
    DOM_pop_up_heart.classList.add('pop_up_heart_animation'); // start animation
  };
  const dislike_post = () => {
    setLike(false);
    setNumLikes(numLikes-1);
  }
  const toggle_bookmark_post = () => {
    setBookmarked(!bookmarked);
  };


  return (
    <div className="post" id={post_id}>
      <PostHeader
        profile_pic={post.profile_pic}
        profile_name={post.profile_name}
      />
      <img src={post.post_img} alt="" onClick={like_post}/>
      <div className = "pop_up_heart"></div>
      <PostButtons
        liked={liked}
        bookmarked={bookmarked}
        like_post={like_post}
        dislike_post={dislike_post}
        toggle_bookmark_post={toggle_bookmark_post}
      />
      <PostLikes
        liked_by_pic={post.liked_by_pic}
        liked_by_profile_name={post.liked_by_profile_name}
        numLikes={numLikes}
      />
    </div>
  );
}