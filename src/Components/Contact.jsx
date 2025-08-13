import { useState } from "react";
import BaseButton from "./ui/Buttons/BaseButton";
import { IoIosSend } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

const businessStages = [
    {
        key: "startup",
        value: "Startup (0-2 years)"
    },
    {
        key: "growth",
        value: "Growth Stage (2-5 years)"
    },
    {
        key: "established",
        value: "Established (5+ years)"
    },
    {
        key: "scale",
        value: "Scale-up Ready"
    },
]

const contactMethods = [
    {
        key: 1,
        icon: MdOutlineMailOutline,
        title: "Email Us",
        info: "hello@soraequity.com",
        comment: "We typically respond within 4 hours"   
    },
    {
        key: 2,
        icon: LuPhone,
        title: "Call Us",
        info: "+1 (555) 123-4567",
        comment: "Monday to Friday, 9AM to 6PM EST"   
    },
    {
        key: 3,
        icon: CiLocationOn,
        title: "Visit Us",
        info: `123 Business District,\nSuite 456\nNew York, NY 10001`,
        comment: "We typically respond within 4 hours"   
    }
]

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", company: "", stage: "", message: "" });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);   
    const [validName, setValidName] = useState(true);    
    const [validEmail, setValidEmail] = useState(true);
    const [validMessage, setValidMessage] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nameOk = form.name.trim().length > 0;
        const emailOk = /^\S+@\S+\.\S+$/.test(form.email);
        const msgOk = form.message.trim().length > 0;

        setValidName(nameOk);
        setValidEmail(emailOk);
        setValidMessage(msgOk);

        if (!nameOk || !emailOk || !msgOk) return;

        setSuccess(false);
        setSubmitting(true);
        // DEMO: simulate async submit
        await new Promise((r) => setTimeout(r, 900));
        setSubmitting(false);
        setSuccess(true);
        setForm({ name: "", email: "", company: "", stage: "", message: "" });
        await new Promise((r) => setTimeout(r, 9000));
        setSuccess(false);
        setValidEmail(null);
        setValidName(null);
        setValidMessage(null);

    };

    function handleClose() {
        setSuccess(false);
    }
    
    return (
        <section id="contact" className="py-20 bg-linear-65 from-gray-300 to-sky-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-8">
                    <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground z-0 text-white">Let's Start Your Journey</h2>
                </div>
                <p className="max-w-3xl leading-relaxed text-muted-foreground mx-auto text-white text-lg md:text-lg mb-8 italic">Ready to take your business to new heights? Get in touch with us today and let's discuss how we can help you achieve your growth goals.</p>
                <div className="grid grid-cols lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <form className="bg-white p-8 rounded-lg text-left shadow-md shadow-gray-400">
                            <h3 className="font-bold text-xl mb-6">Send us a message</h3>
                            <div className="grid grid-cols lg:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="flex flex-row flex-nowrap items-center justify-start font-semibold mb-2">
                                        Full Name
                                        <sup className="text-red-500 mt-2 text-lg">*</sup>
                                    </label>
                                    <input id="name" name="name" className={`rounded-md bg-gray-100 w-full h-10 px-3 ${validName ? '' : 'border border-red-300'}`} required type="text" value={form.name} onChange={handleChange} placeholder="Your full name"  />
                                </div>
                                <div>
                                    <label htmlFor="email" className="flex flex-row flex-nowrap items-center justify-start font-semibold mb-2">
                                        Email Address
                                        <sup className="text-red-500 mt-2 text-lg">*</sup>
                                    </label>
                                    <input id="email" name="email" className={`rounded-md bg-gray-100 w-full h-10 px-3 ${validEmail ? '' : 'border border-red-300'}`} required type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                                </div>
                                 <div>
                                    <label htmlFor="company" className="flex flex-row flex-nowrap items-center justify-start font-semibold mb-2">
                                        Company
                                    </label>
                                    <input id="company" name="company" className="rounded-md bg-gray-100 w-full h-10 px-3 " type="text" value={form.company} onChange={handleChange} placeholder="Your company name" />
                                </div>
                                <div>
                                    <label htmlFor="stage" className="flex flex-row flex-nowrap items-center justify-start font-semibold mb-2">
                                        Business Stage
                                    </label>
                                    <select id="stage" name="stage" className="rounded-md bg-gray-100 w-full h-10 px-3 " value={form.stage} onChange={handleChange}>
                                        <option value="" disabled>
                                            Select a stage…
                                        </option>
                                        {businessStages.map((stage) => (
                                            <option className="bg-white" key={stage.key} value={stage.key}>{stage.value}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <label htmlFor="message" className="flex flex-row flex-nowrap items-center justify-start font-semibold my-4">Tell us about your business goals
                                <sup className="text-red-500 mt-2 text-lg">*</sup>
                            </label>
                            <textarea id="message" name="message" placeholder="Describe your current challenges and what you'd like to acheive..." className={`w-full bg-gray-100 rounded-md h-28 p-3 ${!!validMessage ? '' : 'border border-red-300'}`} value={form.message} required onChange={handleChange} />
                            {(!validEmail || !validName || !validMessage) && (
                                <div>
                                    <span className="text-red-500">Missing required fields.</span>
                                </div>
                            )}
                            <BaseButton className={`w-full mt-4 py-3 justify-center ${submitting ? 'opacity-70 pointer-events-none' : ''}`} func={handleSubmit}>
                                <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                                <IoIosSend />
                            </BaseButton>
                        </form>
                    </div>
                    <div>
                        {contactMethods.map((method) => (
                            <div key={method.key} className="shadow-lg shadow-gray-400 rounded-lg flex justify-start items-start p-6 mb-6 last:mb-0 bg-white w-full col-span-2 lg:col-span-1">
                                <method.icon className="size-12 p-3 bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% rounded-full text-white mr-4 font-bold" />
                                <div className="flex flex-col flex-wrap items-start">
                                    <h3 className="text-lg font-bold text-left mb-2">{method.title}</h3>
                                    <span className="text-black font-semibold text-lg text-left whitespace-pre-line text-sm">{method.info}</span>
                                    <span className="text-gray-500 leading-relaxed text-left text-sm">{method.comment}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {success && (
                    <div className={`fixed bottom-5 right-5 bg-white px-4 py-2 pb-6 text-left rounded-lg w-sm text-sm shadow-sm shadow-gray-200 transform transition-all duration-500 ease-in-out ${success ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} animate-slideOutRight`}>
                        <div className="flex flex-col flex-wrap align-start">
                            <div className="ml-auto">
                                <button className="flex justify-end" onClick={handleClose}>
                                    <IoIosClose className="size-7 text-gray-300 hover:text-gray-600 cursor-pointer duration-300" />
                                </button>
                            </div>
                            <div>
                                <h3 className="mb-1 font-semibold">Message Sent!</h3>
                                <span>We'll get back to you in 24 hours.</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Contact;