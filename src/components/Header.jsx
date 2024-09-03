const Header = () => {
  return (
    <header className="bg-sky-800 text-white py-5 shadow-md overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <img
            src="/telegram-icon.png"
            alt="Telegram Icon"
            className="w-10 h-10"
          />
          <h1 className="text-3xl font-bold truncate">Telegram Weather Bot</h1>
        </div>
        <p className="text-base mt-2 md:mt-0">
          Get daily weather updates for your city!
        </p>

        <nav>
          <ul className="flex text-lg space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
