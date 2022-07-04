import './App.css';
import { Tombol } from './Tombol';

function App() {
  const name = ['Edward','Maulana','Sitompul'];
  return (
    <div className="App">
      <Tombol nama = {name[0]}/>
      <Tombol nama = {name[1]}/>
      <Tombol nama = {name[2]}/>
    </div>
  );
}

export default App;
