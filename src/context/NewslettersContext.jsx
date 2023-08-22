"use client"
import { createContext, useContext } from 'react'

export const NewslettersContext = createContext()
export const SessionContext = createContext()

export const useNewsletters = () => {
    const context = useContext(NewslettersContext)
    if (!context) throw new Error('useNewsletters must used within a provider')
    return context
}

export const NewslettersProvider = ({ children }) => {
    const newsletters = []
    console.log(newsletters)
    return (
        <NewslettersContext.Provider
            value={{
                newsletters,
            }}
        >
            {children}
        </NewslettersContext.Provider>
    )
}

export const SessionProvider = ({ children }) => {
    const session = []
    console.log(session)
    return (
        <SessionContext.Provider
            value={{
                session,
            }}
        >
            {children}
        </SessionContext.Provider>
    )
}