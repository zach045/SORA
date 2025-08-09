import { HiOutlineBolt } from "react-icons/hi2";
import { LuCircleCheckBig } from "react-icons/lu";
import { IoMdPeople } from "react-icons/io";
import { RiFocus2Line } from "react-icons/ri";
import { IoMdTrendingUp } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { scrollToSection } from '../utils/scrollToSection';
import BaseButton from "./ui/Buttons/BaseButton";
import SecondaryButton from "./ui/Buttons/SecondaryButton";

const solutions = [
    {
        key: 1,
        icon: HiOutlineBolt,
        title: "Growth Strategy Consulting",
        desc: "Comprehensive business analysis and strategic planning to accelerate your growth trajectory.",
        features: [
            {key: 1, text: "Market analysis and opportunity assessment"},
            {key: 2, text: "Competitive positioning strategy"},
            {key: 3, text: "Growth roadmap development"},
            {key: 4, text: "KPI tracking and optimization"}
        ]
    },
    {
        key: 2,
        icon: IoMdPeople,
        title: "Strategic Partnerships",
        desc: "Connect with the right partners to expand your reach and unlock new revenue streams.",
        features: [
            {key: 1, text: "Partner identification and vetting"},
            {key: 2, text: "Partnership agreement structuring"},
            {key: 3, text: "Joint venture opportunities"},
            {key: 4, text: "Alliance management support"}
        ]
    },
    {
        key: 3,
        icon: IoMdTrendingUp,
        title: "Scaling Operations",
        desc: "Optimize your operations and systems to support sustainable business growth.",
        features: [
            {key: 1, text: "Process optimization and automation"},
            {key: 2, text: "Team structure and hiring plans"},
            {key: 3, text: "Technology stack recommendations"},
            {key: 4, text: "Operational efficiency improvements"}
        ]
    },
    {
        key: 4,
        icon: RiFocus2Line,
        title: "Market Expansion",
        desc: "Strategic guidance for entering new markets and reaching new customer segments.",
        features: [
            {key: 1, text: "Market entry strategy development"},
            {key: 2, text: "Customer acquisition planning"},
            {key: 3, text: "Brand positioning and messaging"},
            {key: 4, text: "Go-to-market execution support"}
        ]
    },
]
const Services = () => {
    return (
        <section id="services" className="py-20 overflow-x-hidden z-10 bg-linear-65 from-gray-300 to-sky-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-8">
                    <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground z-0 text-white">Our Services</h2>
                </div>
                <div>
                    <p className="max-w-3xl leading-relaxed text-muted-foreground mx-auto text-white text-md md:text-lg mb-8 italic">
                        We offer comprehensive solutions to help your business reach new heights. Each service is tailored to your unique needs and growth objectives.
                    </p>
                </div>
                <div className="grid grid-cols lg:grid-cols-2 gap-6 mb-20">
                    {solutions.map((solution) => (
                        <div key={solution.key} className="flex flex-col flex-wrap justify-start items-start w-full rounded-md p-6 shadow-lg shadow-white bg-white text-left">
                        <solution.icon className="size-16 p-3 mb-4 bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% rounded-full text-white" />
                        <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                        <p className="leading-relaxed text-gray-500 text-md mb-4">{solution.desc}</p>
                        <ul className="list-none mb-4">
                            {solution.features.map((feature) => (
                                <li key={feature.key} className="flex items-center">
                                    <span className="mr-4">
                                        <LuCircleCheckBig className="text-sky-700 size-5" />
                                    </span>
                                    <span>
                                        {feature.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <SecondaryButton func={() => scrollToSection('#contact')}>
                            <span className="mr-2">Learn More</span>
                            <FaArrowRight className="size-4" />
                        </SecondaryButton>
                    </div>
                    ))}
                </div>
                <div className="flex flex-col flex-wrap justify-center items-center">
                    <p className="mb-4 leading-relaxed font-semibold font-serif lg:text-xl">Ready to transform your business? Let's discuss your specific needs.</p>
                    <BaseButton className="py-3 px-4" func={() => scrollToSection('#contact')}>
                        <span className="mr-3">Book Your Consultation</span>
                        <FaArrowRight className="size-4" />
                    </BaseButton>
                </div>
            </div>
        </section>
    )
}

export default Services;