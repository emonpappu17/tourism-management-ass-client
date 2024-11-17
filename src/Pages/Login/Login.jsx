import { Card, CardBody, CardFooter, Checkbox, Typography, Input } from "@material-tailwind/react";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../../MyContext";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { signInUser, user, setUser, googleSignIn } = useContext(MyContext)
    const navigate = useNavigate();

    const location = useLocation()
    // console.log(location);

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        // signIn user
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()
                navigate(location?.state ? location.state : '/')
                toast.success('Login Successfully')
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
            })
    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user, 'google login');
                setUser({ ...user, photoURL: result.user.photoURL, displayName: result.user.displayName })
                navigate(location?.state ? location.state : '/')
                toast.success('Login Successfully')
            })
            .catch(err => console.log(`google login err${err}`))
    }

    return (
        <div className="bg-base-200 py-16 p-4">
            <Card className="mx-auto w-full max-w-[24rem]">
                <form onSubmit={handleSubmit}>
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                            Login
                        </Typography>
                        <Typography
                            className="mb-3 font-normal"
                            variant="paragraph"
                            color="gray"
                        >
                            Enter your email and password to Login.
                        </Typography>
                        <Typography className="-mb-2" variant="h6">
                            Your Email
                        </Typography>
                        <Input required name="email" label="Email" size="lg" />
                        <Typography className="-mb-2" variant="h6">
                            Your Password
                        </Typography>
                        <Input required type="password" name="password" label="Password" size="lg" />
                        <div className="-ml-2.5 -mt-3">
                            <Checkbox required label="Remember Me" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <button type="submit" className="mb-3 w-full py-2 px-3 font-semibold text-xs md:text-base border border-[#263238] hover:border-none text-[#263238] rounded-xl hover:bg-orange-500 ">Login</button>
                        <button onClick={handleGoogleLogin} className=" w-full py-2 px-3 font-semibold text-xs md:text-base border border-[#263238] hover:border-none text-[#263238] rounded-xl hover:bg-orange-500 flex items-center justify-center gap-2"><FcGoogle className="text-xl" />
                            <span>Login with Google</span></button>
                        <Typography variant="small" className="mt-4 flex justify-center">
                            Don&apos;t have an account?
                            <Link to="/register" className="ml-1 font-bold hover:text-orange-500">
                                Register
                            </Link>
                        </Typography>
                    </CardFooter>
                </form>
            </Card>
            <ToastContainer />
        </div>
    );
};

export default Login;