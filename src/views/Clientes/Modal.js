import {
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Modal as ModalForm
} from 'reactstrap'

const Modal = ({ open, onToggle }) => {
  const handleCloseModal = () => onToggle()

  return (
    <ModalForm
      scrollable
      isOpen={open}
      toggle={handleCloseModal}
    >
      <ModalHeader toggle={handleCloseModal}>
        Mensaje
      </ModalHeader>
      <ModalBody>
        <p><strong>Nombre:</strong> Joe Doe</p>
        <p><strong>Telefono:</strong> <a href="tel:+51999999999">999 999 999</a></p>
        <p><strong>Correo:</strong> <a href="mailto:example@example.com">example@example.com</a> </p>

        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas suscipit, voluptatem omnis corrupti sint, cumque commodi numquam incidunt dolor consequatur totam nam quo voluptate, eos ab sit quod veniam. Sapiente?
        Delectus nesciunt culpa itaque aperiam perferendis dolorum ratione mollitia debitis dolores recusandae aliquid voluptatum, nostrum in cum earum voluptatem minima sint commodi a veniam sunt dicta dolor? Nihil, ut quam!
        Neque facilis sequi quibusdam harum doloremque ipsa aspernatur cupiditate quas in cum debitis tenetur, eligendi similique maiores doloribus exercitationem labore vitae nobis assumenda dolores mollitia. Esse distinctio maxime placeat minus?
        Atque dolores laudantium incidunt consectetur aliquam ratione saepe nemo assumenda. Similique suscipit fuga, itaque est cumque ullam illum obcaecati vel minus pariatur assumenda nobis exercitationem esse! Optio nobis eius dolore.
        Quibusdam laboriosam omnis nobis tempore ex, sequi sit dolores mollitia. Veniam natus ducimus animi quod rerum ullam maiores voluptatibus. Nisi, eveniet? Voluptatum placeat distinctio numquam accusantium quidem facilis, illum velit?
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" outline onClick={handleCloseModal}>
          Salir
        </Button>
      </ModalFooter>
    </ModalForm>
  )
}
export default Modal
