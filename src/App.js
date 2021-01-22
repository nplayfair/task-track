import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Have breakfast',
      day: 'Feb 5th 08:00',
      reminder: false
    },
    {
      id: 2,
      text: 'Feed cat',
      day: 'Feb 5th 08:30',
      reminder: true
    },
    {
      id: 3,
      text: 'Post letters',
      day: 'Feb 5th 10:00',
      reminder: true
    }
  ])

  // Delete task
  const deleteTask = (id) => {
    console.log('delete ', id)
  }

  return (
    <div className='container'>
      <Header title='Task Tracker'/>
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
