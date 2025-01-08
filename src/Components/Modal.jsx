const Modal = ({ isOpen, onClose}) => {
    // Render nothing if the modal is not open
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <img src={isOpen} />
            </div>
            <div className="close-button" onClick={onClose}>
                <h4>Close</h4>
            </div>
        </div>
    );
};
export default Modal;