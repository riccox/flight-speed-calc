import React from "react";
import { Modal, Icon, Button } from "rsuite";
export default function Disclaimers({ isShow, confirm }) {
  const cancel = () => {
    window.close();
  };
  return (
    <div className="">
      <Modal dialogClassName="relative top-40" backdrop="static" show={isShow} size="sm">
        <Modal.Header closeButton={false} onHide={cancel}>
          <Modal.Title>
            <Icon
              icon="remind"
              style={{
                color: "#ffb300",
                fontSize: 24,
              }}
            />{" "}
            您需要关注的！
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          您正在学习飞行?
          这个工具仅可用于学习航空知识或模拟飞行，不能在真实飞行中使用，其计算结果有有一定误差，请切记！
          如您使用本网站提供的数据用于不合法的行为或错误使用（例如在实际飞行中使用），其造成的一切后果将由您本人承担.
        </Modal.Body>
        <Modal.Footer>
          <Button appearance="primary" onClick={confirm}>
            好，我已知晓并同意
          </Button>
          <Button appearance="subtle" onClick={cancel}>
            不，我不想使用了
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
