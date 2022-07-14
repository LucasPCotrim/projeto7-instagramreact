import SidebarProfile from "./SidebarProfile";
import SidebarSuggestion from "./SidebarSuggestion"
import SidebarFootMenu from "./SidebarFootMenu";

export default function SidebarContainer(){

  const suggestions = [{profile_name: 'bad.vibes.memes',
                        profile_pic: 'imgs/badvibesmemes 1.png',
                        profile_status: 'Segue você'
                       },
                       {profile_name: 'chibirdart',
                        profile_pic: 'imgs/chibirdart 1.png',
                        profile_status: 'Segue você'
                       },
                       {profile_name: 'razoes.para.acreditar',
                        profile_pic: 'imgs/razoesparaacreditar 1.png',
                        profile_status: 'Novo no Instagram'
                       },
                       {profile_name: 'adorable_animals',
                        profile_pic: 'imgs/adorableanimals 1.png',
                        profile_status: 'Segue você'
                       },
                       {profile_name: 'smallcutecats',
                        profile_pic: 'imgs/smallcutecats 1.png',
                        profile_status: 'Segue você'
                       }
                      ];

  return (
    <div className="sidebar_container">
      <div className="sidebar">
        <SidebarProfile profile_name='catanacomics'
                        name='Catana'
                        img='imgs/catanacomics 1.png'
          />
        <div className="suggestions">
          <div className="suggestions_title">
            <div className="suggestions_title_left"><b>Sugestões para você</b></div>
            <div className="suggestions_title_right"><b>Ver tudo</b></div>
          </div>
          {suggestions.map((suggestion,index)=>{return <SidebarSuggestion suggestion_info={suggestion} key={index}/>})}
        </div>
        <SidebarFootMenu />
      </div>
    </div>
  );
}