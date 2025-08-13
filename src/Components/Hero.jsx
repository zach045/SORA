import sky from '../assets/sky.jpeg';
import { FaArrowRight } from "react-icons/fa";
import { scrollToSection } from '../utils/scrollToSection';
import BaseButton from './ui/Buttons/BaseButton';
import SecondaryButton from './ui/Buttons/SecondaryButton';

const Hero = () => {
     
    return (
        <section  
            className="hero h-screen bg-cover bg-center my-auto relative overflow-x-hidden"
            style={{ backgroundImage: `url(${sky})` }}
            id="hero">
            <div className="h-full w-full max-w-7xl mx-auto flex justify-start items-center px-4">
                <div className="flex flex-col flex-wrap justify-start text-left max-w-2xl mt-20">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-sky-500">
                        <span className="text-sky-800">Grounded</span> in Growth. Elevated by <span className="text-sky-800">Vision.</span>
                    </h1>
                    <p className="leading-7 mb-8 text-sky-700 text-sm md:text-lg">
                        SORA Equity empowers small businesses to scale beyond their limits through strategic consulting and meaningful partnerships. Like the endless sky, your potential knows no bounds. Start Your Journey
                    </p>
                    <div className="flex justify-start items-center text-md text-sm">
                        <BaseButton className="px-3 py-4 mr-4" func={() => scrollToSection('#about')}>
                            <span>Learn More</span>
                            <FaArrowRight className="md:ml-2 ml-1 size-3" />
                        </BaseButton>
                        <SecondaryButton className="px-3 py-4 max-w-40 bg-white" func={() => scrollToSection('#services')}>
                            <span>Explore Services</span>
                            <FaArrowRight className="md:ml-2 ml-1 size-3" />
                        </SecondaryButton>
                    </div>
                </div>
            </div>
            <button 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
                onClick={() => scrollToSection('#about')}
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
                <span className="hidden">about</span>
                </div>
            </button>
        </section>
    )
}

export default Hero;