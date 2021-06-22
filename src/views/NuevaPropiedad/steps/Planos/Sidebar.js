// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { isObjEmpty } from '@utils'

// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'
import Modal from '../Imagenes/Modal'

import './styles.css'
import useDisclosure from '../../../../utility/hooks/useDisclosure'

const SidebarNuevosPlanos = ({ open, toggleSidebar }) => {
  const { open: isOpen, onToggle } = useDisclosure()
  // ** Vars
  const { register, errors, handleSubmit } = useForm()

  // ** Function to handle form submit
  const onSubmit = (values) => {
    if (isObjEmpty(errors)) {
      toggleSidebar()
    }
  }

  return (
    <Sidebar
      size="lg"
      open={open}
      title="Agregar plano"
      headerClassName="mb-1"
      contentClassName="pt-0"
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="nombreCompleto">
            Titulo <span className="text-danger">*</span>
          </Label>
          <Input
            id="nombreCompleto"
            name="nombreCompleto"
            placeholder="John Doe"
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['nombreCompleto'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="telefono">
            Descripcion corta <span className="text-danger">*</span>
          </Label>
          <Input
            id="telefono"
            type="textarea"
            name="telefono"
            placeholder="lorem*5"
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['telefono'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="correo">
            Descripcion <span className="text-danger">*</span>
          </Label>
          <Input
            id="correo"
            name="correo"
            type="textarea"
            placeholder="lorem*5"
            innerRef={register({ required: true })}
            className={`textarea-big ${classnames({
              'is-invalid': errors['email']
            })}`}
          />
        </FormGroup>
        <Button className="w-100" onClick={onToggle}>Agregar Imagen</Button>
        <Modal {...{open: isOpen, toggleModal: onToggle}} />

        <div className="mt-5 row">
          <Button type="submit" className="mx-1 col" color="primary">
            Guardar
          </Button>
          <Button type="reset" className="mx-1 col" color="secondary" outline onClick={toggleSidebar}>
            Cancelar
          </Button>
        </div>
      </Form>
    </Sidebar>
  )
}

export default SidebarNuevosPlanos
