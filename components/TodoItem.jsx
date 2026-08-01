import { useState } from 'react'

export function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(todo.text)

  function commitEdit() {
    const trimmed = draft.trim()
    if (trimmed && trimmed !== todo.text) {
      onEdit(todo.id, trimmed)
    } else {
      setDraft(todo.text)
    }
    setIsEditing(false)
  }

  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
      <label className="todo-checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className="checkmark" />
      </label>

      {isEditing ? (
        <input
          className="todo-edit-input"
          type="text"
          value={draft}
          autoFocus
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commitEdit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') commitEdit()
            if (e.key === 'Escape') {
              setDraft(todo.text)
              setIsEditing(false)
            }
          }}
        />
      ) : (
        <span className="todo-text" onDoubleClick={() => setIsEditing(true)}>
          {todo.text}
        </span>
      )}

      <button
        type="button"
        className="todo-delete"
        aria-label="削除"
        onClick={() => onDelete(todo.id)}
      >
        ×
      </button>
    </li>
  )
}
