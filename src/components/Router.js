import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import SignUp from "routes/SignUp";

const AppRouter = ({isLoggedIn}) => {
    return (
        <BrowserRouter>
            <Routes>
                { isLoggedIn ? (
                    <Route exact path="/" element={<Home/>} />
                ) : (
                    <>
                        <Route exact path="/signup" element={<SignUp />} />
                        <Route exact path="/" element={<Auth />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;