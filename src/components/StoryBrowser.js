import { useContext } from "react"
import { GlobalContext } from "../contexts/Context";

import Story from "./Story";

import './StoryBrowser.css'


export default function StoryBrowser(){
  const {globalState, } = useContext(GlobalContext);

  return (
    <div className="story_browser">
      {globalState.stories.map((story,index)=>(<Story profile_name={story.profile_name} img={story.img} key={index}/>))}
      <div className="story_right_button">
        <img src="imgs/chevron-forward-circle 1.png" alt="" width="32px" height="32px" />
      </div>   
    </div>
  );
}