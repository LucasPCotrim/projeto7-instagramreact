import StoryBrowser from "./StoryBrowser";
import PostsColumn from "./PostsColumn";

import './MainPage.css'

export default function MainPage(){
  return (
    <div className="main_page">
      <StoryBrowser />
      <PostsColumn />
    </div>
  );
}
