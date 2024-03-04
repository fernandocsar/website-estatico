import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>+ 3 years working as a web developer, in public and private companies.</p>
          <div className="experience-time">
            <Skill image="/java.png" measure={1} years="1 year"/>
            <Skill image="/python.png" measure={1} years="1 year"/>
            <Skill image="/js.png" measure={2} years="2 years"/>
          </div>
        </div>
    )
}