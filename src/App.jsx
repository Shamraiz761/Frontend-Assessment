import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import 'flowbite'

import AppRoutes from './routes'

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <AppRoutes />
    </DndProvider>
  )
}
