import PlayersList from './PlayersList';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <h1 style={{
                textAlign: 'center',
                fontSize: '2rem',
            }}>
                FIFA Player Cards
            </h1>
            <PlayersList />
        </div>
    );
};

export default App;

