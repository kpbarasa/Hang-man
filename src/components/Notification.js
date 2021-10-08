import React from 'react'

function Notification({ showNotification }) {
    return (
        // <!-- Notification -->
        <div className={`notification-container ${showNotification ? 'show' : 'figure-part'}`}>
          <p>You have already entered this letter</p>
        </div>
    )
}

export default Notification
