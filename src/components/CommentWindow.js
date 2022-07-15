import './CommentWindow.css'


export default function CommentWindow({selected_post, exit_comments_page}){
  return (
    <>
      
      <div className="comment_window">
        <img src={selected_post.post_img} alt={'Post by' + selected_post.profile_name}/>
        <div className="comment_container">
          <div className="post_author">
            <img src={selected_post.profile_pic} alt={selected_post.profile_name}/>
            <p>{selected_post.profile_name}</p>
          </div>
          <div className="linha_horizontal"></div>
        </div>
      </div>
    </>
  );
}