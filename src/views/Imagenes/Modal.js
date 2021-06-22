import { useState } from 'react'
import {
  Button,
  Modal as ModalForm,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Progress
} from 'reactstrap'
import { Check } from 'react-feather'
import IMGPlaceholder from '../../assets/images/pages/content-img-4.jpg'
import FileUploaderBasic from '../../components/file-uploader/FileUploaderBasic'

import styles from './styles.module.css'

const Modal = ({ open, toggleModal }) => {
  const [imgs, setImgs] = useState([])

  const handleCloseModal = () => {
    setImgs([])
    toggleModal()
  }

  return (
    <ModalForm
      scrollable
      isOpen={open}
      className={styles.modal}
      toggle={handleCloseModal}
    >
      <ModalHeader toggle={handleCloseModal}>
        Selecciona las imagenes de la propiedad
      </ModalHeader>
      <ModalBody>
        <h1 className="my-2">Sube tus imagenes</h1>
        <FileUploaderBasic {...{ setImgs, maxFiles: 6 }} />
        <div className="d-flex flex-wrap justify-content-center">
          {imgs.map((src, i) => (
            <div key={src + i} className="w-100 mb-1">
              {/* <img src={src} /> */}
              <p>
                <Check color="green" /> {src}
              </p>
              <Progress value="100" />
            </div>
          ))}
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" outline onClick={handleCloseModal}>
          Salir
        </Button>
      </ModalFooter>
    </ModalForm>
  )
}
export default Modal
