import './index.css'

function Portfolios(){
    return(
        <div>
            <h1>Chica's Portfolio</h1>
                <div className='users'>
                    <div>
                    <h2 className='titlesCont'>Who we are</h2>
                    <p className='whoWeAreCont'>
                    Chicas are aiming to create innovative software solutions that drive
                    positive change. Our group of enthusiastic software engineers is committed 
                    to creating cutting-edge programs that address pressing issues in society.
                    </p>

                    </div>
                
                <div>
                    <h2 className='titlesCont'>Our Purpose</h2>
                    <p className='whoWeAreCont'>
                    Chicas are aiming to create innovative software solutions that drive
                    positive change. Our group of enthusiastic software engineers is committed 
                    to creating cutting-edge programs that address pressing issues in society.
                    </p>
                </div>
                </div>
        <div>
            <h1 className='titlesCont'>What we do</h1>
            <div className='cardsContainer'>
       
        <div className="cardsText" id='delivery-card'>
            <h2 className="h1Tag">Back-end Development</h2>
            <img src='/images/backend1.png' className="backEnd"></img>
                <li>Django Framewok</li>
                <li>Python</li>
                <li>Postgresql</li>
            


          
        </div>

        <div className="cardsText" id='delivery-card'>
            <h2 className="h1Tag">Front-end Web Development</h2>
            <img src='/images/web1.png' className="backEnd"></img>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>APIs</li>

            
        </div>


        <div className="cardsText" id='delivery-card'>
            <h2 className="h1Tag">Data and Software Architecture</h2>
            <img src='/images/data1.png' className="backEnd"></img>
                <li>SQL</li>
                <li>Postgresql</li>
                <li>Dashboards</li>

                 
        </div>


        <div className="cardsText" id='delivery-card'>
            <h2 className="h1Tag">Front-end Mobile Development</h2>
            <img src='/images/mobile1.png' className="backEnd"></img>
                <li>Android Studio</li>
                <li>Kotlin</li>
                <li>Android activities layouts and SDK</li>
          
        </div>


        <div className="cardsText" id='delivery-card'>
            <h2 className="h1Tag">Product Management</h2>
            <img src='/images/pm1.png' className="backEnd"></img>
                <li>Product Requirements Documentation</li>
                <li>Agile Methodology</li>
                <li>Product Lifecycle</li>
                <li>Prioritization</li>
                <li>User stories and acceptance Criteria</li>


          
        </div>

        <div className="cardsText" id='delivery-card'>
            <h2 className="h1Tag">UX Research</h2>
            <img src='/images/research1.png' className="backEnd"></img>
                <li>Desgn Thinking Process</li>
                <li>Research Plan</li>
                <li>Usability Plan</li>
                <li>Research</li>
                <li>Quantitative and Qualitative Research Methods</li>


          
        </div>

        <div className="cardsText" id='delivery-card'>
            <h2 className="h1Tag">UI Design</h2>
            <img src='/images/design1.png' className="backEnd"></img>
                <li>Figma</li>
                <li>Adobe illustrator</li>
                <li>Photoshop</li>
                <li>Figjam</li>
          
        </div>

        <div>
            <button>Our Portfolios</button>
        </div>

    </div>
 
        </div>

        </div>
        
    )
}

export default Portfolios;