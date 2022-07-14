

export default function PostButtons({liked, bookmarked, like_post, dislike_post, toggle_bookmark_post}){
  return (
    <div className="post_buttons">
      <div>
        <div className="left_buttons">
          {(!liked) ? <ion-icon name="heart-outline" onClick={like_post}></ion-icon>
                    : <ion-icon name="heart" id="liked" onClick={dislike_post}></ion-icon>}
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div className="right_button">
          {(!bookmarked) ? <ion-icon name="bookmark-outline" onClick={toggle_bookmark_post}></ion-icon>
                          : <ion-icon name="bookmark" onClick={toggle_bookmark_post}></ion-icon>}
        </div>
      </div>
    </div>
  );
}