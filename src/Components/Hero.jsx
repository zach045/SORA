import sky from '../assets/sky.jpeg';
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if(element) {
        element.scrollIntoView({ behavior: 'smooth'});
        setIsOpen(false);
        }
        else {
        setIsOpen(false);
        }
    } 
    return (
        <section  
            className="hero h-screen bg-cover bg-center my-auto relative overflow-x-hidden"
            style={{ backgroundImage: `url(${sky})` }}
            id="hero">
            <div className="h-full w-full max-w-7xl mx-auto flex justify-start items-center px-4">
                <div className="flex flex-col flex-wrap justify-start text-left max-w-2xl mt-20">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-sky-400">
                        <span className="text-sky-800">Grounded</span> in Growth. Elevated by <span className="text-sky-800">Vision.</span>
                    </h1>
                    <p className="leading-7 mb-8 text-blue-950 text-sm md:text-lg">
                        SAMA Equity empowers small businesses to scale beyond their limits through strategic consulting and meaningful partnerships. Like the endless sky, your potential knows no bounds. Start Your Journey
                    </p>
                    <div className="flex justify-start items-center md:text-md text-sm">
                        <button className="px-2 py-4 bg-gradient-to-r from-indigo-400 from-10% to-sky-600 to-90% text-white border-transparent border hover:border-sky-300 hover:text-blue-700 hover:from-white hover:to-white rounded-md transition font-bold flex justify-center items-center cursor-pointer">
                            <span>Start Your Journey</span>
                            <FaArrowRight className="md:ml-2 ml-1 size-3" />
                        </button>
                        <button className="px-2 py-4 text-blue-500 border border-blue-500 hover:bg-blue-700 hover:text-white rounded-md transition font-bold flex justify-center items-center cursor-pointer ml-4">
                            <span>Explore Our Services</span>
                            <FaArrowRight className="md:ml-2 ml-1 size-3" />
                        </button>
                    </div>
                </div>
            </div>
            <button 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
                onClick={() => scrollToSection('#about')}
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
                </div>
            </button>
        </section>
    )
}

export default Hero;