import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
        </Routes>
    )
}