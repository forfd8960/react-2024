const Navbar = () => {
    return (
        <header className="bg-white shadow">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="text-xl font-bold text-gray-800">Learn React 2024</div>
                <div>
                    <a
                        href="/login"
                        className="text-gray-600 hover:text-gray-800 px-4 py-2 font-bold"
                    >
                        Login
                    </a>
                    <a
                        href="/signup"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Signup
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;