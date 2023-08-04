import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
const [gitHubName, setGitHubName] = useState('')


useEffect(() => {
    fetch('https://api.github.com/users/Jam19th')
    .then(res => res.json())
    .then(data => {
      console.log(data)
        setGitHubName(data.name)
    })
}, [])

return (
    <div className="App">
        <h1>Github Profile Info:</h1>
        <h2>{gitHubName}</h2>
    </div>
);
}

export default App
    
