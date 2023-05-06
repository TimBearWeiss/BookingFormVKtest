import style from "./Modal.module.css";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { switchModal } from "../../services/actions/form";

const modalRootElement = document.getElementById("modal");

const Modal = () => {
  const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <div className={style.modal}>
      <div className={style.warningIcon}></div>
      <div className={style.textCell}>
        <p className={style.caption}>Форма отправлена</p>
        <p className={style.decription}>
          Спасибо, что пользуетесь нашим сайтом
        </p>
      </div>
      <button
        onClick={() => dispatch(switchModal(false))}
        type="button"
        className={style.closeIcon}
      ></button>
    </div>,
    modalRootElement
  );
};

export default Modal;
