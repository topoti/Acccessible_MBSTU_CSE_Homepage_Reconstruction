import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChairmanPicture from "../MeassageAndNotice/Message/ChairmanPicture";
import Message from "../MeassageAndNotice/Message/Message";
import MessageSectionTitle from "../MeassageAndNotice/Message/MessageSectionTitle";
import NoticeBoard from "../MeassageAndNotice/NoticeBoard/NoticeBoard";

const MessageAndNotice = () => {
  return (
    <Container style={{ marginTop: "60px" }}>
      <Row className="justify-content-md-center message-notice-container">
        <Col lg={7}>
          <Row>
            <Col>
              <MessageSectionTitle />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={4} md={3} lg={4}>
              <ChairmanPicture />
            </Col>
            <Col xs={12} sm={8} md={9} lg={8}>
              <Message />
            </Col>
          </Row>
        </Col>
        <Col lg={5}>
          <NoticeBoard />
        </Col>
      </Row>
    </Container>
  );
};

export default MessageAndNotice;
