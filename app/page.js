'use client'

import { useMemo, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { FilterBar } from '../components/FilterBar'

export default function Home() {
  const [todos, setTodos] = useLocalStorage('todos', [])
  const [filter, setFilter] = useState('all')

  function addTodo(text) {
    setTodos((prev) => [
      { id: crypto.randomUUID(), text, completed: false },
      ...prev,
    ])
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  function editTodo(id, text) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    )
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }

  const filteredTodos = useMemo(() => {
    if (filter === 'active') return todos.filter((t) => !t.completed)
    if (filter === 'completed') return todos.filter((t) => t.completed)
    return todos
  }, [todos, filter])

  const remaining = todos.filter((t) => !t.completed).length
  const hasCompleted = todos.some((t) => t.completed)

  return (
    <div className="app">
      <h1>TODO</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
      {todos.length > 0 && (
        <FilterBar
          filter={filter}
          onFilterChange={setFilter}
          remaining={remaining}
          onClearCompleted={clearCompleted}
          hasCompleted={hasCompleted}
        />
      )}
    </div>
  )
}
