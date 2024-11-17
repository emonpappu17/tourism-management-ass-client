import { useContext } from "react";
import { MyContext } from "./MyContext";
import Lottie from "lottie-react";
import Loader from '../src/assets/loader.json'
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation()

    // console.log(location);

    const { loading, user, } = useContext(MyContext)

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen"><Lottie className="w-80" animationData={Loader}></Lottie></div>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;