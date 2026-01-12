import React from 'react'
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import Topbar from './components/Topbar'
import Navbar from "./components/Navbar"

function App() {
  return (
    <div style={{display: 'flex', width: '100vw'}}>
      <Sidebar/>

<div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
   <Navbar/>
<Topbar/>
 <Dashboard/>

</div>

    
    </div>
  )
}

export default App