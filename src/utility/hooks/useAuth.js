import { useSelector } from 'react-redux'

const useAuth = () => {
  const { userData } = useSelector((state) => state.auth)
  return (
    Object.keys(userData).length !== 0 || !!localStorage.getItem('userData')
  )
}

export default useAuth
