import { useContext } from 'react'
import { AvionContext } from './AvionContext'

const useAvionContext = () => {
    const context = useContext(AvionContext)
    if (!context) {
        throw new Error('useAvionContext must be used within a AvionProvider')
    }
    return context
}

export default useAvionContext