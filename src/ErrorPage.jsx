import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>error page</h1>
            <Link to="/"><button className="btn">Got home</button></Link>
        </div>
    );
};

export default ErrorPage;