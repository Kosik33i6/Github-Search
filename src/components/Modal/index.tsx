import React from 'react';
import { useRef } from 'react';
import { Transition } from 'react-transition-group';
import { ModalProps } from './types';

import styles from './style.module.scss';

const { wrapper, modal, modalImg, modalUser, userText, layer, img, close } = styles;

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export const Modal = ({ image, isOpen, user, handleModal }: ModalProps) => {
  const nodeRef = useRef(null);
  const { src, alt } = image;

  return (
    <Transition in={isOpen} timeout={{ enter: 0, exit: 300 }} appear unmountOnExit>
      {(state) => (
        <div
          className={wrapper}
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state as keyof typeof transitionStyles],
          }}
        >
          <div className={modal}>
            <div className={modalImg}>
              <img className={img} src={src} alt={alt} />
            </div>
            <div className={modalUser}>
              <span className={userText}>{user}</span>
            </div>
            <div className={close} onClick={handleModal}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className={layer} onClick={handleModal} />
        </div>
      )}
    </Transition>
  );
};
