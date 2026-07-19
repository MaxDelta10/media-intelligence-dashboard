import MediaDashboard from './components/MediaDashboard';
import './index.css';

function App() {
  return (
    <div className="App">
      <MediaDashboard onBack={() => {
        alert("This dashboard is running in standalone mode.");
      }} />
    </div>
  );
}

export default App;
