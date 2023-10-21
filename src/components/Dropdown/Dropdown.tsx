import React from 'react'

export type Item = {
  label: string
  value: string | number
}

type DropdownProps = {
  currentItem: Item
  options: Array<Item>
  onItemSelected: (item: Item) => void
} & React.HTMLAttributes<HTMLInputElement>

const Dropdown = ({
  currentItem,
  options,
  onItemSelected,
  className,
}: DropdownProps) => {
  return (
    <div className={`dropdown ${className}`}>
      <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {currentItem.label}
      </button>
      <ul className="dropdown-menu">
        {
          options.map(option => (
            <li key={option.value} onClick={() => onItemSelected(option)}>
              <span className="dropdown-item">{option.label}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Dropdown