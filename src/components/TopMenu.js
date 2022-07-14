
export default function TopMenu() {
  const top_menu_icons = ["paper-plane-outline",
                          "compass-outline",
                          "heart-outline",
                          "person-outline"];

  return (
    <div class="top_menu">
      <div>
        <div class="top_menu_logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="linha_vertical"></div>
          <img src="imgs/logo.png" alt="" width="103px" height="29px"/>
        </div>
        <div class="top_menu_searchbar">
          <p>Pesquisar</p>
        </div>
        <div class="top_menu_icons">
          {top_menu_icons.map((icon)=>{return <ion-icon name={icon}></ion-icon>})}
        </div>
      </div>
    </div>
  );
}

