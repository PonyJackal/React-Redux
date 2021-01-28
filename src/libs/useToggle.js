import React, { useState, useEffect, useCallback } from 'react'

const useToggle = (initState = false) => {
  const [status, setStatus] = useState(initState)

  const toggle = useCallback(() => {
    setStatus((status) => !status)
  }, [])

  return [status, toggle]
}

export default useToggle
