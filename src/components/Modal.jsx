import {createPortal} from "react-dom";
import {useEffect, useRef} from "react";

export default function Modal({open, children, onClose}){
    const dialog = useRef();

    useEffect(() => {
        if(open){
            dialog.current.showModal()
        }else{
            dialog.current.close()
        }
    }, [open])

    return createPortal(
        <dialog
            className='modal'
            ref={dialog}
            onClose={onClose}
        >
            {children}
        </dialog>,
        document.getElementById('modal')
    )
}