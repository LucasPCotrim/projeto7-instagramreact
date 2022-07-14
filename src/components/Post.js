import { useState } from "react"

import PostHeader from "./PostHeader";
import PostButtons from "./PostButtons";
import PostLikes from "./PostLikes";

export default function Post(props){
  let post = props.post_info;
  const [liked, setLike] = useState(false);
  const [numLikes, setNumLikes] = useState(post.num_likes);
  const [bookmarked, setBookmarked] = useState(false);

  const like_post = () => {
    if(!liked){
      setLike(true);
      setNumLikes(numLikes+1);
    }; 
  };
  const dislike_post = () => {
    setLike(false);
    setNumLikes(numLikes-1);
  }
  const toggle_bookmark_post = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="post">
      <PostHeader
        profile_pic={post.profile_pic}
        profile_name={post.profile_name}
      />
      <img src={post.post_img} alt="" onClick={like_post}/>
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