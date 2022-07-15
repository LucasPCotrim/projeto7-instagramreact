import { useContext } from "react"
import { GlobalContext } from "../contexts/Context";


export default function CommentScreen() {
  const {globalState, setGlobalState} = useContext(GlobalContext);

  const exit_comments_page = () =>{
    setGlobalState({...globalState, screen: 'homepage'});
    window.onscroll=null; //re-enable scrolling
  }

  return (
    <>
      {(globalState.screen === 'comments_page') ? <div className="comment_screen">
                                                    <div className="shaded_area" onClick={exit_comments_page}></div>
                                                    <div className="comment_window">
                                                      <img src="./imgs/gato-telefone 1.png" alt=""/>
                                                      <div className="comment_container"></div>
                                                    </div>
                                                  </div>
                                                : <></> }
    </>
  );
}

