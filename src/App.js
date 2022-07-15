import { GlobalContext } from "./contexts/Context";
import { useState } from "react"

import TopMenu from "./components/TopMenu";
import TopMenuMobile from "./components/TopMenuMobile";
import PageContent from "./components/PageContent";
import BottomMenuMobile from "./components/BottomMenuMobile";
import CommentScreen from "./components/CommentScreen";

export default function App() {

  const [globalState, setGlobalState] = useState({screen: 'homepage' // 'homepage' or 'comments_page'
  });

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
