

export default function SidebarSuggestion(props){
  let suggestion = props.suggestion_info;

  return (
    <div className="suggestion">
      <div className="suggested_profile">
        <img src={suggestion.profile_pic} alt="" />
        <div className="suggested_profile_name">
          <h1><b>{suggestion.profile_name}</b></h1>
          <p>{suggestion.profile_status}</p>
        </div>
      </div>
      <div className="suggested_profile_action">
        <b>seguir</b>
      </div>
    </div>
  );
}