import { useEffect, useState } from 'react'

type debouncedValueProps = (value: string, delay: number) => string

const useDebounce: debouncedValueProps = (value, delay) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
      setDebouncedValue('')
    }
  }, [value, delay])
  return debouncedValue
}
export default useDebounce
