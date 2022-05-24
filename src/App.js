import './App.css';
import Profile from './profile/Profile'

function App() {
  const fullname="Nadia ESSALHI"
  const bio= "I'am a PhD in Chemical & Proess Engineering. I have a experience in engineering and project management. Now i learn full stack development and i want to be a web developer"
  const profession="Project Manager"
  const handelName=(nom) => {
    alert(`${nom}`)
  }
  return (
    <div className="App">
      <Profile name={fullname} bio={bio} profession={profession} handelName={handelName}/>
        <br />
      <img src='Photo Nadia ESSALHI.png' alt='profile' />
      
    </div>
  );
}

export default App;
