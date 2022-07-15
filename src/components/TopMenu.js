import './TopMenu.css'

export default function TopMenu() {
  const top_menu_icons = ["paper-plane-outline",
                          "compass-outline",
                          "heart-outline",
                          "person-outline"];

  return (
    <div className="top_menu">
      <div>
        <div className="top_menu_logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div className="linha_vertical"></div>
          <img src="imgs/logo.png" alt="" width="103px" height="29px"/>
        </div>
        <input className="top_menu_searchbar" type="text" placeholder="Pesquisar"/>
        <div className="top_menu_icons">
          {top_menu_icons.map((icon, index)=>{return <ion-icon name={icon} key={index}></ion-icon>})}
        </div>
      </div>
    </div>
  );
}

