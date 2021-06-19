import { lazy } from 'react'

// ** Document title
const TemplateTitle = 'Dashboard'

// ** Default Route
const DefaultRoute = '/inicio'

// ** Merge Routes
const Routes = [
  {
    path: '/inicio',
    component: lazy(() => import('../../views/Inicio'))
  },
  {
    path: '/clientes',
    component: lazy(() => import('../../views/Clientes'))
  },
  {
    path: '/asesores',
    component: lazy(() => import('../../views/Asesores'))
  },
  {
    path: '/propiedades',
    component: lazy(() => import('../../views/Propiedades'))
  },
  {
    path: '/nueva-propiedad',
    component: lazy(() => import('../../views/NuevaPropiedad'))
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
