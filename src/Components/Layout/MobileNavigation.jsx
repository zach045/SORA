const MobileNavigation = ({ navItems, scrollToSection }) => {
  return (
    <div className="md:hidden bg-background/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className="block w-full text-left px-3 py-2 text-foreground border border-transparent hover:border-sky-600 transition-colors duration-200 font-medium cursor-pointer rounded-md"
          >
            {item.name}
          </button>
        ))}
        <button 
          onClick={() => scrollToSection('#contact')}
          className="p-2 bg-gradient-to-r from-indigo-500 from-10% to-sky-500 to-90% text-white border-transparent border hover:border-sky-500 hover:text-blue-700 hover:from-white hover:to-white hover:text-blue-700 rounded-md transition font-bold w-full cursor-pointer mt-4"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MobileNavigation;
