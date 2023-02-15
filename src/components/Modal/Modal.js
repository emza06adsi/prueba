import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  max-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const VideoPlayer = styled.video`
  max-width: 100%;
  max-height: 100%;
`;

const Modal = (props) => {
  return (
    <>
      {props.isOpen && (
        <ModalContainer>
          <ModalContent>
            <CloseButton onClick={props.closeModal}>X</CloseButton>
            <VideoPlayer controls autoPlay>
              <source
                src="https://unpkg.com/big-buck-bunny-1080p@0.0.6/video.mp4"
                type="video/mp4"
              />
            </VideoPlayer>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

Modal.propTypes = {};

Modal.defaultProps = {};

export default Modal;
