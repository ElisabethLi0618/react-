import './App.css';
import { Logo, Content } from './index1'


const A = () => {
  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  )
}

const Button = () => {
  return (
    <button>按钮</button>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Content />
        <A />
        <Button />
      </header>
    </div>
  );
}

export default App;
