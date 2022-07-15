import Post from "./Post";

export default function PostsColumn(){
  const posts = [{profile_name: 'meowed',
                  profile_pic: './imgs/story_meowed 1.png',
                  post_img: './imgs/gato-telefone 1.png',
                  liked_by_profile_name: 'respondeai',
                  liked_by_pic: './imgs/story_respondeai 1.png',
                  num_likes: 101523
                 },
                 {profile_name: 'barked',
                  profile_pic: './imgs/story_barked 1.png',
                  post_img: './imgs/dog 1.png',
                  liked_by_profile_name: 'adorable_animals',
                  liked_by_pic: './imgs/adorableanimals 2.png',
                  num_likes: 99159
                 },
                 {profile_name: 'meowed',
                  profile_pic: './imgs/story_meowed 1.png',
                  post_img: './imgs/gato-telefone 1.png',
                  liked_by_profile_name: 'respondeai',
                  liked_by_pic: './imgs/story_respondeai 1.png',
                  num_likes: 101523
                 }
                ];

  return (
    <div className="posts_column">
      {posts.map((post, index)=>(<Post post_info={post} id={index} key={index}/>))}
    </div>
  );
}

