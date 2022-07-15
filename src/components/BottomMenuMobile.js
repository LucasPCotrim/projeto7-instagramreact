import './BottomMenuMobile.css'

export default function BottomMenuMobile(){
  const bottom_menu_icons = ["home",
                             "search-outline",
                             "add-circle-outline",
                             "heart-outline",
                             "person-outline"];
  return (
    <div className="bottom_menu_mobile">
      <div>
        {bottom_menu_icons.map((icon,index)=>{return <ion-icon name={icon} key={index}></ion-icon>})}
      </div>
    </div>
  );
}

