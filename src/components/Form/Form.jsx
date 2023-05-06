import style from "./Form.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { switchModal } from "../../services/actions/form";

const Form = () => {
  const dispatch = useDispatch();
  // состояния
  const [tower, setTower] = useState("");
  const [comment, setComment] = useState("");
  const [floor, setFloor] = useState("");
  const [room, setRoom] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  const handleChange = (event) => {
    setTower(event.target.value);
  };
  const changeComment = (e) => {
    setComment(e.target.value);
  };

  const changeFloor = (e) => {
    setFloor(e.target.value);
  };

  const changeRoom = (e) => {
    setRoom(e.target.value);
  };

  const changeDate = (e) => {
    setDate(e.target.value);
  };

  const changeDuration = (e) => {
    setDuration(e.target.value);
  };

  // очистить поля
  function resetValue() {
    setTower("");
    setComment("");
    setFloor("");
    setRoom("");
    setDate("");
    setDuration("");
  }
  // отправить данные формы
  function submit(evt) {
    evt.preventDefault();

    const data = {
      tower: tower,
      floor: floor,
      room: room,
      date: date,
      duration: duration,
      comment: comment,
    };

    const json = JSON.stringify(data);

    console.log(json);
    resetValue();
    dispatch(switchModal(true));
  }

  return (
    <form className={style.form} onSubmit={submit}>
      <label className={style.el}>
        Выберите башню:
        <select
          className={style.select}
          value={tower}
          onChange={handleChange}
          required
        >
          <option value="">не выбрано</option>
          <option value="башня A">башня A</option>
          <option value="башня Б">башня Б</option>
        </select>
      </label>

      <label className={style.el}>
        Выберите этаж:
        <select
          className={style.select}
          value={floor}
          onChange={changeFloor}
          required
        >
          <option value="">не выбрано</option>
          <option value="3">3-й этаж</option>
          <option value="4">4-й этаж</option>
          <option value="5">5-й этаж</option>
          <option value="6">6-й этаж</option>
          <option value="7">7-й этаж</option>
          <option value="8">8-й этаж</option>
          <option value="9">9-й этаж</option>
          <option value="10">10-й этаж</option>
          <option value="11">11-й этаж</option>
          <option value="12">12-й этаж</option>
          <option value="13">13-й этаж</option>
          <option value="14">14-й этаж</option>
          <option value="15">15-й этаж</option>
          <option value="16">16-й этаж</option>
          <option value="17">17-й этаж</option>
          <option value="18">18-й этаж</option>
          <option value="19">19-й этаж</option>
          <option value="20">20-й этаж</option>
          <option value="21">21-й этаж</option>
          <option value="22">22-й этаж</option>
          <option value="23">23-й этаж</option>
          <option value="24">24-й этаж</option>
          <option value="25">25-й этаж</option>
          <option value="26">26-й этаж</option>
          <option value="27">27-й этаж</option>
        </select>
      </label>

      <label className={style.el}>
        Выберите переговорную комнату:
        <select
          className={style.select}
          value={room}
          onChange={changeRoom}
          required
        >
          <option value="">не выбрано</option>
          <option value="1">1-я комната </option>
          <option value="2">2-я комната</option>
          <option value="3">3-я комната</option>
          <option value="4">4-я комната</option>
          <option value="5">5-я комната</option>
          <option value="6">6-я комната</option>
          <option value="7">7-я комната</option>
          <option value="8">8-я комната</option>
          <option value="9">9-я комната</option>
          <option value="10">10-я комната</option>
        </select>
      </label>

      <label className={style.el}>
        Продолжительность бронирования:
        <select
          className={style.select}
          value={duration}
          onChange={changeDuration}
          required
        >
          <option value="">не выбрано</option>
          <option value="1">1 час </option>
          <option value="2">2 часа </option>
          <option value="3">3 часа </option>
          <option value="4">4 часа </option>
          <option value="5">5 часов </option>
          <option value="6">6 часов </option>
          <option value="7">7 часов </option>
          <option value="8">8 часов </option>
        </select>
      </label>

      <label className={style.el}>
        Выберите дату:
        <input
          className={style.input}
          type="datetime-local"
          onChange={changeDate}
          value={date}
          min="2023-01-07T00:00"
          max="2025-06-14T00:00"
          required
        ></input>
      </label>

      <label className={style.el}>
        Оставьте комментарий:
        <textarea
          className={style.input}
          value={comment}
          onChange={changeComment}
        ></textarea>
      </label>

      <div>
        <button className={style.deleteBtn} type="button" onClick={resetValue}>
          Очистить
        </button>
        <button className={style.sendBtn} type="submit">
          Отправить
        </button>
      </div>
    </form>
  );
};

export default Form;
