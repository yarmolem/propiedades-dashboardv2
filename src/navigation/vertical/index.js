import { Home, Users, Circle, Image } from 'react-feather'

export default [
  {
    id: 'inicio',
    title: 'Inicio',
    icon: <Home size={20} />,
    navLink: '/inicio'
  },
  {
    header: 'Administración'
  },
  {
    id: 'imagenes',
    title: 'Imagenes',
    icon: <Image size={20} />,
    navLink: '/imagenes'
  },
  {
    id: 'clientes',
    title: 'Clientes',
    icon: <Users size={20} />,
    navLink: '/clientes'
  },
  {
    id: 'asesores',
    title: 'Asesores',
    icon: <Users size={20} />,
    children: [
      {
        id: 'Lista',
        title: 'Lista',
        icon: <Circle size={12} />,
        navLink: '/asesores'
      },
      {
        id: 'agregar',
        title: 'Agregar',
        icon: <Circle size={12} />,
        navLink: '/nuevo-asesor'
      }
    ]
  },
  {
    id: 'propiedades',
    title: 'Propiedades',
    icon: <Home size={20} />,
    children: [
      {
        id: 'Lista',
        title: 'Lista',
        icon: <Circle size={12} />,
        navLink: '/propiedades'
      },
      {
        id: 'Agregar',
        title: 'Agregar',
        icon: <Circle size={12} />,
        navLink: '/nueva-propiedad'
      }
    ]
  },
  {
    id: 'categorias',
    title: 'Categorias',
    icon: <Home size={20} />,
    navLink: '/categorias'
  }
]
