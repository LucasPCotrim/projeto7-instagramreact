
export default function BottomMenuMobile(){
  const bottom_menu_icons = ["home",
                              "search-outline",
                              "add-circle-outline",
                              "heart-outline",
                              "person-outline"];
  return (
    <div class="bottom_menu_mobile">
      <div>
        {bottom_menu_icons.map((icon)=>{return <ion-icon name={icon}></ion-icon>})}
      </div>
    </div>
  );
}

