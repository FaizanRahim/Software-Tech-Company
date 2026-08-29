const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
              B
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">
                Biznexia
              </span>
              <span className="text-xs text-gray-500 tracking-wider">
                PVT LTD
              </span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition">
              Home
            </a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">
              Contact
            </a>
          </nav>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition">
            Get Started
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;