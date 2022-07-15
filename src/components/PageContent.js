import MainPage from "./MainPage";
import SidebarContainer from "./SidebarContainer";

import './PageContent.css'


export default function PageContent() {
  return (
    <div className="page_content">
      <MainPage />
      <SidebarContainer />
    </div>
  );
}

