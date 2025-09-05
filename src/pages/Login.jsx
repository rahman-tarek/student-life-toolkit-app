import { useState } from "react";
import { Link } from "react-router";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <div className="h-screen flex flex-row justify-between items-center">
                <div className="hidden lg:block">
                    Hello
                </div>
                <div className="mx-auto w-200px p-8 rounded-lg border border-gray-300">
                    <div className="mx-auto">
                        <h1 className="text-2xl font-bold text-gray-700">Welcome back</h1>
                        <p className="text-gray-700 mt-2">Sign in to your Student Life Toolkit account</p>
                        <div>
                            <form action="">
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" placeholder="Enter your email" value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">Email</label>
                                    <input type="password" placeholder="Enter your password" value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {/* Remember and forgot pass */}
                                <div className="py-2 flex flex-row justify-between items-center">
                                    <div className="flex flex-row items center gap-1">
                                        <input type="checkbox" />
                                        <p>Remember me</p>
                                    </div>
                                    <Link to={"/"} className="text-green-800 font-bold">Forgot Password?</Link>
                                </div>
                                <button className="py-1 rounded-md outline-none bg-green-800 text-white">Sign In</button>
                            </form>
                            {/* Other options for authentications */}
                            <p className="my-2 text-gray-700">Or</p>
                            <div className="flex flex-row justify-between items-center">
                                <button className="rounded-md outline-none border border-gray-300 text-gray-700">Github</button>
                                <button className="rounded-md outline-none border border-gray-300 text-gray-700">Google</button>
                            </div>
                            <div className="py-1 flex flex-row items-center gap-2">
                                <p>Don't have an account?</p>
                                <Link className="text-green-800" to={"/"}>Sign up</Link>
                            </div>
                        </div>
                        <p className="text-gray-700 mt-2">By continuing, you agree to our Terms of Service and Privacy Policy.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;