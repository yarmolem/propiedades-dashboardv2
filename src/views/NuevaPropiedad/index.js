// ** React Imports
import { Fragment, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
// ** Custom Components
import Wizard from '@components/wizard'
import BreadCrumbs from '@components/breadcrumbs'

// ** Steps
import Planos from './steps/Planos/index'
import Detalles from './steps/Detalles'
import Imagenes from './steps/Imagenes/index'

// ** Third Party Components
import { ShoppingCart, Home, Image, FilePlus } from 'react-feather'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'

const initialValues = {
  titulo: '',
  CONTRATO: {
    value: 0,
    label: ''
  },
  descripcionCorta: '',
  descripcionCompleta: '',
  video: '',
  estado: 1,
  destacado: 0,
  fotoPrincipal: 0,
  fotoSecundaria: 0,
  galeria: [],
  lat: '',
  log: '',
  cuartos: 0,
  banios: 0,
  pisos: 0,
  dimensiones: '',
  antiguedad: 0,
  areaConstruida: '',
  ambientes: '1',
  direccion: '',
  categoriaId: 0,
  ASESOR: {
    value: 0,
    label: ''
  },
  Prov: {
    value: 0,
    label: 'Seleccione provincia'
  },
  Dist: {
    value: 0,
    label: 'Seleccione distrito'
  },
  Depar: {
    value: 0,
    label: 'Seleccione departamento'
  }
}

const NuevaPropiedad = () => {
  // ** Ref & State
  const ref = useRef(null)
  const [stepper, setStepper] = useState(null)
  const [state, setState] = useState(initialValues)

  const steps = [
    {
      id: 'detalles',
      title: 'Detalles',
      subtitle: 'Informacion de la Propiedad',
      icon: <Home size={18} />,
      content: <Detalles {...{ stepper, state, setState }} />
    },

    {
      id: 'imagenes',
      title: 'Imagenes',
      subtitle: 'Imagenes de la propiedad',
      icon: <Image size={18} />,
      content: <Imagenes {...{ stepper, state, setState }} />
    },
    {
      id: 'planos',
      title: 'Planos',
      subtitle: 'Planos de la propiedad',
      icon: <FilePlus size={18} />,
      content: <Planos {...{ stepper, state, setState }} />
    }
  ]

  return (
    <Fragment>
      <Wizard
        ref={ref}
        steps={steps}
        className="checkout-tab-steps"
        instance={(el) => setStepper(el)}
        options={{
          linear: false
        }}
      />
    </Fragment>
  )
}

export default NuevaPropiedad
