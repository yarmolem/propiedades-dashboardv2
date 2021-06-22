import React from 'react'
import Card from 'reactstrap/lib/Card'
import Button from 'reactstrap/lib/Button'
import CardBody from 'reactstrap/lib/CardBody'

import Modal from './Modal'
import useDisclosure from '../../utility/hooks/useDisclosure'

import IMGPlaceholder from '../../assets/images/pages/content-img-2.jpg'
import styles from './styles.module.css'

const ImagenesView = () => {
  const { open, onToggle } = useDisclosure()

  return (
    <>
      <Card>
        <CardBody>
          <div className={styles.container}>
            <div className="d-block d-sm-flex mb-1">
              <h1 className="flex-fill">Imagenes</h1>
              <Button onClick={onToggle} className="mr-1" color="primary">
                Agregar Imagenes
              </Button>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
              {Array(100)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className={styles.box}>
                    <img src={IMGPlaceholder} />
                  </div>
                ))}
            </div>
          </div>
        </CardBody>
      </Card>
      <Modal {...{ open, toggleModal: onToggle }} />
    </>
  )
}

export default ImagenesView
