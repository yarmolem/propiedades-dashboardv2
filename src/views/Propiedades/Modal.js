import { useState } from 'react'
import {
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Modal as ModalForm
} from 'reactstrap'
import Carrousel from './Carrousel'

import styles from './styles.module.css'

const Modal = ({ open, onToggle, id }) => {
  const handleCloseModal = () => {
    onToggle()
  }

  return (
    <ModalForm
      // scrollable
      isOpen={open}
      className={styles.modal}
      toggle={handleCloseModal}
    >
      <ModalHeader toggle={handleCloseModal}>
        Imagenes de la propiedad #{id}
      </ModalHeader>
      <ModalBody>
        <Carrousel />
      </ModalBody>
      {/* <ModalFooter>
        <Button color="danger" outline onClick={handleCloseModal}>
          Salir
        </Button>
      </ModalFooter> */}
    </ModalForm>
  )
}
export default Modal
