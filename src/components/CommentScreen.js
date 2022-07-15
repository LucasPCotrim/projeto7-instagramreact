import { useContext } from "react"
import { GlobalContext } from "../contexts/Context";

import CommentWindow from "./CommentWindow";


export default function CommentScreen() {
  const {globalState, setGlobalState} = useContext(GlobalContext);

  let selected_post = globalState.posts.filter((p)=>(p.selected))[0];

  const exit_comments_page = () =>{
    let posts = globalState.posts.map((p)=>{
      return {...p, selected: false}
    });
    setGlobalState({...globalState, screen: 'homepage', posts: posts});
    window.onscroll=null; //re-enable scrolling
  }

  return (
    <>
      {(globalState.screen === 'comments_page')
        ? <CommentWindow selected_post = {selected_post} exit_comments_page={exit_comments_page}/>
        : <></> }
    </>
  );
}

