import { useState } from 'react'
import {
  Button,
  Modal as ModalForm,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import { Check } from 'react-feather'
import IMGPlaceholder from '../../../../assets/images/pages/content-img-4.jpg'

import './index.css'

const Selected = () => {
  const [state, setstate] = useState(false)

  return (
    <button onClick={() => setstate(!state)}>
      {state && <Check size={15} />}
    </button>
  )
}

const Modal = ({ open, toggleModal }) => {
  return (
    <ModalForm
      scrollable
      isOpen={open}
      className="image-modal"
      toggle={() => toggleModal(!open)}
    >
      <ModalHeader toggle={() => toggleModal(!open)}>
        Selecciona las imagenes de la propiedad
      </ModalHeader>
      <ModalBody>
        <div className="d-flex flex-wrap">
          {Array(50)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="image-box pos-relative">
                <img src={IMGPlaceholder} />
                <Selected />
              </div>
            ))}
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => toggleModal(!open)}>
          Accept
        </Button>
      </ModalFooter>
    </ModalForm>
  )
}
export default Modal
