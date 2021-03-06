import { useEffect, useState } from 'react'

type debouncedValueProps = (value: string, delay: number) => string

/**
 * It returns a debounced value based on the value and delay props.
 * @param value - The value to be debounced.
 * @param delay - The number of milliseconds to wait before updating the state.
 * @returns The debounced value.
 */
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
