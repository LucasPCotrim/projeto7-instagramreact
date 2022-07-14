import TopMenu from "./components/TopMenu";
import TopMenuMobile from "./components/TopMenuMobile";
import PageContent from "./components/PageContent";
import BottomMenuMobile from "./components/BottomMenuMobile";

function App() {
  return (
    <>
      <TopMenu />
      <TopMenuMobile />
      <PageContent />
      <BottomMenuMobile />
    </>
  );
}

export default App;