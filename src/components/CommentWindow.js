


export default function CommentWindow({selected_post, exit_comments_page}){
  return (
    <div className="comment_screen">
      <div className="shaded_area" onClick={exit_comments_page}></div>
      <div className="comment_window">
        <img src={selected_post.post_img} alt={'Post by' + selected_post.profile_name}/>
        <div className="comment_container"></div>
      </div>
    </div>
  );
}