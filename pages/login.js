import Link from "next/dist/client/link";

const Login = () => {

    return (
        <>
            <div className="mt-40 flex justify-center text-center">
                <form className="border-4 rounded-2xl p-8 bg-vagon-blue bg-opacity-10">
                    <a>Hi, enter your email and password!</a>
                    <div className="p-4">
                        <input 
                            className="p-4 border-2 border-vagon-blue rounded-3xl"
                            type="email"
                            name="email"
                            placeholder="Email"
                        >
                        </input>
                    </div>
                    <div className="p-4">
                        <input
                            className="p-4 border-2 border-vagon-blue rounded-3xl"
                            type="password"
                            name="password"
                            placeholder="Password"
                            >
                            </input>
                    </div>
                    <Link href="/home">
                        <button type="submit" className="p-4 bg-vagon-yellow bg-opacity-60 rounded-2xl border-black border-2">Log in</button>
                    </Link>                    
                </form>
            </div>
        </>
    );
}

export default Login;