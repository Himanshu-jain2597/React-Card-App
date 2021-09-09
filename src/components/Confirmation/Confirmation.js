import React from "react";
import {Button , Modal} from "react-bootstrap";

import { useSelector , useDispatch } from "react-redux";
import {hideConfirmation} from "../../actions/confirmation-action";

const Confirmation  = () => {
    const confirm = useSelector((state)=>state.confirm);
    const dispatch = useDispatch();


    const onClickYes = () => {
        confirm.onClickYes(confirm.args);
        dispatch(hideConfirmation());
    }

    const onClickNo = () => {
        dispatch(hideConfirmation());
    }

    return (
        <>
        <Modal show = {confirm.show} onHide = {onClickNo}>
            <Modal.Header>
                <Modal.Title>are u sure??</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                This will delete user
            </Modal.Body>
            <Modal.Footer>
                <Button variant = "secondary" onClick = {onClickNo}>
                    close
                </Button>
                <Button variant = "primary" onClick = {onClickYes}>yes</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Confirmation;