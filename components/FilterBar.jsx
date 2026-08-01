const FILTERS = [
  { key: 'all', label: 'すべて' },
  { key: 'active', label: '未完了' },
  { key: 'completed', label: '完了済み' },
]

export function FilterBar({ filter, onFilterChange, remaining, onClearCompleted, hasCompleted }) {
  return (
    <div className="filter-bar">
      <span className="remaining-count">残り {remaining} 件</span>
      <div className="filter-buttons">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            className={filter === key ? 'active' : ''}
            onClick={() => onFilterChange(key)}
          >
            {label}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="clear-completed"
        onClick={onClearCompleted}
        disabled={!hasCompleted}
      >
        完了済みを削除
      </button>
    </div>
  )
}
