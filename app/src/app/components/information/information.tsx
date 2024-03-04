import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          <span>🇺🇸 EN - Beginner</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Graduated in Information Systems - Estácio de Sá University</span>
        </div>
        <div className="educational-info">
          <span>🎓</span>
          <span>Postgraduate in Web Development - Faculdade Focus</span>
        </div>
      </div>
    )
}