import React, {useRef, useState} from "react";
import './navbar.css';

export default function Navbar(props: any) {

    let changeLanguage: Function = props.changeLanguage;

    const [language, setLanguage] = useState('pt');
    
    function setPt():void {
        setLanguage('pt');
        if(language != 'pt') {
            changeLanguage();
        }
    }
    function setEn():void {
        setLanguage('en');
        if(language != 'en') {
            changeLanguage();
        }
    }

    return (
        <div className="selector-div">
            {language === 'en' && <a onClick={setPt} href="#">PT</a>}
            {language === 'pt' && <a id="selected" className="selected" onClick={setPt} href="#">PT</a>}
            {language === 'pt' && <a onClick={setEn} href="#">EN</a>}
            {language === 'en' && <a id="selected" onClick={setEn} href="#">EN</a>}
        </div>
    )
}