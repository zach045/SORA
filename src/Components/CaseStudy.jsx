import { FaQuoteRight } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";
import { LuDollarSign } from "react-icons/lu";
import BaseButton from "./ui/Buttons/BaseButton";
import { scrollToSection } from '../utils/scrollToSection';

const results = [
    {
        key: 1,
        icon: IoMdTrendingUp,
        stat: "300%",
        header: "Revenue Growth",
        text: "Year-over-year increase" 
    },
    {
        key: 2,
        icon: IoMdPeople,
        stat: "150+",
        header: "New Employees",
        text: "Team expansion" 
    },
    {
        key: 3,
        icon: LuDollarSign,
        stat: "$5M",
        header: "Funding Raised",
        text: "Series A round" 
    }
]

const CaseStudy = () => {
    return (
        <section id="case-study" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-8">
                    <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground z-0 text-black">Success Story</h2>
                </div>
                <div>
                    <p className="max-w-3xl leading-relaxed text-muted-foreground mx-auto text-gray-700 text-md md:text-lg mb-8 italic">
                        See how we helped TechFlow Solutions transform from a small startup to an industry leader in just 18 months.
                    </p>
                </div>
                <div className="grid grid-cols lg:grid-cols-2 gap-6">
                    <div className="flex flex-col flex-wrap justify-start items-start mt-10 xl:mt-20">
                        <h3 className="text-3xl font-bold">TechFlow Solutions</h3>
                        <p className="leading-relaxed my-4 text-left text-gray-500 text-lg">A B2B SaaS company providing workflow automation tools for mid-market businesses.</p>
                        <div className="shadow-lg shadow-gray-300 w-full p-8 rounded-lg flex flex-wrap flex-col justify-start items-start my-4">
                            <FaQuoteRight className="text-sky-700 size-6" />
                            <p className="text-left leading-relaxed text-lg my-4">"SAMA Equity didn't just provide consulting - they became true partners in our journey. Their strategic guidance and partnership connections were instrumental in our explosive growth."</p>
                            <span className="italic font-bold text-gray-400 text-left w-full mt-2">Sarah Chen, CEO & Founder, TechFlow Solutions</span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-bold text-left">The Challenge</h3>
                            <p className="leading-relaxed my-8 text-left text-gray-500 text-lg">TechFlow had a great product but struggled with customer acquisition and lacked the strategic partnerships needed to scale effectively in a competitive market.</p>
                            <h3 className="text-xl font-bold text-left">Our Solution</h3>
                            <p className="leading-relaxed my-8 text-left text-gray-500 text-lg">We developed a comprehensive growth strategy, facilitated key partnerships with major integration platforms, and optimized their sales processes for enterprise clients.</p>
                        </div>
                    </div>
                    <div className="xl:mt-6">
                        {results.map((result) => (
                            <div key={result.key} className="shadow-lg shadow-gray-300 rounded-lg flex justify-start items-start p-6 mb-6 last:mb-0">
                                <result.icon className="size-12 p-3 bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% rounded-full text-white mr-4" />
                                <div className="flex flex-col flex-wrap items-start">
                                    <h3 className="text-3xl font-bold text-left text-sky-600">{result.stat}</h3>
                                    <span className="text-black font-semibold text-lg">{result.header}</span>
                                    <span className="text-gray-500 leading-relaxed">{result.text}</span>
                                </div>
                            </div>
                        ))}
                        <div className="xl:mt-10">
                            <div className="bg-blue-800 px-6 py-8 flex flex-col flex-wrap justify-center items-center rounded-lg">
                                <h3 className="text-3xl font-semibold text-white mb-4">The Results</h3>
                                <p className="text-white leading-relaxed mb-6">TechFlow Solutions successfully raised their Series A, expanded into three new markets, and became a recognized leader in their industry.</p>
                                <BaseButton className="py-2 px-3" func={() => scrollToSection('#contact')}>
                                    <span>Book Your Consultation</span>
                                </BaseButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudy;