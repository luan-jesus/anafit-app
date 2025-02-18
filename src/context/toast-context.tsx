import React, { createContext, useContext } from 'react'
import { toast } from 'react-toastify'
import { Id, TypeOptions } from 'react-toastify/dist/types'
import { ToastContainer } from 'react-toastify'

interface ToastContextType {
  toastLoading: () => Id
  toastUpdate: (id: Id, type: TypeOptions, message: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  function toastLoading() {
    return toast.loading('Carregando', {
      position: 'top-center',
    })
  }

  function toastUpdate(id: Id, type: TypeOptions, message: string) {
    return toast.update(id, {
      render: message,
      type: type,
      isLoading: false,
      closeOnClick: true,
      autoClose: 5000,
      draggable: true,
    })
  }

  return (
    <ToastContext.Provider
      value={{
        toastLoading,
        toastUpdate,
      }}
    >
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  )
}

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useRoast must be used within an ToastProvider')
  }
  return context
}
