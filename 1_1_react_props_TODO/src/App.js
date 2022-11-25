import './App.css';
import Section from './components/section/Section'

const todoData = [
  { todo: "Bug Grocery" },
  { todo: "Send Email" },
  { todo: "Finish Assignment" },
  { todo: "Write Blog" },
  { todo: "Bake Cake" },
];

function App() {
  return (
    <div className='App'>
      <h1>My ToDos</h1>
      {todoData.map((item) => {
        return <Section todo={item.todo} />
      })}
    </div>
  )
}

export default App;




