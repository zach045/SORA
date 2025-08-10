import BaseCard from "./ui/BaseCard";
import { RiFocus2Line } from "react-icons/ri";
import { IoMdPeople } from "react-icons/io";
import { BiAward } from "react-icons/bi";
import { GoLightBulb } from "react-icons/go";

const stats = [
    { title: '500+', content: 'Businesses Helped'},
    { title: '95%', content: 'Success Rate'},
    { title: '$10k+', content: 'Revenue'},
    { title: '5+', content: 'Years Experience'}
]

const values = [
    {
        key: 1,
        icon: RiFocus2Line,
        title: "Strategic Focus",
        desc: "We provide laser-focused strategies that align with your business goals and market opportunities."
    },
    {
        key: 2,
        icon: IoMdPeople,
        title: "Partnership Approach",
        desc: "We believe in true partnerships, working alongside you to achieve sustainable growth."
    },
    {
        key: 3,
        icon: BiAward,
        title: "Proven Results",
        desc: "Our track record speaks for itself - we've helped hundreds of businesses scale successfully."
    },
    {
        key: 4,
        icon: GoLightBulb,
        title: "Innovation Mindset",
        desc: "We bring fresh perspectives and innovative solutions to traditional business challenges."
    }

]

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-8">
                    <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground z-0 text-black">About Sama Equity</h2>
                </div>
                <div>
                    <p className="max-w-3xl leading-relaxed text-muted-foreground mx-auto text-gray-700 text-md md:text-lg mb-8 italic">
                        We are passionate about empowering small businesses to reach their full potential through strategic guidance and meaningful partnerships.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="text-left text-black">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-8">Our Story</h3>
                        <p className="leading-relaxed my-4">
                            <span className="font-semibold text-sky-600 text-lg">SAMA Equity</span> is a strategic partner for visionary entrepreneurs seeking to scale their businesses with purpose and precision. Our name, derived from the Arabic word for “sky,” reflects our belief that the only true limit is the one you set for yourself. We exist to elevate small and medium enterprises by providing tailored guidance, operational support, and access to growth capital — empowering founders to realize their fullest potential.
                        </p>
                        <p className="leading-relaxed my-4">
                            With deep roots in the MENA region and an eye on global opportunity, we blend local insight with world-class expertise. Whether it’s refining business strategy, securing funding, or scaling infrastructure, SAMA Equity is committed to long-term partnerships that prioritize sustainable growth, innovation, and lasting impact.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:gap-12">
                        <BaseCard stats={stats} />
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        {values.map((value) => (
                            <div key={value.key} className="flex justify-center items-center flex-col flex-wrap shadow-md shadow-sky-200 p-6 rounded-md">
                                <value.icon className="size-16 p-3 mb-4 bg-sky-700 rounded-full text-white" />
                                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                                <p className="leading-relaxed text-gray-500 text-sm">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;