import React from 'react'
import {
  SelectColumnsButton,
  // FilterButton,
  CreateButton,
  ExportButton,
  TopToolbar,
} from 'react-admin'

// ----------------------------------------

export const RowActions = ({ label = '', ...props }) => {
  const styles: any = { display: 'flex', flexDirection: 'row' }
  return (
    <div style={styles}>
      {React.Children.map(props.children, (c) => {
        if (c) return React.cloneElement(c, props)
      })}
    </div>
  )
}

// ----------------------------------------

export const ListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
    {/* <FilterButton /> */}
    <CreateButton />
    <ExportButton />
  </TopToolbar>
)
