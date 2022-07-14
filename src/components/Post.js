

export default function Post(props){
  let post = props.post_info;
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
      <img src={post.post_img} alt="" />
      <div className="post_buttons">
        <div>
          <div className="left_buttons">
            <ion-icon name="heart-outline"></ion-icon>
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
        <p>Curtido por <b>{post.liked_by_profile_name}</b> e <b>outras {post.num_likes} pessoas</b></p>
      </div>
    </div>
  );
}