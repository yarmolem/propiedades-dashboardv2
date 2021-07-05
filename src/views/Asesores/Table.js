// ** React Imports
import { Fragment, useState } from 'react'

// ** Store & Actions
import { useSelector } from 'react-redux'

// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { selectThemeColors } from '@utils'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  CustomInput,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table as TableBasic
} from 'reactstrap'
import Swal from 'sweetalert2'
import { CustomHeader } from './CustomHeader'
import withReactContent from 'sweetalert2-react-content'

// ** Styles
import 'animate.css/animate.css'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'
import { useHistory } from 'react-router-dom'
import {
  useGetAllUsersQuery,
  useDeleteUsuarioMutation
} from '../../generated/graphql'

import styles from './styles.module.css'

const MySwal = withReactContent(Swal)

const UsersList = () => {
  const history = useHistory()

  // QUERY para lista de usuarios
  const { data } = useGetAllUsersQuery({
    variables: { estado: '', tipoUsuario: 2 }
  })

  // Mutation para eliminar
  const [deleteUser] = useDeleteUsuarioMutation({
    onError: ({ graphQLErrors }) => console.log(graphQLErrors[0].message),
    onCompleted: (data) => console.log(data)
  })

  const users = data ? data.GetAllUsers : []

  // ** Handle Alert
  const HandleDelete = (user) => {
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
    }).then(async function (result) {
      if (result.value) {
        await deleteUser({ variables: { input: { ...user } } })
        MySwal.fire({
          icon: 'success',
          title: 'Eliminado!',
          text: 'El Asesor ha sido eliminado.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      }
    })
  }

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Filtro</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="4">
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className="react-select"
                classNamePrefix="select"
                // options={roleOptions}
                // value={currentRole}
                onChange={(data) => console.log(data)}
              />
            </Col>
            <Col className="my-md-0 my-1" md="4">
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className="react-select"
                classNamePrefix="select"
                // options={planOptions}
                // value={currentPlan}
                onChange={(data) => console.log(data)}
              />
            </Col>
            <Col md="4">
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className="react-select"
                classNamePrefix="select"
                // options={statusOptions}
                // value={currentStatus}
                onChange={(data) => console.log(data)}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <div className="mx-3">
          <CustomHeader />
        </div>
        <TableBasic className={styles['table']} responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombres</th>
              <th>Documento</th>
              <th>Email</th>
              <th className="text-center">Facebook</th>
              <th className="text-center">Whatsapp</th>
              <th className="text-center">Celular</th>
              <th className="text-center">Estado</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              /* eslint-disable */
              const documento =
                user.tipoDocumento === 0
                  ? 'DNI'
                  : user.tipoDocumento === 1
                  ? 'PAS'
                  : 'CE'
              /* eslint-enable */
              return (
                <tr key={user.userId}>
                  <td>
                    <span className="align-middle font-weight-bold">
                      #{user.userId}
                    </span>
                  </td>
                  <td>
                    <div>
                      {user.nombres} {user.apellidos}
                    </div>
                  </td>
                  <td>
                    {documento} - {user.nroDocumento}
                  </td>
                  <td>{user.email}</td>
                  <td className="text-center">@Diamanteros</td>
                  <td className="text-center">+51 999 999 999</td>
                  <td className="text-center">+51 999 999 999</td>
                  <td className="text-center">
                    <CustomInput
                      className="ml-2"
                      type="switch"
                      id={`secundary-${i}`}
                      name={`secundary-${i}`}
                      inline
                      defaultChecked
                    />
                  </td>
                  <td>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="icon-btn hide-arrow"
                        color="transparent"
                        size="sm"
                        caret
                      >
                        <MoreVertical size={15} />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          className="w-100"
                          onClick={(e) => {
                            e.preventDefault()
                            history.push(`/editar-asesor/${user.userId}`, user)
                          }}
                        >
                          <Edit className="mr-50" size={15} />{' '}
                          <span className="align-middle">Editar</span>
                        </DropdownItem>
                        <DropdownItem
                          className="w-100"
                          onClick={(e) => {
                            e.preventDefault()
                            HandleDelete(user)
                          }}
                        >
                          <Trash className="mr-50" size={15} />
                          <span className="align-middle">Borrar</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TableBasic>
      </Card>
    </Fragment>
  )
}

export default UsersList
