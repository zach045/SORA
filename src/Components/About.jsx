import BaseCard from "./ui/BaseCard";
const stats = [
    { title: '500+', content: 'Businesses Helped'},
    { title: '95%', content: 'Success Rate'},
    { title: '$10k+', content: 'Revenue'},
    { title: '5+', content: 'Years Experience'}
]

const About = () => {
    return (
        <section id="about" className="py-20 overflow-x-hidden z-10 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-8">
                    <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground z-0 text-black">About Sama Equity</h1>
                </div>
                <div>
                    <p className="max-w-3xl leading-relaxed text-muted-foreground mx-auto text-gray-700 text-md md:text-lg mb-8 italic">
                        We are passionate about empowering small businesses to reach their full potential through strategic guidance and meaningful partnerships.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="text-left text-black">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-8">Our Story</h2>
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

            </div>
        </section>
    )
}

export default About;