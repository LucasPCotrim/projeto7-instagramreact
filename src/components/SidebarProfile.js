import './SidebarProfile.css'

export default function SidebarProfile(props){
  return (
    <div className="profile">
      <img src={props.img} alt="" />
      <div className="profile_name">
        <b>{props.profile_name}</b>
        <p>{props.name}</p>
      </div>
    </div>
  );
}