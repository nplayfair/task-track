import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  // State
  const [showAddTask, setShowAddTask] = useState(false)
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

  // Add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    // Set tasks to the original task list, minus the filtered out one
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    // If the id passed in is the current task id, spread the task across but invert the reminder property
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      <Header title='Task Tracker' 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
        />
      {/* if showAddTask is true then show the form */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 
        'No tasks'}
    </div>
  );
}

export default App;
