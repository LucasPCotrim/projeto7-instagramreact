import StoryBrowser from "./StoryBrowser";
import PostsColumn from "./PostsColumn";

export default function MainPage(){
  return (
    <div className="main_page">
      <StoryBrowser />
      <PostsColumn />
    </div>
  );
}
