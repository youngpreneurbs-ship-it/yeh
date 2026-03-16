import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const centres = [
    {
        name: 'The Ponds',
        courses: 'Abacus, Vedicmath, Chess, Public Speaking/Debating/Creative Writing, Rubik’s Cube',
        timings: 'Monday 4:30 – 7:30 PM\nThursday 4:30 – 7:00 PM\nSaturday 10:30 AM – 12:00 PM',
        educator: 'Priya',
        address: 'The Ponds High School, Room Number DG37',
    },
    {
        name: 'Marsden Park',
        courses: 'Abacus, Vedicmath, Chess, Public Speaking/Debating/Creative Writing, Rubik’s Cube',
        timings: 'Tuesday 4:30 – 7:30 PM',
        educator: 'Priya',
        address: 'Hub behind Elara sales centre',
    },
    {
        name: 'Epping',
        courses: 'Abacus, Vedicmath, Chess, Public Speaking/Debating/Creative Writing, Rubik’s Cube',
        timings: 'Friday 6:00 – 7:30 PM',
        educator: 'Priya',
        address: 'Boronia Grove Community Centre',
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
                        <p className="animate-in text-gray-600 text-lg max-w-2xl mx-auto">
                            Explore our current class locations and timings. Choose a centre that works for you and book a free
                            trial to experience our programs.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {centres.map((centre) => (
                            <div
                                key={centre.name}
                                className="animate-in bg-gradient-to-br from-[#b7e1ed] to-[#e5d1a9d0] rounded-2xl shadow-md hover:shadow-xl transition-shadow px-6 py-6 flex flex-col justify-between"
                            >
                                <div>
                                    <h2 className="font-heading font-bold text-xl text-navy-900 mb-4 text-center">
                                        {centre.name}
                                    </h2>
                                    <div className="space-y-3 text-sm text-gray-700">
                                        <div>
                                            <p className="font-semibold">Courses:</p>
                                            <p>{centre.courses}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Class Timings:</p>
                                            <p className="whitespace-pre-line">{centre.timings}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Educator:</p>
                                            <p>{centre.educator}</p>
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
                                        className="bg-gradient-to-r from-[#ff0044] via-[#ff3366] to-[#3b3bff] hover:brightness-105 text-white font-semibold rounded-full px-6"
                                    >
                                        <Link to="/contact">Apply Now</Link>
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



