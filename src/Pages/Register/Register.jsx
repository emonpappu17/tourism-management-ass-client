import {
    Card,
    Input,
    Checkbox,
    Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../MyContext";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import Lottie from "lottie-react";
import Animation from '../../assets/register.json'


const Register = () => {

    const { createUser, user, setUser, loading } = useContext(MyContext)
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        // const accepted = form.terms.checked
        // const user = { name, email, photo, password, accepted }
        // console.log(user);

        if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            return toast.warn("Must have an Uppercase and a Lowercase letter in the password")
        }

        if (password.length < 6) {
            return toast.warn("Password must be at least 6 character")
        }

        // creating user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                //updateProfile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        e.target.reset();
                        navigate('/')
                        toast.success('User created Successfully')
                    })
                    .catch(() => console.log('error occur in update profile'))
            })
            .catch(err => {
                console.log(err.message);
                toast.error(err.message)
            })
    }

    if (loading) {
        return <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <div className=" bg-base-200 py-16 p-4">
            <div className="md:flex items-center justify-between bg-base-200 border space-y-4 md:gap-5  mx-auto container shadow-2xl">
                <Lottie className="flex-1" animationData={Animation}>
                </Lottie>

                <Card color="transparent" shadow={false} className="p-5 bg-white">
                    <Typography variant="h4" color="blue-gray"> 
                        Register
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to register.
                    </Typography>
                    <form onSubmit={handleSubmit} className="mt-8 mb-2  md:max-w-screen-lg  w-full">
                        <div className="mb-1 flex flex-col gap-4">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Name
                            </Typography>
                            <Input
                                name="name"
                                required
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Email
                            </Typography>
                            <Input
                                name="email"
                                required
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Photo URL
                            </Typography>
                            <Input
                                name="photo"
                                size="lg"
                                placeholder="photo Url"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Password
                            </Typography>
                            <Input
                                name="password"
                                required
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <Checkbox
                            required
                            name="terms"
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree the
                                    <a
                                        href="#"
                                        className="font-medium transition-colors hover:text-gray-900"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                        />
                        {/* sign up */}
                        <button type="submit" className="w-full mt-6 py-2 px-3 font-semibold text-xs md:text-base border border-[#263238] hover:border-none text-[#263238] rounded-xl hover:bg-orange-500 ">Register</button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <Link to="/login" className="font-medium text-gray-900 hover:text-orange-500">Login</Link>
                        </Typography>
                    </form>
                </Card>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;