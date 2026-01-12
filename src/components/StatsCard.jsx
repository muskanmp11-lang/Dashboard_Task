import "../styles/cards.css"


export default function StatsCard({color,value,title}){
    return(
        <div className="stats-card" styles={{backgroundColor:color, color:'white', padding: '20px'}}>
           
            <h3>10438</h3>
            <p>Members Online</p>
        </div>
    )
}