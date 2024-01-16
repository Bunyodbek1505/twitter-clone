import { ReactElement } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { X } from "lucide-react";

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    body?: ReactElement;
    footer?: ReactElement
    step?: number;
    totalSteps?: number;
    // title?: string;
}



const Modal = ( { isOpen, onClose, body, footer, step, totalSteps }: ModalProps ) => {


    return (
        <Dialog open = {isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-black p-1">
                <div className="flex items-center gap-6">
                <button className='p-1 bottom-0 text-white hover:opacity-70 transition w-fit'>
                    <X size={28} onClick={onClose}/>
                    </button>
                    {step && totalSteps && (
                        <div className="text-xl font-bold">Step {step} of {totalSteps}</div>
                    )}
                </div>
                {/* <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader> */}
                <div className="mt-4">{body}</div>
                {footer && <div className="">{footer}</div>}
            </DialogContent>
        </Dialog>
    )
}

export default Modal