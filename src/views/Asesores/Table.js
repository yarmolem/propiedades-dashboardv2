// ** React Imports
import { Fragment, useState } from 'react'

// ** Store & Actions
import { useSelector } from 'react-redux'

// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import { selectThemeColors } from '@utils'
import { useApolloClient } from '@apollo/client'
import { MoreVertical, Edit, Trash } from 'react-feather'
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
  useDeleteUsuarioMutation,
  useUpdateUsuarioMutation,
  GetAllUsersDocument as GET_ALL_USERS
} from '../../generated/graphql'

import styles from './styles.module.css'

const MySwal = withReactContent(Swal)

const UsersList = () => {
  const history = useHistory()
  const cache = useApolloClient()

  // QUERY para lista de usuarios
  const { data, refetch } = useGetAllUsersQuery({
    variables: { estado: '', tipoUsuario: 2 }
  })

  // Mutation para actualizar
  const [updateUser] = useUpdateUsuarioMutation({
    onCompleted: ({ UpdateUsuario }) => console.log(UpdateUsuario)
  })

  // Mutation para eliminar
  const [deleteUser] = useDeleteUsuarioMutation({
    onError: ({ graphQLErrors }) => console.log(graphQLErrors),
    onCompleted: ({ DeleteUsuario }) => {
      if (DeleteUsuario === 'ELIMINADO') {
        console.log(DeleteUsuario)
        toast.success('Usuario eliminado con exito.')
      }
    }
  })

  const users = data ? data.GetAllUsers : []

  const handleChangeEstado = async (newUser, checked) => {
    cache.writeQuery({
      query: GET_ALL_USERS,
      variables: { tipoUsuario: 2, estado: '' },
      data: {
        GetAllUsers: users.map((user) => {
          /* eslint-disable*/
          return user.userId === newUser.userId
            ? { ...newUser, estado: checked ? 1 : 0 }
            : user
          /* eslint-enable */
        })
      }
    })

    const { Distrito, Provincia, Departamento, apiToken, foto, ...rest } =
      newUser
    const payload = {
      ...rest,
      estado: checked ? 1 : 0,
      foto: parseInt(foto.id),
      DistCodi: parseInt(Distrito.DistCodi),
      ProvCodi: parseInt(Provincia.ProvCodi),
      DeparCodi: parseInt(Departamento.DeparCodi)
    }

    console.log(payload)
    await updateUser({ variables: { input: payload } })
  }

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
        const {
          Provincia,
          Distrito,
          Departamento,
          Documento,
          tipoUsuario,
          apiToken,
          confirmPassword,
          ...rest
        } = user
        const payload = {
          ...rest,
          ProvCodi: parseInt(Provincia.ProvCodi),
          DistCodi: parseInt(Distrito.DistCodi),
          DeparCodi: parseInt(Departamento.DeparCodi)
          // tipoDocumento: parseInt(Documento.value),
          // tipoUsuario: parseInt(tipoUsuario.value)
        }
        const input = {
          ...rest,
          foto: user.foto.id
        }
        await deleteUser({
          variables: {
            input: { ...input }
          }
        })
        MySwal.fire({
          icon: 'success',
          title: 'Eliminado!',
          text: 'El Asesor ha sido eliminado.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
        refetch({ estado: '', tipoUsuario: 2 })
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
                  <td className="text-center">{user.facebook}</td>
                  <td className="text-center">{user.celular}</td>
                  <td className="text-center">
                    <CustomInput
                      // inline
                      name="estado"
                      type="switch"
                      id={user.userId}
                      // className="ml-2"
                      checked={user.estado}
                      onChange={({ target: { checked } }) => {
                        handleChangeEstado(user, checked)
                      }}
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
