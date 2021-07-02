import { lazy } from 'react'

// ** Document title
const TemplateTitle = 'Dashboard'

// ** Default Route
const DefaultRoute = '/inicio'

// ** Merge Routes
const Routes = [
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/inicio',
    component: lazy(() => import('../../views/Inicio'))
  },
  {
    path: '/imagenes',
    component: lazy(() => import('../../views/Imagenes'))
  },
  {
    path: '/clientes',
    component: lazy(() => import('../../views/Clientes/index'))
  },
  {
    path: '/asesores',
    component: lazy(() => import('../../views/Asesores'))
  },
  {
    path: '/nuevo-asesor',
    component: lazy(() => import('../../views/NuevoAsesor'))
  },
  {
    path: '/editar-asesor/:id',
    component: lazy(() => import('../../views/EditarAsesor'))
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
    path: '/editar-propiedad/:id',
    component: lazy(() => import('../../views/NuevaPropiedad'))
  },
  {
    path: '/categorias',
    component: lazy(() => import('../../views/Categorys'))
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
