import './index.css';

import mic from '../Images/mic.png'
function About(){
    return(
        <>
          <div id="about">
        <div className='header'>
            <h1>About</h1>
        </div>
    <div className='txts'>
         <p id='tx'>How things work is put together by a team of brilliant software<br/>
         developers that use their skills to go through different domains<br/>
        and their products while using their systems thinking skills and<br/>
        knowledge to ensure that the information that reaches you is <br/>
         properly currated, true and triple verified.</p>
         <div className='micp'>
            <img  className='mic'src={mic} alt=''/>
         </div>
        </div>
        <div id='get'>
        <p id='y'>Youtube</p>
        </div>
        </div>
        </>
    )
}
export default About;