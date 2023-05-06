import "./App.css";
import { useSelector } from "react-redux";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";

function App() {
  const IsOpened = useSelector((store) => store.form.isModalOpen);

  return (
    <>
      {IsOpened && <Modal />}
      <Form />
    </>
  );
}

export default App;
