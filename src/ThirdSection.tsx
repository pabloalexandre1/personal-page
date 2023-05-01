import react from 'react';
import { useState } from 'react';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';

function BackendSection() {
    //tecnologies: node.js, typescript, javascript, mongoDB, MySQL, AWS, express.js
    return(
        <div className="stacks-div">
            <div className="d-flex row-tecs">
                <img src="./images/logo_nodejs.png" className="img-stack" alt="" />
                <img src="./images/logo_typescript.png" className="img-stack" alt="" />
                <img src="./images/logo_javascript.png" className="img-stack" alt="" />
            </div>
            <div className="d-flex row-tecs-1">
                <img src="./images/logo_aws.png" className="img-stack" alt="" />
                
                <img src="./images/logo_mongodb.png" className="img-stack" alt="" />
            </div>
            <div className="d-flex row-tecs">
                <img src="./images/logo_mysql.png" className="img-stack" alt="" />
                <img src="./images/logo_expressjs.png" className="img-stack" alt="" />
            </div>
        </div>
    )
}

function FrontendSection() {
    //tecnologies: vue.js, javascript, react.js, react Native, Flutter, bootstrap, css
    return(
        <div className="stacks-div">
            <div className="d-flex row-tecs">
                <img src="./images/logo_javascript.png" className="img-stack" alt="" />
                <img src="./images/logo_reactjs.png" className="img-stack" alt="" />
                
            </div>
            <div className="d-flex row-tecs-1">
                <img src="./images/logo_bootstrap.png" className="img-stack" alt="" />
                <img src="./images/logo_css.png" className="img-stack" alt="" />
                <img src="./images/logo_reactnative.png" className="img-stack" alt="" />
            </div>
            <div className="d-flex row-tecs">
                <img src="./images/logo_flutter.png" className="img-stack" alt="" />
                <img src="./images/logo_vuejs.png" className="img-stack" alt="" />
            </div>
        </div>
    )
}

export default function ThirdSection(props: any) {

    const [chosenStack, setChosenStack] = useState("backend");
    const [backendStatus, setBackendStatus] = useState("backend-clicked");
    const [frontendStatus, setFrontendStatus] = useState("frontend-clickable");

    function clickBackend(): void {
        setBackendStatus("backend-clicked");
        setFrontendStatus("frontend-clickable");
        setChosenStack("backend");

    }

    function clickFrontend(): void {
        setFrontendStatus("frontend-clicked");
        setBackendStatus("backend-clickable");
        setChosenStack("frontend");
    }
    return (
        <div className='container'>
            <div className="row">
                {props.language === 'pt' &&
                <div className="col-md-12">
                    
                    <h3 className='my-h3'>________________________________________________</h3>
                    <h2> Experiência </h2>
                    <h1 className="my-h11">Tecnologias</h1>
                    <h3 className='my-h3'>________________________________________________</h3>
                </div>}

                {props.language === 'en' &&
                <div className="col-md-12">
                    
                    <h3 className='my-h3'>________________________________________________</h3>
                    <h2> Experience </h2>
                    <h1 className="my-h11">Technologies</h1>
                    <h3 className='my-h3'>________________________________________________</h3>
                </div>}
                
            </div>
            <br /><br />
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 area-to-chose-stack">
                    <div onClick={clickBackend} className={backendStatus}>
                        {backendStatus == "backend-clicked" && <h3 className="clicked-h3">Backend</h3>}
                        {backendStatus == "backend-clickable" && <h3 className="clickable-h3">Backend</h3>}
                    </div>
                    <div onClick={clickFrontend} className={frontendStatus}>
                        {frontendStatus === "frontend-clicked" && <h3 className="clicked-h3">Frontend</h3>}
                        {frontendStatus === "frontend-clickable" && <h3 className="clickable-h3">Frontend</h3>}
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
            <br /><br />
            <div className="row tecnologies-area">
                <div className="col-md-2"></div>
                
                <br />
                <div className="col-md-8 stack-area">
                    {chosenStack === "backend" && <BackendSection />}
                    {chosenStack === "frontend" && <FrontendSection />}
                </div>
                <div className="col-md-2"></div>
            </div>
            <br />
            
        </div>    
        
        
    )

}