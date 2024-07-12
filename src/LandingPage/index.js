import './index.css';
import leila from '../Images/leila.jpg';
import Nje from '../Images/Nje.jpg';
import vee from '../Images/vee.png';
import Racheal from '../Images/Racheal.jpg';
import wachira from '../Images/wachira.png';
import polka from '../Images/polka.png';
// import loom from '../Images/loom.png';
// import JIra from '../Images/JIra.png';
import portfolios from '../Images/portfolios.jpg';
import micp from '../Images/micp.jpg';

function Landing(){
    return(
        <div className='body'>
            <div id='txt'>
            <h1>How Things <br/>Work</h1>
            <p>By Chica</p>
            </div>
            <div className= "polka">
                <img src= {polka} alt=''/>
            </div>
            <div className="imgs">
                <div className='first'>
                <div>
                <img id='leila' src={leila} alt='' />
                </div>
                <div>
                <img id='nje' src={Nje} alt=''/></div>
                </div>
                <div>
                <img id='vee' src={vee} alt=''/></div>
                <div className='second'>
                <div>
                <img id='wachira' src={wachira} alt=''/>
                </div>
                <div>
                <img id='rach' src={Racheal} alt=''/>
                </div>
                </div>
            </div>
            <p id='present'>Presented by your favorite squad.
                  LadiesInTech</p>
                  <div id='Access'>
                    <div>
                    <img  id='pod' src={micp} alt=''/>
                    <div>
                    <button>Podcast</button>
                    </div>
                    </div>
                    <div>
                    <img  id='port' src={portfolios} alt=''/>
                    <div>
                    <button>Portifolio</button>
                    </div>
                    </div>
                    <div>
                    {/* <img  id='loom' src={loom} alt=''/> */}
                    <div>
                    <button>Loom</button>
                    </div>
                    </div>
                    <div>
            
                    <div>
                    <button>Jira</button>
                    </div>
                    </div>
                  </div>
        </div>
    )
}
export default Landing;









