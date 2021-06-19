import { Fragment } from 'react'
import { Check } from 'react-feather'
import { toast } from 'react-toastify'
import Avatar from '@components/avatar'
import { useForm } from 'react-hook-form'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CardSubtitle
} from 'reactstrap'

const SuccessToast = ({ data }) => {
  return (
    <Fragment>
      <div className="toastify-header">
        <div className="title-wrapper">
          <Avatar size="sm" color="success" icon={<Check size={12} />} />
          <h6 className="toast-title">Form Submitted!</h6>
        </div>
      </div>
      <div className="toastify-body">
        <ul className="list-unstyled mb-0">
          <li>
            <strong>firstName</strong>: {data.firstName}
          </li>
          <li>
            <strong>lastName</strong>: {data.lastName}
          </li>
          <li>
            <strong>email</strong>: {data.email}
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

const NuevaPropiedad = () => {
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data) => {
    toast.success(<SuccessToast data={data} />, { hideProgressBar: true })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Nueva Propiedad</CardTitle>
      </CardHeader>
      <CardBody>
        <CardSubtitle className="mb-1 font-weight-bold">Detalles</CardSubtitle>
        <Form onSubmit={() => handleSubmit(onSubmit)}>
          <div className="row">
            <FormGroup className="col">
              <Label for="firstNameBasic">Titulo</Label>
              <Input
                id="firstNameBasic"
                name="firstNameBasic"
                innerRef={register({ required: true })}
                invalid={errors.firstNameBasic && true}
                placeholder="Bruce"
              />
            </FormGroup>
            <FormGroup className="col">
              <Label for="lastNameBasic">Slug</Label>
              <Input
                id="lastNameBasic"
                name="lastNameBasic"
                innerRef={register({ required: true })}
                invalid={errors.lastNameBasic && true}
                placeholder="Wayne"
              />
            </FormGroup>
            <FormGroup className="col">
              <Label for="emailBasic">tipoContrato</Label>
              <Input
                type="email"
                name="emailBasic"
                id="emailBasic"
                innerRef={register({ required: true })}
                invalid={errors.emailBasic && true}
                placeholder="bruce.wayne@email.com"
              />
            </FormGroup>
          </div>

          <div className="row">
            <FormGroup className="col">
              <Label for="emailBasic">URL Video</Label>
              <Input
                type="email"
                name="emailBasic"
                id="emailBasic"
                innerRef={register({ required: true })}
                invalid={errors.emailBasic && true}
                placeholder="bruce.wayne@email.com"
              />
            </FormGroup>
            <FormGroup className="col">
              <Label for="emailBasic">Latitud</Label>
              <Input
                type="email"
                name="emailBasic"
                id="emailBasic"
                innerRef={register({ required: true })}
                invalid={errors.emailBasic && true}
                placeholder="bruce.wayne@email.com"
              />
            </FormGroup>
            <FormGroup className="col">
              <Label for="emailBasic">Longitud</Label>
              <Input
                type="email"
                name="emailBasic"
                id="emailBasic"
                innerRef={register({ required: true })}
                invalid={errors.emailBasic && true}
                placeholder="bruce.wayne@email.com"
              />
            </FormGroup>
          </div>
          <FormGroup className="d-flex mb-0">
            <Button.Ripple className="mr-1" color="primary" type="submit">
              Submit
            </Button.Ripple>
            <Button.Ripple outline color="secondary" type="reset">
              Reset
            </Button.Ripple>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}

export default NuevaPropiedad
