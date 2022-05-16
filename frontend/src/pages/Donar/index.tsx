import Portal from '../../components/Portal';
import { ModalPopUp } from '../../components/Portal/ModalPopUp';
import { useModalPortal } from '../../hooks';

const Donar = () => {
  const [isModalOpen, handleModal] = useModalPortal();

  return (
    <div>
      <button onClick={handleModal} style={{ marginTop: '300px' }}>
        {' '}
        Click
      </button>
      {isModalOpen && (
        <Portal>
          <ModalPopUp isClose={handleModal}>HELLO</ModalPopUp>
        </Portal>
      )}
    </div>
  );
};

export default Donar;
