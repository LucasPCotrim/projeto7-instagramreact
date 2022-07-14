
export default function TopMenu() {
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
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}