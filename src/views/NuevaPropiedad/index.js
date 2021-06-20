// ** React Imports
import { Fragment, useEffect, useRef, useState } from 'react'

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

const Checkout = () => {
  // ** Ref & State
  const ref = useRef(null)
  const [stepper, setStepper] = useState(null)

  const steps = [
    {
      id: 'detalles',
      title: 'Detalles',
      subtitle: 'Informacion de la Propiedad',
      icon: <Home size={18} />,
      content: <Detalles stepper={stepper} />
    },
    {
      id: 'planos',
      title: 'Planos',
      subtitle: 'Planos de la propiedad',
      icon: <FilePlus size={18} />,
      content: <Planos stepper={stepper} />
    },
    {
      id: 'imagenes',
      title: 'Imagenes',
      subtitle: 'Imagenes de la propiedad',
      icon: <Image size={18} />,
      content: <Imagenes stepper={stepper} />
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

export default Checkout
