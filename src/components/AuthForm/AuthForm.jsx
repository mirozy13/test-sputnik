import React, { useState } from "react";
import mail from "../../assets/images/mail.svg";
import closeBtn from "../../assets/images/closeBtn.svg";
import Modal from "../Modal/Modal";
import "./AuthForm.css";

function AuthForm({ setActive }) {
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <>
      <div className="modal__header">
        <h1><span>Web </span>App</h1>
        <div className="modal__close" onClick={() => setActive(false)}>
          <img className="modal__close-img" src={closeBtn} alt="x" />
        </div>
      </div>
      <div className="modal__main">
        <span className="modal__title">Войдите в свой профиль</span>
        <form>
          <label htmlFor="login">Логин</label>
            <input className="modal__input "/>
          <label>Пароль</label>
            <input type="password" className="modal__input"/>
        </form>
        <button className="modal__button--login">Войти</button>
        <div className="modal__links">
  {[
    {
      label: "Я забыл пароль",
      modalTitle: "Восстановление пароля",
      isOpen: isForgotPasswordOpen,
      setOpen: setIsForgotPasswordOpen,
    },
    {
      label: "Регистрация",
      modalTitle: "Регистрация",
      isOpen: isRegisterOpen,
      setOpen: setIsRegisterOpen,
    },
  ].map(({ label, modalTitle, isOpen, setOpen }, index) => (
    <React.Fragment key={label}>
      <a className={`modal__links-${label.toLowerCase()}`} onClick={() => setOpen(true)} style={{marginBottom: `${index === 0 ? '10px' : '0px'}`}}>
        {label}
      </a>
      <Modal active={isOpen} setActive={setOpen}>
        <span className="modal__title">{modalTitle}</span>
        <img className="modal__close__modal-img" src={closeBtn} alt="x" onClick={() => setOpen(false)} />
      </Modal>
    </React.Fragment>
  ))}
</div>
  </div>
      <div className="modal__footer">
        <img className="modal__footer-img" src={mail} alt="x"/>
        <span className="title__footer">Написать в поддержку</span>
      </div>
    </>
  );
}
export default AuthForm;
