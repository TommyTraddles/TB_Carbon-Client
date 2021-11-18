import { createContext, useState, useContext } from 'react'

const DataContext = createContext(null)

export const DataProvider = ({ children }) => {
  const [data, setdata] = useState({})
  const setValue = (values) => setdata((cur) => ({ ...cur, ...values }))

  return (
    <DataContext.Provider value={{data, setValue}}>{children}</DataContext.Provider>
  )
}

export const useCalculatorFormData = () => useContext(DataContext)