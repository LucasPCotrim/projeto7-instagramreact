import { useContext } from "react"
import { GlobalContext } from "../contexts/Context";

import SidebarProfile from "./SidebarProfile";
import SidebarSuggestion from "./SidebarSuggestion"
import SidebarFootMenu from "./SidebarFootMenu";

export default function SidebarContainer(){

  const {globalState, } = useContext(GlobalContext);

  return (
    <div className="sidebar_container">
      <div className="sidebar">
        <SidebarProfile profile_name='catanacomics'
                        name='Catana'
                        img='./imgs/catanacomics 1.png'
          />
        <div className="suggestions">
          <div className="suggestions_title">
            <div className="suggestions_title_left"><b>Sugestões para você</b></div>
            <div className="suggestions_title_right"><b>Ver tudo</b></div>
          </div>
          {globalState.suggestions.map((suggestion,index)=>(<SidebarSuggestion suggestion_info={suggestion} key={index}/>))}
        </div>
        <SidebarFootMenu />
      </div>
    </div>
  );
}