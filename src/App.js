import { GlobalContext } from "./contexts/Context";
import { useState } from "react"

import TopMenu from "./components/TopMenu";
import TopMenuMobile from "./components/TopMenuMobile";
import PageContent from "./components/PageContent";
import BottomMenuMobile from "./components/BottomMenuMobile";
import CommentScreen from "./components/CommentScreen";


export default function App() {

  const [globalState, setGlobalState] = useState(initial_state);

  return (
    <GlobalContext.Provider value={{globalState, setGlobalState}}>

      <TopMenu />
      <TopMenuMobile />
      <PageContent />
      <CommentScreen />
      <BottomMenuMobile />

    </GlobalContext.Provider>
  );
}




// Initial State

const initial_state = {
  screen: 'homepage', // 'homepage' or 'comments_page'
  stories:
    [{id: 1,
      profile_name: '9gag',
      img: './imgs/9gag 1.png'},
     {id: 2,
      profile_name: 'meowed',
      img: './imgs/story_meowed 1.png'},
     {id: 3,
      profile_name: 'barked',
      img: './imgs/story_barked 1.png'},
     {id: 4,
      profile_name: 'nathanwpyle',
      img: './imgs/story_nathanwpylestrangeplanet 1.png'},
     {id: 5,
      profile_name: 'wawawiwa',
      img: './imgs/story_wawawiwacomicsa 1.png'},
     {id: 6,
      profile_name: 'respondeai',
      img: './imgs/story_respondeai 1.png'},
     {id: 7,
      profile_name: 'filomoderna',
      img: './imgs/story_filomoderna 1.png'},
     {id: 8,
      profile_name: 'memeriago',
      img: './imgs/story_memeriagourmet 1.png'}],
  posts: 
    [{id: 1,
      selected: false,
      profile_name: 'meowed',
      profile_pic: './imgs/story_meowed 1.png',
      post_img: './imgs/gato-telefone 1.png',
      liked_by_profile_name: 'respondeai',
      liked_by_pic: './imgs/story_respondeai 1.png',
      num_likes: 101523
     },
     {id: 2,
      selected: false,
      profile_name: 'barked',
      profile_pic: './imgs/story_barked 1.png',
      post_img: './imgs/dog 1.png',
      liked_by_profile_name: 'adorable_animals',
      liked_by_pic: './imgs/adorableanimals 2.png',
      num_likes: 99159
     },
     {id: 3,
      selected: false,
      profile_name: 'meowed',
      profile_pic: './imgs/story_meowed 1.png',
      post_img: './imgs/gato-telefone 1.png',
      liked_by_profile_name: 'respondeai',
      liked_by_pic: './imgs/story_respondeai 1.png',
      num_likes: 101523}],
  suggestions:
    [{profile_name: 'bad.vibes.memes',
      profile_pic: './imgs/badvibesmemes 1.png',
      profile_status: 'Segue você'
      },
      {profile_name: 'chibirdart',
      profile_pic: './imgs/chibirdart 1.png',
      profile_status: 'Segue você'
      },
      {profile_name: 'razoes.para.acreditar',
      profile_pic: './imgs/razoesparaacreditar 1.png',
      profile_status: 'Novo no Instagram'
      },
      {profile_name: 'adorable_animals',
      profile_pic: './imgs/adorableanimals 1.png',
      profile_status: 'Segue você'
      },
      {profile_name: 'smallcutecats',
      profile_pic: './imgs/smallcutecats 1.png',
      profile_status: 'Segue você'}]
}
