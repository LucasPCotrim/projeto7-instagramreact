import './Story.css'

export default function Story(props){
  return (
    <div className="story">
      <div className="story_icon">
        <img src="./imgs/stories_background.jpg" alt="" height="66px" width="66px" />
        <img src={props.img} alt={props.profile_name + ' story profile picture'} height="56px" width="56px" />
      </div>
      <p>{props.profile_name}</p>
    </div>
  );
}