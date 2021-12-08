import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminIndex from './AdminIndex';

function AdminPg() {
    return (
        <div>
        <AdminIndex/>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '85vh',
                color:"white",
                backgroundColor:"#152733"
            }}
        >
        <h1>Welcome To the Administrator portal of BrainBooster.</h1>
    </div>
    </div>
    )
}

export default AdminPg
