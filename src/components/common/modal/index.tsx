import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    overflowY: "auto",
};

interface Props {
    show: boolean,
    onClose: Function
    children: React.ReactNode
}

export default function BasicModal({ show, onClose, children }: Props) {

    return (
        <div>
            <Modal
                open={show}
                onClose={() => onClose()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{ cursor:"pointer" , marginLeft:"auto" , textAlign:"end" }}><CloseIcon onClick={()=>onClose()} /></div>
                    {children}
                </Box>
            </Modal>
        </div>
    );
}