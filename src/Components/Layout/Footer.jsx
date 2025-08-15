import { IoMdArrowUp } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { scrollToSection } from "../../utils/scrollToSection";

const Footer = () => {
    const footerLinks = {
        services: [
            {key: 1, name: 'Growth Strategy', link: '#services'},
            {key: 2, name: 'Partnerships', link: '#services'},
            {key: 3, name: 'Scaling Operations', link: '#services'},
            {key: 4, name: 'Market Expansion', link: '#services'},
        ],
        resources: [
            {key: 1, name: 'About Us', link: '#about'},
            {key: 2, name: 'Case Studies', link: '#case-study'},
            {key: 3, name: 'Contact us', link: '#contact'},
        ]
    }
    return (
        <footer className="bg-sky-800 text-white">
                <div className="p-8 px-2 sm:px-8">
                    <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 space-x-10">
                        <div className="text-left space-y-3 px-2">
                            <h3 className="text-2xl font-bold uppercase">SORA Equity</h3>
                            <p>Empowering small businesses to reach new heights through strategic consulting and meaningful partnerships. Your potential knows no bounds.</p>
                            <span className="flex items-center justify-start space-x-3 my-8">
                                <IoLogoTwitter className="size-6" />
                                <IoLogoLinkedin className="size-6" />
                                <IoMail className="size-6" />
                            </span>
                        </div>
                        <div className="text-left space-y-3 mb-8">
                            <h3 className="text-lg font-semibold uppercase px-2">Services</h3>
                            <ul className="">
                                {footerLinks.services.map((service) => (
                                    <li key={service.key}>
                                        <button
                                        onClick={() => scrollToSection(service.link)}
                                        className="cursor-pointer hover:bg-sky-900 p-2 rounded-lg"
                                        >
                                            {service.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-left space-y-3">
                            <h3 className="text-lg font-semibold uppercase px-2">Company</h3>
                            <ul className="">
                                {footerLinks.resources.map((resource) => (
                                    <li key={resource.key}>
                                        <button
                                        onClick={() => scrollToSection(resource.link)}
                                        className="cursor-pointer hover:bg-sky-900 p-2 rounded-lg"
                                        >
                                            {resource.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center flex-col-reverse md:flex-row md:justify-between items-center flex-wrap md:space-y-0 border-t border-gray-400 px-2 sm:px-8 py-4">
                    <span>2025 SORA Equity. All rights reserved.</span>
                    <button 
                    onClick={() => scrollToSection('#hero')}
                    className="flex justify-center items-center p-2 ml-4 mb-4 md:mb-0 hover:bg-sky-950 transition duration-300 rounded-lg cursor-pointer">
                        Back to top
                        <IoMdArrowUp className="ml-2" />
                    </button>
                </div>
        </footer>
    )
}

export default Footer;