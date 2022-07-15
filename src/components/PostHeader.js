
import './PostHeader.css'

export default function PostHeader(props){
  return (
    <div className="post_header">
      <div>
        <div className="post_author">
          <img src={props.profile_pic} alt="" width="32px" height="32px" />
          <p>{props.profile_name}</p>
        </div>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}