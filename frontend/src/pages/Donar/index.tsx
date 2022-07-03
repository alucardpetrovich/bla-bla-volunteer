import { useToggle } from 'react-use';
import Portal from '../../components/modules/Portal';
import { ModalPopUp } from '../../components/modules/Portal/ModalPopUp';

// FIXME: isClose це ж буль правильно?? може onClose??
const Donar = () => {
  const [isModalOpen, handleModal] = useToggle(false);

  return (
    <div style={{ background: 'red' }}>
      <button onClick={handleModal} style={{ marginTop: '300px' }}>
        Click
      </button>
      <p>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus earum cumque sunt, reiciendis quaerat
        fuga, impedit quibusdam dolorum recusandae consequatur tempore aspernatur ipsum consectetur accusamus
        dignissimos delectus porro unde.
      </p>
      <p>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus earum cumque sunt, reiciendis quaerat
        fuga, impedit quibusdam dolorum recusandae consequatur tempore aspernatur ipsum consectetur accusamus
        dignissimos delectus porro unde.
      </p>
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
