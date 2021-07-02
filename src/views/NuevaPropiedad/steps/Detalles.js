import { useForm } from 'react-hook-form'
import {
  CardTitle,
  CardBody,
  Button,
  Form,
  Input,
  FormGroup,
  Label,
  Col,
  CustomInput
} from 'reactstrap'
import Select from 'react-select'

const NuevaPropiedad = ({ stepper, id }) => {
  const { register, errors, handleSubmit } = useForm()

  const tipoContractOpts = [
    { value: 'venta', label: 'Venta' },
    { value: 'alquiler', label: 'Alquiler' }
  ]

  const asesorOpts = [{ value: '1', label: 'Victoria Diaz' }]

  return (
    <>
      <CardTitle tag="h4" className="mb-0">
        {id ? 'Editar' : 'Nueva'} Propiedad
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
            <FormGroup className="col-12 col-sm-6 ">
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
            <FormGroup className="col-12 col-sm-6 ">
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
            <FormGroup className="col col-md-3 col-lg-2">
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
            <FormGroup className="col col-md-3 col-lg-2">
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
          </div>
          <div className="row">
            <FormGroup className="col-12 col-sm-4">
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
            <FormGroup className="col-12 col-sm-4">
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
            <FormGroup className="col-12 col-xl-5">
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
            <FormGroup className="col-12 col-xl-7">
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
          <div className="d-flex mb-2 mx-auto">
            <div className="d-flex">
              <FormGroup className="col-4 d-flex flex-column justify-content-center">
                <Label for="emailBasic">Estado</Label>
                <CustomInput
                  type="switch"
                  id={`primary-${1}`}
                  name={`primary-${2}`}
                  inline
                />
              </FormGroup>
              <FormGroup className="d-flex flex-column justify-content-center">
                <Label for="emailBasic">¿Deseas destacar?</Label>
                <CustomInput
                  className="ml-3"
                  type="switch"
                  id={`secundary-${3}`}
                  name={`secundary-${4}`}
                  inline
                />
              </FormGroup>
            </div>
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
