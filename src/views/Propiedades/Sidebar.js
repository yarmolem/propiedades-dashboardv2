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
import FileUploaderBasic from '../../components/file-uploader/FileUploaderBasic'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [role, setRole] = useState('subscriber')
  const [plan, setPlan] = useState('basic')

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
      title="Nuevo Asesor"
      headerClassName="mb-1"
      contentClassName="pt-0"
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="nombreCompleto">
            Nombre Completo <span className="text-danger">*</span>
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
            Teléfono <span className="text-danger">*</span>
          </Label>
          <Input
            id="telefono"
            name="telefono"
            placeholder="999 999 999"
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['telefono'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="correo">
            Correo <span className="text-danger">*</span>
          </Label>
          <Input
            id="correo"
            type="email"
            name="correo"
            placeholder="john.doe@example.com"
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['email'] })}
          />
          <FormText color="muted">
            Puedes usar letras, numeros y simbolos.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="wsp">Whatsapp</Label>
          <Input
            id="wsp"
            name="wsp"
            placeholder="999 999 999"
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['wsp'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="facebook">Facebook</Label>
          <Input
            id="facebook"
            name="facebook"
            placeholder="@JohnDoe"
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['facebook'] })}
          />
        </FormGroup>

        <FileUploaderBasic />

        <Button type="submit" className="mr-1" color="primary">
          Submit
        </Button>
        <Button type="reset" color="secondary" outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewUsers
