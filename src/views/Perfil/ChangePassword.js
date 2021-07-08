import { Formik } from 'formik'
import { toast } from 'react-toastify'
import { Label, Input, Button, FormGroup } from 'reactstrap'
import { useCambiarContrasenaMutation as useCambiarPass } from '../../generated/graphql'

const ChangePassword = () => {
  const [cambiarPass] = useCambiarPass({
    onError: ({ graphQLErrors }) => {
      console.log(graphQLErrors)
      const error = graphQLErrors[0].debugMessage
      if (error === 'CONTRASEÑA_INCORRECTA') {
        toast.error('Contraseña ingresada es invalida.')
      }
    },
    onCompleted: ({ CambiarContrasena }) => {
      if (CambiarContrasena) {
        toast.success('Contraseña modificada con exito ¡¡')
      }
    }
  })

  const onSubmit = async (values, { resetForm }) => {
    await cambiarPass({
      variables: { input: values }
    })

    resetForm()
  }

  return (
    <div className="row">
      <Formik
        onSubmit={onSubmit}
        initialValues={{ passwordNuevo: '', passwordAntiguo: '' }}
      >
        {({ values, handleChange, handleBlur, submitForm }) => (
          <>
            <FormGroup className="col-12 col-sm-6">
              <Label for="password">Contraseña Anterior</Label>
              <Input
                id="password"
                type="password"
                name="passwordAntiguo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.passwordAntiguo}
              />
            </FormGroup>
            <FormGroup className="col-12 col-sm-6">
              <Label for="confirmPassword">Nueva Contraseña</Label>
              <Input
                type="password"
                id="confirmPassword"
                name="passwordNuevo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.passwordNuevo}
              />
            </FormGroup>
            <div className="col-12 col-sm-4 align-self-center">
              <Button
                outline
                type="button"
                color="primary"
                onClick={submitForm}
              >
                Cambiar contraseña
              </Button>
            </div>
          </>
        )}
      </Formik>
    </div>
  )
}

export default ChangePassword
