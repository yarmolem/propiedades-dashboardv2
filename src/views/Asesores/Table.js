// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Invoice List Sidebar
import Sidebar from './Sidebar'

// ** Columns
import { columns } from './columns'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import { MoreVertical, Edit, Trash, Image } from 'react-feather'
import { selectThemeColors } from '@utils'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Input,
  Row,
  Col,
  Label,
  CustomInput,
  Button,
  Badge,
  Tooltip,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table as TableBasic
} from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// ** Styles
import 'animate.css/animate.css'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'
import styles from './styles.module.css'
import { useHistory } from 'react-router-dom'

const MySwal = withReactContent(Swal)

// ** Table Header
const CustomHeader = ({
  toggleSidebar,
  handlePerPage,
  rowsPerPage,
  handleFilter,
  searchTerm
}) => {
  const history = useHistory()

  return (
    <div className="invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75">
      <Row>
        <Col xl="6" className="d-flex align-items-center p-0">
          <div className="d-flex align-items-center w-100">
            <Label for="rows-per-page">Mostrar</Label>
            <CustomInput
              className="form-control mx-50"
              type="select"
              id="rows-per-page"
              value={rowsPerPage}
              onChange={handlePerPage}
              style={{
                width: '5rem',
                padding: '0 0.8rem',
                backgroundPosition:
                  'calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0'
              }}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </CustomInput>
            <Label for="rows-per-page">elementos</Label>
          </div>
        </Col>
        <Col
          xl="6"
          className="d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1"
        >
          <div className="d-flex align-items-center mb-sm-0 mb-1 mr-1">
            <Label className="mb-0" for="search-invoice">
              Buscar:
            </Label>
            <Input
              id="search-invoice"
              className="ml-50 w-100"
              type="text"
              value={searchTerm}
              onChange={(e) => handleFilter(e.target.value)}
            />
          </div>
          <Button.Ripple
            outline
            color="primary"
            onClick={() => history.push('/nuevo-asesor')}
          >
            Nuevo asesor
          </Button.Ripple>
        </Col>
      </Row>
    </div>
  )
}

const UsersList = () => {
  const history = useHistory()
  // ** Store Vars
  const store = useSelector((state) => state.users)

  // ** States
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentRole, setCurrentRole] = useState({
    value: '',
    label: 'Departamento'
  })
  const [currentPlan, setCurrentPlan] = useState({
    value: '',
    label: 'Provincia'
  })
  const [currentStatus, setCurrentStatus] = useState({
    value: '',
    label: 'Distrito'
  })

  // ** Function to toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  // ** User filter options
  const roleOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'author', label: 'Author' },
    { value: 'editor', label: 'Editor' },
    { value: 'maintainer', label: 'Maintainer' },
    { value: 'subscriber', label: 'Subscriber' }
  ]

  const planOptions = [
    { value: 'basic', label: 'Basic' },
    { value: 'company', label: 'Company' },
    { value: 'enterprise', label: 'Enterprise' },
    { value: 'team', label: 'Team' }
  ]

  const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' }
  ]

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
          text: 'El Asesor ha sido eliminado.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      }
    })
  }

  // ** Custom Pagination
  const CustomPagination = () => {
    const count = Number(Math.ceil(3 / rowsPerPage))

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        pageCount={count || 1}
        activeClassName="active"
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={(page) => console.log(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={
          'pagination react-paginate justify-content-end my-2 pr-1'
        }
      />
    )
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
                options={roleOptions}
                value={currentRole}
                onChange={(data) => console.log(data)}
              />
            </Col>
            <Col className="my-md-0 my-1" md="4">
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className="react-select"
                classNamePrefix="select"
                options={planOptions}
                value={currentPlan}
                onChange={(data) => console.log(data)}
              />
            </Col>
            <Col md="4">
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className="react-select"
                classNamePrefix="select"
                options={statusOptions}
                value={currentStatus}
                onChange={(data) => console.log(data)}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <div className="mx-3">
          <CustomHeader {...{ toggleSidebar }} />
        </div>
        <TableBasic className="w-full" responsive>
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
            {Array(3)
              .fill(null)
              .map((_, i) => (
                <tr key={i}>
                  <td>
                    <span className="align-middle font-weight-bold">
                      #{i + 1}
                    </span>
                  </td>
                  <td>
                    <div>Victoria Diaz</div>
                  </td>
                  <td>DNI - 003546846</td>
                  <td>example@example.com</td>
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
                            history.push(`/editar-asesor/${i}`)
                          }}
                        >
                          <Edit className="mr-50" size={15} />{' '}
                          <span className="align-middle">Editar</span>
                        </DropdownItem>
                        <DropdownItem
                          className="w-100"
                          onClick={(e) => {
                            e.preventDefault()
                            HandleDelete()
                          }}
                        >
                          <Trash className="mr-50" size={15} />
                          <span className="align-middle">Borrar</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
              ))}
          </tbody>
        </TableBasic>
      </Card>
    </Fragment>
  )
}

export default UsersList
