import React from 'react';
import { Link } from 'react-router-dom'; 
import '../css/PremierM.css';
import menuIcon from '../photos/MENUNOIR.png'; 
import logo from '../photos/LOGOJONOIR.png';
import reg from '../photos/Rectangle 24 (1).png';
import reg1 from '../photos/Rectangle 25 (1).png';
import reg2 from '../photos/Rectangle 27 (1).png';




const PremierM = () => {
    return (
        <div className="histoirekM">
            <p className='titreu'>
                    L'HISTOIRE
                </p>
                <Link to="/src/components/PremierM.js"> 
                <p className='titrebm'>
                    PREMIER MATCH
                </p>
                </Link>
                <Link to="/src/components/Histoire.js"> 
                <p className='titretM'>
                   MEDAILLE D'OR
                </p>
                </Link>
                <Link to="/src/components/Victoire.js"> 
                <p className='titref'>
                    PLUS LARGE VICTOIRE
                </p></Link>

                <p className='paragfm'>
                Le premier match de l'équipe de France de football aux <br/>
                 Jeux Olympiques remonte à l'année 1900 à Paris, lors des Jeux <br/>
                 Olympiques d'été. 
                </p>
                
                <p className='paragfff'>
                Cette compétition marquait la première apparition du football <br/>
                 dans le programme olympique. L'équipe de France a affronté <br/>
                 l'équipe de Belgique dans un match historique qui s'est <br/>
                  déroulé le 22 octobre 1900.
                </p>
                <p className='paragg'>
                Le match s'est soldé par une victoire écrasante de la France <br/>
                 sur un score de 6 à 2. Ce premier match a jeté les bases d'une <br/>
                  longue et glorieuse histoire pour le football français aux Jeux <br/>
                   Olympiques.
                </p>
            
                <div className="photo-container">
    <img src={reg} alt="n" className="photoo" />
    <img src={reg1} alt="n" className="photoo2" />
    <img src={reg2} alt="n" className="photoo3" />
</div>


            <img src={logo} alt="Logo" className="logo" />
          
            
            <div className="menu-container">
                
                <img src={menuIcon} alt="Menu" className="menu-icon" />
                
                <div className="menu">
                    <ul>
                       
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PremierM;