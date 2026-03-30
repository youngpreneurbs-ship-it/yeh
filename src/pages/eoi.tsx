import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const centres = [
    {
        name: 'The Ponds High School',
        timings: 'Wednesday 3:15 – 5:15 PM',
        address: 'Classrooms E06 & E08 (Next to COLA, Basketball Courts)',
        link: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__cI7zrtUM0NUWTVPNzhMMkNRMFM5Q0k1N0g1Rk8zTi4u",
        bgColor: 'from-[#b7e1ed] to-[#f5a300d0]'
    },
    {
        name: 'Rouse Hill Town Centre',
        timings: 'Saturday 12:00 – 2:00 PM',
        address: 'Level 2, Rex Money Room, Vinegar Hill Memorial Community Centre',
        link: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__cI7zrtUOEhXSTFKNEpYVEtSSDVaVzlNVFVYQ0xOWi4u",
        bgColor: 'from-[#3db2d6] to-[#e5d1a9d0]'
    },
    {
        name: 'Bella Vista',
        timings: 'To be finalised',
        address: 'To be finalised',
        link: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__cI7zrtUOFRKQkxCT0dZQ0FVWlY1Qk1WRDJRSEdKVS4u",
        bgColor: 'from-[#f5a300d0] to-[#16a56c80]'
    },
    {
        name: 'Quakers Hill',
        timings: 'To be finalised',
        address: 'T2A Nirimba Education Precinct, Warawara Cct, Quakers Hill NSW 2763',
        link: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__cI7zrtUMjRRWEJROEdMS1ZHQlg3QUdGMzU3UThGVS4u",
        bgColor: 'from-[#16a56c80] to-[#3db2d6]'
    },

    {
        name: 'Box Hill',
        timings: 'To be finalised',
        address: 'Anthony Skarratt Reserve\n8 Nelson Rd, Box Hill NSW 2765',
        link: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__cI7zrtUN0lTWTBIV1pIUDIyRDlLMVpMV0FUTTdJQy4u",
        bgColor: 'from-[#f5a300d0] to-[#b7e1ed]'
    },
    {
        name: 'Melonba / Marsden Park',
        timings: 'To be finalised',
        address: 'To be finalised',
        link: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__cI7zrtUOENDS09YUUxXQ0hRUE0zNkZHOU1WU0hIRS4u",
        bgColor: 'from-[#16a56c80] to-[#e5d1a9d0]'
    },
];

export function EOI() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.animate-in',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="min-h-screen bg-gray-50">
            <section className="py-12 lg:py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="bg-gradient-to-r text-4xl sm:text-5xl lg:text-6xl mb-6 from-[#3db2d6] to-[#f5a300d0] bg-clip-text text-transparent font-black">

                            Expression of Interest
                        </h1>
                        <p className="animate-in text-gray-600 text-2xl max-w-2xl mx-auto">
                            Explore our current class locations and timings.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {centres.map((centre) => (
                            <div
                                key={centre.name}
                                className={`animate-in bg-gradient-to-br ${centre.bgColor} rounded-2xl shadow-md hover:shadow-xl transition-shadow px-6 py-6 flex flex-col justify-between`}
                            >
                                <div>
                                    <h2 className="font-heading font-bold text-xl text-navy-900 mb-4 text-center">
                                        {centre.name}
                                    </h2>
                                    <div className="space-y-3 text-sm text-gray-700">
                                        <div>
                                            <p className="font-semibold">Class Timings:</p>
                                            <p className="whitespace-pre-line">{centre.timings}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Address:</p>
                                            <p>{centre.address}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-center">
                                    <Button
                                        asChild
                                        className="bg-gradient-to-r from-navy to-lime hover:brightness-105 text-white font-semibold rounded-full px-6"
                                    >
                                        <Link
                                            target="_blank"
                                            to={centre?.link}
                                            aria-label={`Apply now for the ${centre.name} centre`}
                                        >
                                            Apply Now
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}



