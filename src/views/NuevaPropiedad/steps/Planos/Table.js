import { MoreVertical, Edit, Trash, Image } from 'react-feather'
import {
  Table as TableBasic,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'

import './styles.css'

const Table = () => {
  return (
    <>
      <TableBasic className="w-full" responsive>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descripcion Corta</th>
            <th>Descripcion Larga</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <tr key={i}>
                <td>
                  <span className="align-middle font-weight-bold">
                    Angular Project
                  </span>
                </td>
                <td>
                  <div className="desc-corta">
                    <p className="text-truncate">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perferendis, molestias dolorum libero reiciendis quo
                      fugiat in asperiores omnis nam tempora numquam, quas
                      commodi? Harum officia sunt ullam veritatis velit nostrum.
                    </p>
                  </div>
                </td>
                <td>
                  <div className="desc-completa">
                    <p className="text-truncate">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perferendis, molestias dolorum libero reiciendis quo
                      fugiat in asperiores omnis nam tempora numquam, quas
                      commodi? Harum officia sunt ullam veritatis velit nostrum.
                    </p>
                  </div>
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
                        href="/"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Edit className="mr-50" size={15} />{' '}
                        <span className="align-middle">Editar</span>
                      </DropdownItem>
                      <DropdownItem
                        href="/"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Trash className="mr-50" size={15} />{' '}
                        <span className="align-middle">Borrar</span>
                      </DropdownItem>
                      <DropdownItem
                        href="/"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Image className="mr-50" size={15} />{' '}
                        <span className="align-middle">Ver Imagenes</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
            ))}
        </tbody>
      </TableBasic>
    </>
  )
}

export default Table
