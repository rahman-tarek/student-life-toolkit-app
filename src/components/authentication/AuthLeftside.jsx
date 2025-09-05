const AuthLeftSide = () => {
    return (
        <>
            <div className="p-6 bg-green-800">
                <h2><span></span>Student Life Toolkit</h2>
                <p><span></span>✨Your academic support partner</p>
                <h1>Welcome Back!</h1>
                <p>Access your resources and connect with your campus community. Everything you need for academic success in one place.</p>
                {/* Features */}
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex flex-row gap-1">
                        {/* logo */}
                        <div className="flex flex-col gap-1">
                            <h3>Stay Organized</h3>
                            <p>Join study groups, share resources, and collaborate on projects.</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        {/* logo */}
                        <div className="flex flex-col gap-1">
                            <h3>Stay Organized</h3>
                            <p>Join study groups, share resources, and collaborate on projects.</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        {/* logo */}
                        <div className="flex flex-col gap-1">
                            <h3>Stay Organized</h3>
                            <p>Join study groups, share resources, and collaborate on projects.</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        {/* logo */}
                        <div className="flex flex-col gap-1">
                            <h3>Stay Organized</h3>
                            <p>Join study groups, share resources, and collaborate on projects.</p>
                        </div>
                    </div>
                </div>
                {/* Statistics */}
                <div className="flex justify-between items-center">
                    <div className="flex flex-col items-center gap-1">
                        <h2>50K+</h2>
                        <p>Active</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <h2>50K+</h2>
                        <p>Active</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <h2>50K+</h2>
                        <p>Active</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AuthLeftSide;