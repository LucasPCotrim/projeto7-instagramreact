import Post from "./Post";

export default function PostsColumn(){
  const posts = [{profile_name: 'meowed',
                  profile_pic: 'imgs/story_meowed 1.png',
                  post_img: 'imgs/gato-telefone 1.png',
                  liked_by_profile_name: 'respondeai',
                  liked_by_pic: 'imgs/story_respondeai 1.png',
                  num_likes: 10.1523
                 },
                 {profile_name: 'barked',
                  profile_pic: 'imgs/story_barked 1.png',
                  post_img: 'imgs/dog 1.png',
                  liked_by_profile_name: 'adorable_animals',
                  liked_by_pic: 'imgs/adorableanimals 2.png',
                  num_likes: 99.159
                 },
                 {profile_name: 'meowed',
                  profile_pic: 'imgs/story_meowed 1.png',
                  post_img: 'imgs/gato-telefone 1.png',
                  liked_by_profile_name: 'respondeai',
                  liked_by_pic: 'imgs/story_respondeai 1.png',
                  num_likes: 101.523
                 }
                ];

  return (
    <div class="posts_column">
      {posts.map((post)=>{return <Post post_info={post} />})}
    </div>
  );
}

