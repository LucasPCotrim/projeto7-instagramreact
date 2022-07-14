import Story from "./Story";


export default function StoryBrowser(){
  const stories = [{profile_name: '9gag',
                    img: 'imgs/9gag 1.png'},
                   {profile_name: 'meowed',
                    img: 'imgs/story_meowed 1.png'},
                   {profile_name: 'barked',
                    img: 'imgs/story_barked 1.png'},
                   {profile_name: 'nathanwpyle',
                    img: 'imgs/story_nathanwpylestrangeplanet 1.png'},
                   {profile_name: 'wawawiwa',
                    img: 'imgs/story_wawawiwacomicsa 1.png'},
                   {profile_name: 'respondeai',
                    img: 'imgs/story_respondeai 1.png'},
                   {profile_name: 'filomoderna',
                    img: 'imgs/story_filomoderna 1.png'},
                   {profile_name: 'memeriago',
                    img: 'imgs/story_memeriagourmet 1.png'}]

  return (
    <div class="story_browser">
      {stories.map((story)=>{return <Story profile_name={story.profile_name} img={story.img}/>})}
      <div class="story_right_button">
        <img src="imgs/chevron-forward-circle 1.png" alt="" width="32px" height="32px" />
      </div>   
    </div>
  );
}