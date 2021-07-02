import React from 'react'
import Card from 'reactstrap/lib/Card'
import Button from 'reactstrap/lib/Button'
import CardBody from 'reactstrap/lib/CardBody'

import Modal from './Modal'
import useDisclosure from '../../utility/hooks/useDisclosure'

import IMGPlaceholder from '../../assets/images/pages/content-img-2.jpg'
import styles from './styles.module.css'
import { useGetImagenesQuery } from '../../generated/graphql'

const ImagenesView = () => {
  const { open, onToggle } = useDisclosure()
  const { loading, data } = useGetImagenesQuery()

  const imagenes = data ? data.GetImagenes : []
  console.log(imagenes)

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

            <div className="d-flex flex-wrap">
              {imagenes.map(({ id, url, descripcion }, i) => (
                <div key={id} className={styles.box}>
                  <img src={url} alt={descripcion} />
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
