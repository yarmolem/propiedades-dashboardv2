import React, { useState } from 'react'
import { Button } from 'reactstrap'
import Table from './Table'
import Sidebar from './Sidebar'

const Planos = ({ stepper }) => {
  const [open, setOpen] = useState(false)

  const toggleSidebar = () => setOpen(!open)

  return (
    <div>
      <div className="d-flex mb-1">
        <h1 className="flex-fill">Planos</h1>
        <Button.Ripple outline onClick={toggleSidebar} color="primary">
          Agregar Plano
        </Button.Ripple>
      </div>
      <Table />
      <Button.Ripple onClick={() => stepper.next()} color="primary">
        Siguiente
      </Button.Ripple>
      <Sidebar {...{ open, toggleSidebar }} />
    </div>
  )
}

export default Planos
