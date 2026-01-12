import React from 'react'
import "../styles/sidebar.css"

export default function Sidebar(){
    return(
        <aside className="sidebar">
            <h2 className="logo">Admin</h2>
            <ul>
                <li className='active'>DASHBOARD</li>
                <li>UI Elements</li>
                <li>Components</li>
                <li>Tables</li>
                <li>Forms</li>
                <li>Icons</li>
                <li>Charts</li>
                <li>Maps</li>
                <li>Pages</li>
                
            </ul>
        </aside>
    )
}