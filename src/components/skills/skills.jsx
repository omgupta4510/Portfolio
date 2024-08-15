import './skills.scss'

import Cp from "./cp";
const Skills =()=>{
    return(
        <div className="skills">
            <div className="lang">
            <div  className='s-heading'>
            <span>Apart from</span> <span> Development</span>
            </div>
            <div className="CPlink">
            <Cp name="Codeforces" link="https://codeforces.com/profile/omgupta_4510" address="code-forces.png"/>
            <Cp name="Codechef" link="https://www.codechef.com/users/omgupta4510" address="codechef.png"/>
            <Cp name="Leetcode" link="https://leetcode.com/u/omgupta4510/" address="leetcode.png"/>
            <Cp name="CSES" link="https://cses.fi/user/182981" address="code.png"/>
            </div> 
            </div>
        </div>
    )
}
export default Skills;