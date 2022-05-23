import authorizationAPI from '../../api/Auth/Auth';

const HomePage = () => {
  //! remove, just for test auth & headers with token
  const handExampleRequest = () => {
    authorizationAPI.exampleRequest();
  };
  return (
    <div>
      <button onClick={handExampleRequest}>example request</button>
    </div>
  );
};
export default HomePage;
