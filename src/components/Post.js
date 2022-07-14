import { useState } from "react";

export default function Post(props){
  let post = props.post_info;
  const [liked, setLike] = useState(false);
  const [numLikes, setNumLikes] = useState(post.num_likes);

  const like_post = () => {
    if(liked) return;
    setLike(true);
    setNumLikes(numLikes+1);
  };
  const dislike_post = () => {
    setLike(false);
    setNumLikes(numLikes-1);
  }

  return (
    <div className="post">
      <div className="post_header">
        <div>
          <div className="post_author">
            <img src={post.profile_pic} alt="" width="32px" height="32px" />
            <p>{post.profile_name}</p>
          </div>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <img src={post.post_img} alt="" onClick={like_post}/>
      <div className="post_buttons">
        <div>
          <div className="left_buttons">
            {(!liked) ? <ion-icon name="heart-outline" onClick={like_post}></ion-icon>
                      : <ion-icon name="heart" id="liked" onClick={dislike_post}></ion-icon>}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div className="right_button">
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>
      </div>
      <div className="post_likes">
        <img src={post.liked_by_pic} alt="" width="20px" height="20px" />
        <p>Curtido por <b>{post.liked_by_profile_name}</b> e <b>outras {numLikes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} pessoas</b></p>
      </div>
    </div>
  );
}