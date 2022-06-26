import { useToggle } from 'react-use';
import Portal from '../../components/Portal';
import { ModalPopUp } from '../../components/Portal/ModalPopUp';

// FIXME: isClose це ж буль правильно?? може onClose??
const Donar = () => {
  const [isModalOpen, handleModal] = useToggle(false);

  return (
    <div>
      <button onClick={handleModal} style={{ marginTop: '300px' }}>
        Click
      </button>
      {isModalOpen && (
        <Portal>
          <ModalPopUp width="900px" height="400px" isClose={handleModal} position="center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus earum cumque sunt, reiciendis
              quaerat fuga, impedit quibusdam dolorum recusandae consequatur tempore aspernatur ipsum consectetur
              accusamus dignissimos delectus porro unde.
            </p>
          </ModalPopUp>
        </Portal>
      )}
    </div>
  );
};

export default Donar;
