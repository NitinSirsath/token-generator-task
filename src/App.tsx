
import './App.css'
import InputField from './components/InputField'

function App() {


  return (
    <div className="App">
    <h1>Token Generator Application</h1>
    <div>
    <InputField label='Number of blue tokens'/>
    <InputField label='Number of red tokens'/>
    </div>
    </div>
  )
}

export default App
