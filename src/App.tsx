import { useState } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"
import { GlobalStyle } from "./styles/global"

export interface TasksContextData {
  id: string /* number */
  description: string
  isCompleted: boolean
}

export function App() {
  const [tasks, setTasks] = useState<TasksContextData[]>([
    {
      id: 'teste',
      description: "string",
      isCompleted: false,
    }
  ])

  function newTask(taskDescription: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(), //ver um gerador de id melhor
        description: taskDescription,
        isCompleted: false,
      }
    ])
  }

  

  return (
    <div>
      <GlobalStyle />
      <Header handleNewTask={newTask} />
      <Tasks 
        tasks={tasks}
      />
    </div>
  )
}
