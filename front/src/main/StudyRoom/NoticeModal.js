import React, { useState } from 'react';
import axios from 'axios';
import StudyRoomAxios from '../../token/tokenAxios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

function MyButton() {
  const [show, setShow] = useState(false);
  const [notice, setNotice] = useState({
    post_no: '',
    user_no: '',
    notice_title: '',
    notice_content: '',
    notice_password: '',
  });
  const handleInputChange = (e) => {
    //e 자리값 밑에 target
    const { name, value } = e.target;
    setNotice((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = async () => {
    try {
      const response = await StudyRoomAxios.post(
        `/studyRoom/create/StudyNoticeMoment/${notice.post_no}`
      );
    } catch (error) {
      console.error('데이터 저장 불가', error);
    }
  };

  return (
    <div>
      <Button className="btn" variant="outline-primary" onClick={handleShow}>
        공지글+
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            공지글 제목 :
            <input
              type="text"
              name="notice_title"
              value={notice.notice_title}
              onChange={handleInputChange}
              required
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {' '}
          내용 :
          <input
            className="textInput"
            type="text"
            name="notice_content"
            value={notice.notice_content}
            onChange={handleInputChange}
            required
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="." variant="secondary" onClick={handleSave}>
            저장
          </Button>
          <Button
            className="btn_close"
            variant="secondary"
            onClick={handleClose}
          >
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default MyButton;
