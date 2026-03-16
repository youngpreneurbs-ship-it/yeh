import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function Programs() {
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

  const programs = [
    {
      title: 'Foundation ',
      age: 'Ages 8–11',
      learnLabel: 'Students learn:',
      image: '/images/6.jpg',
      description:
        'At this stage, students are introduced to basic business and economic thinking through stories,  discussions, and simple real-life examples.',
      learn: [
        'Understanding business foundations',
        'Identifying customers and markets',
        'Marketing and promotion strategies',
        'Building an online presence',
        'Understanding money and business economics',
        'Learning demand, supply, and pricing',
        'Developing creative problem-solving skills',
        'Launching and presenting business ideas',
      ],
      cardClass: 'bg-gradient-to-br from-[#3db2d6ae] to-[#e65c4f]/30 border border-gray-200',
    },
    {
      title: 'Foundation + Advanced  ',
      age: 'Ages 12–18',
      learnLabel: ' Everything in the Foundation course +',
      image: '/images/7.jpg',
      description:
        'This level is designed for mature learners who can analyse, compare, and reason.',
      learn: [
        'Business fundamentals and economics',
        'Financial planning and management',
        'Marketing strategy and brand development',
        'Digital presence and e-commerce',
        'Operations and supply chain management',
        'Customer insights and market research',
        'Design thinking and innovation',
        'Leadership, ethics, and soft skills',
      ],
      cardClass: 'bg-gradient-to-br from-[#6d4ccfb0] to-[#e65c4f]/30 border border-gray-200',
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen">
      <section className="relative py-12 lg:py-12 bg-[#ffffff] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" ">
            <div className="text-center lg:text-center">
              <h1 className="animate-in font-bold text-navy-900 text-4xl sm:text-5xl lg:text-6xl mb-6">
                <span className="bg-gradient-to-r from-[#3db2d6] to-[#f5a20095] bg-clip-text text-transparent font-black"> Our Programs</span>
              </h1>
              <p className="animate-in text-gray-600 text-lg lg:text-xl">
                Two levels designed to meet students where they are—Foundation (8–11) and Advanced  (12–18).
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Who Is This Program For? */}
      {/* <section className="py-20 lg:py-32 bg-gradient-to-b from-[#cc62e1] via-navy-50/20 to-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-xl">
              <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                Who Is This Program For?
              </h2>
              <p className="animate-in text-gray-600 text-lg mb-4">
                Youngpreneurs is designed for:
              </p>
              <ul className="animate-in space-y-2 text-gray-600 text-lg list-none mb-6">
                <li>● Curious students who ask “why” and “how”</li>
                <li>● Learners who enjoy thinking, analysing, and applying ideas</li>
                <li>● Parents who want more than activity-based classes</li>
                <li>● Schools looking for meaningful entrepreneurship education</li>
              </ul>
              <p className="animate-in text-gray-600 text-lg">
                No prior business knowledge is required. The program builds concepts from the ground up.
              </p>
            </div>
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/learn_postit_wall.jpg"
                alt="Students collaborating"
                className="w-full h-[300px] lg:h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Age Groups & Learning Levels */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#3db2d695] via-[#16a56c32] to-[#f5a20095]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-12 text-center bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
            Age Groups & Learning Levels
          </h2>

          <div className="animate-in grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`rounded-2xl px-4 py-4 lg:px-4 lg:py-6 shadow-lg ${program.cardClass}`}
              >
                <div className="relative rounded-2xl mb-4 overflow-hidden shadow-lg">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-[260px] lg:h-[320px] object-cover"
                  />
                </div>
                <span className="inline-block bg-white/80 text-navy-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
                  {program.age}
                </span>
                <h2 className="font-heading font-black text-2xl lg:text-3xl mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                  {program.title}
                </h2>
                <p className="text-gray-700 mb-6">{program.description}</p>
                <p className="text-gray-700 font-medium mb-2">{program.learnLabel}</p>
                <ul className="space-y-2 mb-6">
                  {program.learn.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-navy-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

   

      <section className="py-20 lg:py-32 bg-gradient-to-br from-navy via-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white via-gray-100 to-lime-200 bg-clip-text text-transparent">
            Not sure which program is right?
          </h2>
          <p className="animate-in text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation and we'll help you find the perfect fit for your child.
          </p>
          <Button asChild className="bg-white hover:bg-gray-100 text-navy-900 font-medium rounded-lg px-8">
            <Link to="/contact">Book a free trial</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
