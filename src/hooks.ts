import { useEffect } from 'react'

// source: https://usehooks.com/useOnClickOutside/
export function useOnClickOutside<T extends Element>(
  ref: React.RefObject<T> | undefined,
  handler: (event: any) => void
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref?.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [handler, ref])
}
