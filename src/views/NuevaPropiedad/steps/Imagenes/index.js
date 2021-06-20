import React, { useState } from 'react'
import { Plus } from 'react-feather'
import Modal from './Modal'

import IMGPlaceholder from '../../../../assets/images/pages/content-img-2.jpg'
import IMGPlaceholder2 from '../../../../assets/images/pages/content-img-3.jpg'

import './index.css'
import { Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'

const Imagenes = () => {
  const history = useHistory()
  const [open, setOpen] = useState(false)

  const toggleModal = () => setOpen(!open)

  return (
    <div className="image-container">
      <div className="d-flex mb-1">
        <h1 className="flex-fill">Imagenes</h1>
      </div>

      <div className="d-flex flex-wrap">
        <div className="image-box">
          <img src={IMGPlaceholder} />
        </div>
        <div className="image-box">
          <img src={IMGPlaceholder2} />
        </div>
        <div onClick={toggleModal} className="btn-unstyled image-box">
          <Plus size={50} />
        </div>
      </div>
      <Button.Ripple
        onClick={() => history.push('/propiedades')}
        className="propiedad-step"
        color="primary"
      >
        Crear propiedad
      </Button.Ripple>
      <Modal {...{ open, toggleModal }} />
    </div>
  )
}

export default Imagenes
