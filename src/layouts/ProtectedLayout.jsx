import React from 'react'
import { AuthService } from '@/services/AuthService'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedLayout = () => {
    if(AuthService.getSession() === null) {
        return <Navigate to="/auth/login" />
    }
    return <Outlet />
}

export default ProtectedLayout
