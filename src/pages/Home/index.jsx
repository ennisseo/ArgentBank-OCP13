import { useDispatch, useSelector } from 'react-redux';


function App() {
  const username = useSelector((state) => state.user.value.username);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bienvenue sur la page d'accueil {username}
        </p>
      </header>
    </div>
  );
}

export default App;
