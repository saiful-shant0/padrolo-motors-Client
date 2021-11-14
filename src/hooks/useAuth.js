import { useContext } from "react"
import { AuthChontext } from "../context/AuthProvider/AuthProvider"

const useAuth = () => {
    const auth = useContext(AuthChontext)
    return auth;
}

export default useAuth;