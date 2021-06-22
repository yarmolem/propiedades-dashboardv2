import { useForm } from 'react-hook-form'
import {
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Card,
  CustomInput,
  Input
} from 'reactstrap'
import Select from 'react-select'
import { Plus } from 'react-feather'

import styles from './styles.module.css'
import Modal from './Modal'
import useDisclosure from '../../utility/hooks/useDisclosure'

const NuevoAsesor = ({ id }) => {
  const { open, onToggle } = useDisclosure()
  const { register, errors, handleSubmit } = useForm()

  return (
    <>
    <Modal {...{open, onToggle}} />
    <Card>
      <CardBody>
        <CardTitle tag="h4" className="mb-2">
          {id ? 'Editar' : 'Nuevo'} asesor
        </CardTitle>
        <Form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className={`col-12 col-xl-3 ${styles['place-items-center']}`}>
              <div onClick={onToggle} className={styles.addAvatar}>
                <Plus size={50} />
              </div>
            </div>
            <div className="col-12 col-xl-9">
              <div className="row">
                <FormGroup className="col-12 col-sm-6 ">
                  <Label for="nombres">Nombres</Label>
                  <Input
                    id="nombres"
                    name="nombres"
                    innerRef={register({ required: true })}
                    invalid={errors.nombres && true}
                    placeholder="John ..."
                  />
                </FormGroup>
                <FormGroup className="col-12 col-sm-6">
                  <Label for="apellidos">Apellidos</Label>
                  <Input
                    id="apellidos"
                    name="apellidos"
                    innerRef={register({ required: true })}
                    invalid={errors.apellidos && true}
                    placeholder="Doe ..."
                  />
                </FormGroup>
              </div>
              <div className="row">
                <FormGroup className="col-12 col-md">
                  <Label for="tipoDocumento">
                    Tipo de documento <span className="text-danger">*</span>
                  </Label>
                  <Select
                    id="tipoDocumento"
                    isClearable={false}
                    options={[
                      { value: '0', label: 'DNI' },
                      { value: '1', label: 'Pasaporte' },
                      { value: '2', label: 'Carnet de extranjeria' }
                    ]}
                    className="react-select"
                    classNamePrefix="select"
                    placeholder="documento"
                  />
                </FormGroup>
                <FormGroup className="col-12 col-md">
                  <Label for="nroDocumento">
                    Nro. documento <span className="text-danger">*</span>
                  </Label>
                  <Input
                    id="nroDocumento"
                    name="nroDocumento"
                    placeholder="00354868"
                    innerRef={register({ required: true })}
                  />
                </FormGroup>
                <FormGroup className="col-12 col-md">
                  <Label for="telefono">
                    Telefono <span className="text-danger">*</span>
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    placeholder="00354868"
                    innerRef={register({ required: true })}
                  />
                </FormGroup>
              </div>
              <div className="row">
                <FormGroup className="col-12 col-md">
                  <Label for="correo">
                    Correo <span className="text-danger">*</span>
                  </Label>
                  <Input
                    id="correo"
                    type="email"
                    name="correo"
                    placeholder="john.doe@example.com"
                    innerRef={register({ required: true })}
                  />
                </FormGroup>
                <FormGroup className="col-12 col-md">
                  <Label for="wsp">Whatsapp</Label>
                  <Input
                    id="wsp"
                    name="wsp"
                    placeholder="999 999 999"
                    innerRef={register({ required: true })}
                  />
                </FormGroup>
                <FormGroup className="col-12 col-md">
                  <Label for="facebook">Facebook</Label>
                  <Input
                    id="facebook"
                    name="facebook"
                    placeholder="@JohnDoe"
                    innerRef={register({ required: true })}
                  />
                </FormGroup>
              </div>
              <div className="row">
                <FormGroup className="col-12 col-md">
                  <Label for="departamento">
                    Departamento <span className="text-danger">*</span>
                  </Label>
                  <Select
                    id="departamento"
                    isClearable={false}
                    options={[{ value: '', label: 'Departamento' }]}
                    className="react-select"
                    classNamePrefix="select"
                    placeholder="Seleccione Departamento"
                  />
                </FormGroup>
                <FormGroup className="col-12 col-md">
                  <Label for="provincia">
                    Provincia <span className="text-danger">*</span>
                  </Label>
                  <Select
                    id="provincia"
                    isClearable={false}
                    options={[{ value: '', label: 'Provincia' }]}
                    className="react-select"
                    classNamePrefix="select"
                    placeholder="Seleccione Provincia"
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="distrito">
                    Distrito <span className="text-danger">*</span>
                  </Label>
                  <Select
                    id="distrito"
                    isClearable={false}
                    options={[{ value: '', label: 'Distrito' }]}
                    className="react-select"
                    classNamePrefix="select"
                    placeholder="Seleccione Distrito"
                  />
                </FormGroup>
              </div>
              <div className="d-flex my-2 mx-auto">
                <div className="d-flex">
                  <FormGroup className="col-12 d-flex flex-column justify-content-center">
                    <Label for="emailBasic">Estado</Label>
                    <CustomInput
                      type="switch"
                      id={`primary-${1}`}
                      name={`primary-${2}`}
                      inline
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>
          <FormGroup className="d-flex mb-0">
            <Button.Ripple
              // onClick={() => stepper.next()}
              className="mr-1"
              color="primary"
              type="submit"
            >
              Guardar
            </Button.Ripple>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
    </>
  )
}

export default NuevoAsesor
