import { MoreVertical, File, Trash } from 'react-feather'
import { Table, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Card, CardBody } from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useDisclosure from '../../utility/hooks/useDisclosure'
import Modal from './Modal'

// ** Styles
import 'animate.css/animate.css'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'

const MySwal = withReactContent(Swal)

const Clientes = () => {
  const { open, onToggle } = useDisclosure()

  // ** Handle Alert
  const HandleDelete = () => {
    return MySwal.fire({
      title: '¿Estas seguro?',
      text: 'No podras recuperar esta información!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ml-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          icon: 'success',
          title: 'Eliminado!',
          text: 'Mensaje eliminado.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      }
    })
  }

  return (
    <>
    <Modal {...{ open, onToggle }} />
    <Card>
      <CardBody>
        <h1>Clientes</h1>
      </CardBody>
      <Table responsive>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Correo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {Array(3).fill(null).map((_, i) => (
          <tr key={i}>
          <td>
            Joe Doe
          </td>
          <td>+51 999 999 999</td>
          <td>
            example@example.com
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={e => {
                  e.preventDefault()
                  HandleDelete()
                  }}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Borrar</span>
                </DropdownItem>
                <DropdownItem onClick={e => {
                  e.preventDefault()
                  onToggle()
                  }}>
                  <File className='mr-50' size={15} /> <span className='align-middle'>Ver mensaje</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        ))}
      </tbody>
    </Table>
    </Card>
    </>
  )
}

export default Clientes
