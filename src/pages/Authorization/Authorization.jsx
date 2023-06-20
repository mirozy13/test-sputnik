import React, { useState } from "react";
import Modal from "../../components/Modal/Modal"
import Button from "../../components/AuthButton/AuthButton";
import AuthForm from "../../components/AuthForm/AuthForm";
import "./Authorization.css";

const Authorization = () => {
  const [modalACtive, setModalActive] = useState(false);

  return (
    <div className="Authorization">
      <Button text="Авторизоваться" onClick={() => setModalActive(true)}></Button>
      <Modal active={modalACtive} setActive={setModalActive}>
        <AuthForm setActive={setModalActive} />
      </Modal>
    </div>
  );
};

export default Authorization;
