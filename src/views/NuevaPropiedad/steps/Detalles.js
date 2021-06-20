import { useForm } from 'react-hook-form'
import {
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  CustomInput,
  Input
} from 'reactstrap'
import Select from 'react-select'

const NuevaPropiedad = ({ stepper }) => {
  const { register, errors, handleSubmit } = useForm()

  const tipoContractOpts = [
    { value: 'venta', label: 'Venta' },
    { value: 'alquiler', label: 'Alquiler' }
  ]

  const asesorOpts = [{ value: '1', label: 'Victoria Diaz' }]

  return (
    <>
      <CardTitle tag="h4" className="mb-0">
        Nueva Propiedad
      </CardTitle>
      <CardBody>
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
            <Label for="firstNameBasic">Titulo</Label>
            <Input
              id="firstNameBasic"
              name="firstNameBasic"
              innerRef={register({ required: true })}
              invalid={errors.firstNameBasic && true}
              placeholder="Titulo"
            />
          </FormGroup>
          <div className="row">
            <FormGroup className="col">
              <Label for="emailBasic">Asesor</Label>
              <Select
                isClearable={false}
                options={asesorOpts}
                className="react-select"
                classNamePrefix="select"
                placeholder="Selecciona asesor"
                // theme={selectThemeColors}
              />
            </FormGroup>
            <FormGroup className="col">
              <Label for="lastNameBasic">Video de presentación</Label>
              <Input
                id="lastNameBasic"
                name="lastNameBasic"
                innerRef={register({ required: true })}
                invalid={errors.lastNameBasic && true}
                placeholder="www.youtube.com/embed/..."
              />
            </FormGroup>
          </div>
          <div className="row">
            <FormGroup className="col">
              <Label for="emailBasic">Baños</Label>
              <Input
                type="number"
                name="emailBasic"
                id="emailBasic"
                innerRef={register({ required: true })}
                invalid={errors.emailBasic && true}
                placeholder="0"
              />
            </FormGroup>
            <FormGroup className="col">
              <Label for="emailBasic">Cuartos</Label>
              <Input
                type="number"
                name="emailBasic"
                id="emailBasic"
                innerRef={register({ required: true })}
                invalid={errors.emailBasic && true}
                placeholder="0"
              />
            </FormGroup>
            <FormGroup className="col">
              <Label for="emailBasic">Pisos</Label>
              <Input
                type="number"
                name="emailBasic"
                id="emailBasic"
                innerRef={register({ required: true })}
                invalid={errors.emailBasic && true}
                placeholder="1"
              />
            </FormGroup>
            <FormGroup className="col">
              <Label for="emailBasic">Dimensiones</Label>
              <Input
                type="number"
                name="emailBasic"
                id="emailBasic"
                innerRef={register({ required: true })}
                invalid={errors.emailBasic && true}
                placeholder="5x70x10"
              />
            </FormGroup>
            <FormGroup className="col">
              <Label for="emailBasic">Area Construida</Label>
              <Input
                type="number"
                name="emailBasic"
                id="emailBasic"
                innerRef={register({ required: true })}
                invalid={errors.emailBasic && true}
                placeholder="70m2"
              />
            </FormGroup>
            <FormGroup className="col">
              <Label for="emailBasic">Antiguedad</Label>
              <Input
                type="number"
                name="emailBasic"
                id="emailBasic"
                innerRef={register({ required: true })}
                invalid={errors.emailBasic && true}
                placeholder="1998"
              />
            </FormGroup>
          </div>
          <div className="row">
            <FormGroup className="col">
              <Label for="emailBasic">Tipo de Contrato</Label>
              <Select
                isClearable={false}
                options={tipoContractOpts}
                className="react-select"
                classNamePrefix="select"
                placeholder="tipo de contrato"
                // theme={selectThemeColors}
              />
            </FormGroup>
            <FormGroup className="col">
              <Label for="emailBasic">Dirección</Label>
              <Input
                type="text"
                name="emailBasic"
                id="emailBasic"
                innerRef={register({ required: true })}
                invalid={errors.emailBasic && true}
                placeholder="Av. Coronel Portillo #1076"
              />
            </FormGroup>
            <FormGroup className="col">
              <Label for="emailBasic">Latitud</Label>
              <Input
                type="number"
                name="emailBasic"
                id="emailBasic"
                innerRef={register({ required: true })}
                invalid={errors.emailBasic && true}
                placeholder="-12.1864"
              />
            </FormGroup>
            <FormGroup className="col">
              <Label for="emailBasic">Longitud</Label>
              <Input
                type="number"
                name="emailBasic"
                id="emailBasic"
                innerRef={register({ required: true })}
                invalid={errors.emailBasic && true}
                placeholder="15.846"
              />
            </FormGroup>
          </div>
          <div className="row">
            <FormGroup className="col">
              <Label for="emailBasic">Breve descripción</Label>
              <Input
                type="textarea"
                name="emailBasic"
                id="emailBasic"
                innerRef={register({ required: true })}
                invalid={errors.emailBasic && true}
                placeholder="....."
              />
            </FormGroup>
            <FormGroup className="col-7">
              <Label for="emailBasic">Descripción</Label>
              <Input
                type="textarea"
                name="emailBasic"
                id="emailBasic"
                innerRef={register({ required: true })}
                invalid={errors.emailBasic && true}
                placeholder="....."
              />
            </FormGroup>
          </div>
          <div className="d-flex w-25 ml-2 mb-2">
            <FormGroup tag="fieldset" className="mr-2" row>
              <legend className="col-form-label">Estado</legend>
              <CustomInput
                className=".custom-control-info"
                type="switch"
                id={`secundary-${1}`}
                name={`secundary-${2}`}
                inline
              />
            </FormGroup>
            <FormGroup tag="fieldset" row>
              <legend className="col-form-label">¿Deseas Destacar?</legend>
              <CustomInput
                className="ml-3"
                type="switch"
                id={`secundary-${1}`}
                name={`secundary-${2}`}
                inline
              />
            </FormGroup>
          </div>
          <FormGroup className="d-flex mb-0">
            <Button.Ripple
              onClick={() => stepper.next()}
              className="mr-1"
              color="primary"
              type="submit"
            >
              Siguiente
            </Button.Ripple>
          </FormGroup>
        </Form>
      </CardBody>
    </>
  )
}

export default NuevaPropiedad
