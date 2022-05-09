import React from 'react'
import {
    Link
  } from 'react-router-dom';
import '../nav/nav.scss'

export default function Nav(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Forside</Link>    
                </li>

                <li>
                    <Link to="/om">About</Link>    
                </li>

                <li>
                    <Link to="/kontakt">Contact</Link>    
                </li>
           
                <li>
                    <Link to="/produkter">Products</Link>   
                </li>

            </ul>
        </nav>
    )
}