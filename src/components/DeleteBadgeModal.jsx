import React from 'react'
import Modal from './Modal'

const DeleteBadgeModal = ({ isOpen, onCloseModal, onDeleteBadge }) => {
    return (
        <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
            <div className="DeleteBadgeModal">
                <h1>Are You Sure?</h1>
                <p>You are about to delete this badge.</p>

                <div>
                    <button onClick={ onDeleteBadge } className="btn btn-danger mr-4">
                        Delete
                    </button>
                    <button onClick={ onCloseModal } className="btn btn-primary">
                        Cancel
                    </button>
                </div>
            </div>

        </Modal>
    )
}

export default DeleteBadgeModal
