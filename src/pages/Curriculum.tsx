import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    image: '/images/business_basics.jpeg',
    title: 'Module 1: Business Basics',

  },
  {
    image: '/images/marketing_playbook.jpeg',
    title: 'Module 2: Marketing Playbook',
  },
  {
    image: '/images/business_economics.jpeg',
    title: 'Module 3: Business Economics',
  },
  {
    image: '/images/design_thinking_innovation.jpeg',
    title: 'Module 4: Design Thinking & Innovation',
  },
];

export function Curriculum() {
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
    <div ref={sectionRef} className="min-h-screen">
      <section className="relative py-12 lg:py-12 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="text-center">
              <h1 className="animate-in font-heading font-black text-4xl sm:text-5xl lg:text-6xl mb-6">
                <span className="bg-gradient-to-r from-[#91b542] to-[#f5a20095] bg-clip-text text-transparent font-black">Our Curriculum</span>
              </h1>
              <p className="animate-in text-gray-600 t  ext-lg lg:text-xl">
                Four core modules, each with 10 structured chapters. Concept → application → reflection.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Curriculum Structure */}
      <section className="py-12 lg:py-12 bg-gradient-to-br from-[#3db2d695] via-[#16a56c32] to-[#f5a20095]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod, index) => (
              <div
                key={index}
                className={`animate-in  shadow-lg  hover:shadow-xl hover:-translate-y-1 transition-all rounded-md overflow-hidden`}
              >
                {/* <mod.icon className="h-10 w-10 mb-4 text-white/90" />
                <h3 className="font-heading font-bold text-xl mb-2">{mod.title}</h3>
                <p className="text-sm text-white/90 mb-4">{mod.summary}</p>
                <p className="text-white/90 font-medium text-sm mb-2">Topics include:</p>
                <ul className="space-y-1 text-sm text-white/90">
                  {mod.topics.map((t, i) => (
                    <li key={i}>● {t}</li>
                  ))}
                </ul> */}
                <img
                  src={mod?.image || ''}
                  alt={mod?.title}
                  className="w-full h-full object-cover  rounded-md hover:-translate-y-3 transition-all"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* How Learning Happens */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-navy-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-xl">
              <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                How Learning Happens
              </h2>
              <p className="animate-in text-gray-600 text-lg mb-6">
                Youngpreneurs classes are designed to keep students mentally engaged, not passively listening.
              </p>
              <p className="animate-in text-gray-700 font-medium mb-2 text-lg">Each chapter includes:</p>
              <ul className="animate-in space-y-2 text-gray-600 text-lg mb-6 list-none">
                <li>● Clear conceptual explanations</li>
                <li>● Real-life and age-appropriate case studies</li>
                <li>● Role-play activities to practise decision-making</li>
                <li>● Thinking-based classwork</li>
                <li>● Home activities that apply learning to daily life</li>
              </ul>
              <p className="animate-in text-gray-600 text-lg">
                Students are encouraged to explain their thinking, not memorise answers.
              </p>
            </div>
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/learn_postit_wall.jpg"
                alt="How learning happens"
                className="w-full h-[300px] lg:h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Role Plays, Case Studies & Applied Learning */}
      <section className="py-20 lg:py-32 bg-gradient-to-l from-[#f5a30051] to-[#2cdfdf7f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <img
                src="/images/experience_team_smile.jpg"
                alt="Role plays and applied learning"
                className="w-full h-[300px] lg:h-[380px] object-cover"
              />
            </div>
            <div className="max-w-xl order-1 lg:order-2">
              <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                Role Plays, Case Studies & Applied Learning
              </h2>
              <p className="animate-in text-gray-600 text-lg mb-4">
                Learning is reinforced through:
              </p>
              <ul className="animate-in space-y-2 text-gray-600 text-lg mb-6 list-none">
                <li>● Role plays where students take on business roles</li>
                <li>● Case studies based on realistic scenarios</li>
                <li>● Decision-making exercises with multiple outcomes</li>
                <li>● Application-based tasks instead of rote worksheets</li>
              </ul>
              <p className="animate-in text-gray-600 text-lg">
                These methods help students understand consequences, trade-offs, and reasoning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classwork & Home Activities */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-xl order-2 lg:order-1">
              <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                Classwork & Home Activities
              </h2>
              <p className="animate-in text-gray-600 text-lg mb-4">
                Our classwork and homework are designed to be:
              </p>
              <ul className="animate-in space-y-2 text-gray-600 text-lg mb-6 list-none">
                <li>● Thinking-oriented, not repetitive</li>
                <li>● Open-ended where appropriate</li>
                <li>● Connected to real-life situations</li>
                <li>● Encouraging discussion at home</li>
              </ul>
              <p className="animate-in text-gray-600 text-lg">
                This ensures learning continues beyond the classroom without feeling like extra burden.
              </p>
            </div>
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg order-1 lg:order-2">
              <img
                src="/images/parent_laptop_help.jpg"
                alt="Classwork and home activities"
                className="w-full h-[300px] lg:h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Students Develop */}
      <section className="py-20 lg:py-32 bg-gradient-to-l from-[#f5a30051] to-[#2cdfdf7f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-xl">
              <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                Skills Students Develop
              </h2>
              <p className="animate-in text-gray-600 text-lg mb-4">
                Through the program, students develop:
              </p>
              <ul className="animate-in space-y-2 text-gray-600 text-lg mb-6 list-none">
                <li>● Analytical and logical thinking</li>
                <li>● Problem identification and solution design</li>
                <li>● Communication and articulation skills</li>
                <li>● Confidence in decision-making</li>
                <li>● Ethical awareness</li>
                <li>● Real-world understanding of systems</li>
              </ul>
              <p className="animate-in text-gray-600 text-lg">
                These skills support academic performance and future readiness.
              </p>
            </div>
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/experience_presenting.jpg"
                alt="Skills students develop"
                className="w-full h-[300px] lg:h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-navy via-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white via-gray-100 to-lime-200 bg-clip-text text-transparent">
            Ready to start building?
          </h2>
          <p className="animate-in text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Book a free trial session and see what your child can create.
          </p>
          <Button asChild className="bg-white hover:bg-gray-100 text-navy-900 font-medium rounded-lg px-8">
            <Link to="/contact">Book a free trial</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
