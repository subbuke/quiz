
import './App.css';
import Calculater from './calculater/Calculater';
import Converter from './converter/Converter';
import File from './file/File';

function App() {
  return (
    <div className="text-3xl font-bold underline">
      <Calculater />
      <Converter />
      <File />
    </div>
  );
}

export default App;
