// import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/fer.torvalds" target="blank">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/fernando-torvalds/" target="blank">
                <LinkedInIcon/>
            </a>
            {/* <a href="">
                <GitHubIcon/>
            </a> */}
            <a href="https://twitter.com/Fer_Torvalds" target="blank">
                <TwitterIcon/>
            </a>
        </div>
    )
}