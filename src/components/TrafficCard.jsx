import{LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts"

const data=[{day: "Mon", visits: 100},{day: "Tue", visits: 180},
     {day: "Wed", visits: 300},{day: "Thurs", visits: 260},{day: "Fri", visits: 150}]

     export default function TrafficCard(){
        return(
            <div>
            <div style={{background: "#fff", padding: 20}}>

                <h3>Traffic</h3>
                <LineChart width={700} height ={300} data={data}>
                  <CartesianGrid stroke ="#eee"></CartesianGrid>
                  <XAxis dataKey="day"></XAxis>
                  <YAxis></YAxis>
                    <Tooltip></Tooltip>

                    <Line type="monotone" dataKey="visits" stroke="#00c0ef" strokeWidth={2}></Line>
                </LineChart>
            </div>


         <div>
               
      <div className="traffic-footer">
        <div className="footer-stat">
          <p>Visits</p>
          <strong>29.703 Users (40%)</strong>
          <div className="progress-bar green"></div>
        </div>
        <div className="footer-stat">
          <p>Unique</p>
          <strong>24.093 Users (20%)</strong>
          <div className="progress-bar blue"></div>
        </div>
        <div className="footer-stat">
          <p>Pageviews</p>
          <strong>78.706 Views (60%)</strong>
          <div className="progress-bar yellow"></div>
        </div>
        <div className="footer-stat">
          <p>New Users</p>
          <strong>22.123 Users (80%)</strong>
          <div className="progress-bar red"></div>
        </div>
      </div>
    </div>

     </div>
         

          
        )
     }