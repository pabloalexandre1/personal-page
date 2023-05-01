import React, {useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './ThirdSection';
import ThirdSection from "./ThirdSection";
import Carousel from "./Carousel";
import Navbar from './Navbar';
import './bootstrap';

function App() {
  
  const [language, setLanguage] = useState('pt');

  function changeLanguage(): void {
    if(language === 'pt'){
      setLanguage('en');
    }else{
      setLanguage('pt');
    }
  }

  return (
    <div className="home">
      <Navbar changeLanguage={changeLanguage} />
      <div className="container first-section">
        <div className="row">
          <div className="col-md-12 my-main-div-1">
            <img className="profile-pic" src="./profile-pic.jpg" alt="" />
            <h2> Portifolio </h2>
            <h1 className="my-h1">Pablo Alexandre</h1>
            <h3 className="my-h3">|| . Fullstack Developer . | . Web . | . Mobile . | . Backend . ||</h3>
            <div className="icons-div">
              <a href="https://github.com/pabloalexandre1">
                <img className="icon" src="./images/icon-github.png" alt="icon github" />
              </a>
              <a href="https://www.linkedin.com/in/pablo-barros-41a091203/">
                <img className="icon" src="./images/icon-linkedin.png" alt="icon linkedin" />
              </a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="container second-section">
        <h3 className="my-h3">____________________________________________________</h3>
        <div className="row">
          {language === 'pt' && <h1 className="my-h1-2">|| . Sobre . | . Breve Resumo . ||</h1>}
          {language === 'en' && <h1 className="my-h1-2">|| . About . | . Resume . ||</h1>}
          
        </div>
        <div className="divisor"><h3 className="my-h3">____________________________________________________</h3></div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-3 book-area">
            <img src="./images/icon-book.png" className="book-img" alt="icone livro"/>
          </div>
          <div className="col-md-8 side-book">
            <div className="hold-h3">
              {language === 'pt' && <h3 className="my-h3-2"> Atualmente minha maior especialidade é a MERN stack, MongoDB, Express.js, React js/Native e Node.js,
                todas estas tecnologias com javascript e typescript, além de ter experiencia em projetos utilizando Vue.js e Flutter no frontend web e mobile, banco de dados relacionais como MariaDB/MySQL e a linguagem PHP como alternativa ao node.js.
                Neste momento, Resido em Campinas - SP, estou Cursando Análise e Desenvolvimento de Sistemas e trabalhando no que é o meu maior contrato até o momento, na empresa OneRF Networks.
                <br /><br /><br />
                Apaixonado por tecnologia desde cedo, por volta dos 10 a  12 anos já fazendo blogs com html e "joguinhos" com construct e unity, no notebook antigo da minha mãe,
                mas tive meu início da vida com foco profissional aos 16 anos, após me formar no ensino médio em 2016 no Colégio Estadual da Polícia Militar de Goiás Miriam Benchimol Ferreira
                e ingressar no ano seguinte, 2017, na Universidade Federal de Goiás, no curso de Sistemas de Informação, me mantive lá até a chegada da pandemia, em 2020. 
                Após a pausa na pandemia, com mais tempo sobrando, foi onde comecei a usar meus conhecimentos na prática e exercer meus serviços de desenvolvimento de software como freelancer,
                inicio em meados de setembro de 2020. de lá para cá, já se vão quase 3 anos, onde passei por vários projetos e cursos para me desenvolver. 

              </h3>}
              {language === 'en' && <h3 className="my-h3-2"> Currently my biggest specialty is the MERN stack, MongoDB, Express.js, React js/Native and Node.js,
                all these technologies with javascript and typescript, in addition to having experience in projects using Vue.js and Flutter on the web and mobile frontend, relational databases such as MariaDB/MySQL and the PHP language as an alternative to node.js.
                Right now, I live in Campinas - SP, I'm studying Systems Analysis and Development and working on what is my biggest contract so far, at OneRF Networks.
                <br /><br /><br />
                Passionate about technology from an early age, around 10 to 12 years old already making blogs with html and "games" with construct and unity, on my mother's old notebook,
                but I had my beginning of life with a professional focus at the age of 16, after graduating from high school in 2016 at the State College of the Military Police of Goiás Miriam Benchimol Ferreira
                and joining the following year, 2017, at the Federal University of Goiás, in the Information Systems course, I remained there until the arrival of the pandemic, in 2020.
                After the break in the pandemic, with more time to spare, that's where I started to use my knowledge in practice and exercise my software development services as a freelancer,
                I start in mid-September 2020. Since then, almost 3 years have passed, where I went through several projects and courses to develop myself. 

              </h3>}
            </div>
            
          </div>
          
          
        </div>
      </div>

      <div className="third-section">
        <ThirdSection language={language}/>
      </div>
      <div className="fourth-section">
        <div className="container">
              {language === 'pt' && 
              <div className="row">
                  <div className="col-md-12">
                    <h3 className='my-h3'>________________________________________________</h3>
                    <h2> Experiência </h2>
                    <h1 className="my-h11">Projetos</h1>
                    <h3 className='my-h3'>________________________________________________</h3>
                  </div>
              </div>}

              {language === 'en' && 
              <div className="row">
                  <div className="col-md-12">
                    <h3 className='my-h3'>________________________________________________</h3>
                    <h2> Experience </h2>
                    <h1 className="my-h11">Projects</h1>
                    <h3 className='my-h3'>________________________________________________</h3>
                  </div>
              </div>}
              
              <br />{language === 'pt' && <h3 className="my-h3">Exemplos de projetos versão web e mobile com api e banco de dados, desenvolvidos por mim.</h3>}
                    {language === 'en' && <h3 className="my-h3">Examples of web and mobile version projects with api and database, developed by me.</h3>}
              <br />
              <div>
                <div className="col-md-12">
                  <Carousel/>
                </div>
              </div>
        </div>
      </div>
      
      <div className="last-section">
        <div className="container">
          <div className="row">
            {language === 'pt' && 
            <div className="col-md-12">
            <h3 className='my-h3'>________________________________________________</h3>
            <h2> Projetos </h2>
            <h1 className="my-h11">Destaques</h1>
            <h3 className='my-h3'>________________________________________________</h3>
            <br /><br />
            <p className="my-h3">Nestes projetos foram utilizados e desenvolvidos recursos como sistema de envio de email para autenticação de conta e recuperação de senha,
              sistema de login e autenticação de api com jason web token, banco de dados, frontend mobile em comunicação com a api e banco de dados
              feitos em flutter ou react native, front end web com tecnologias como bootstrap, javascript, typescript, reactjs e vue.js,
              <br /><br />
              Faça já seu orçamento e tire já suas ideias do papel, entre em contato comigo!
              
            </p>
            </div>
            }

            {language === 'en' && 
            <div className="col-md-12">
            <h3 className='my-h3'>________________________________________________</h3>
            <h2> Projects </h2>
            <h1 className="my-h11">Highlights</h1>
            <h3 className='my-h3'>________________________________________________</h3>
            <br /><br />
            <p className="my-h3">In these projects, resources were used and developed, such as an email sending system for account authentication and password recovery,
              api login and authentication system with jason web token, database, mobile frontend in communication with api and database
              made in flutter or react native, web front end with technologies like bootstrap, javascript, typescript, reactjs and vue.js,
              <br /><br />
              Make your budget now and get your ideas off paper, contact me!
              
            </p>
            
            </div>
            }
            <br /><br /><br />
            <div className="icons-div">
              <a href="https://github.com/pabloalexandre1">
                <img className="icon" src="./images/icon-github.png" alt="icon github" />
              </a>
              <a href="https://www.linkedin.com/in/pablo-barros-41a091203/">
                <img className="icon" src="./images/icon-linkedin.png" alt="icon linkedin" />
              </a>
              
            </div>
            
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;
