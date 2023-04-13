import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"
import { GlobalStyle } from "./styles/global"
import { ThemeContextProvider } from "./context/ThemeContext"


const LOCAL_STORAGE_KEY = 'savedTasks_key';

export interface TasksContextData {
  id: number
  description: string
  isCompleted: boolean
}

export function App() {
  const [tasks, setTasks] = useState<TasksContextData[]>([])

  function setLocalStorageTasks(newTasks: TasksContextData[]) {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function recoverSavedTasks() {
    const recovered = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recovered) {
      setTasks(JSON.parse(recovered))
    }
  }

  function newTask(taskDescription: string) {
    setLocalStorageTasks([
      ...tasks,
      {
        id: Math.floor(Date.now() * Math.random()),
        description: taskDescription,
        isCompleted: false,
      }
    ])
  }

  useEffect(() => {
    recoverSavedTasks()
  },[])

  function deleteTasksById(taskId: number) {
    const newTasks = tasks.filter((task) => task.id != taskId)

    setLocalStorageTasks(newTasks)
  }

  function toggleCompletedTask (taskId: number) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      } return task
    })
    setLocalStorageTasks(newTasks)
  }


  return (
    <div>
      <ThemeContextProvider>
      <GlobalStyle />
      <Header handleNewTask={newTask} />
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTasksById}
        onComplete= {toggleCompletedTask}
      />
      </ThemeContextProvider>
    </div>
  )
}
