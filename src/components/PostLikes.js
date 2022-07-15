import './PostLikes.css'

export default function PostLikes({liked_by_pic, liked_by_profile_name, numLikes}){
  return (
    <div className="post_likes">
      <img src={liked_by_pic} alt="" width="20px" height="20px" />
      <p>Curtido por <b>{liked_by_profile_name}</b> e <b>outras {numLikes.toString().replace(/\B(?=(\d{3})+(?!\d))/g,'.')} pessoas</b></p>
    </div>
  );
}