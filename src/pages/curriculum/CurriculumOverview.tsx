import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Lightbulb, TrendingUp, Target, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function CurriculumOverview() {
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

  const subjects = [
    {
      icon: Lightbulb,
      title: 'Entrepreneurship',
      description:
        'Spot opportunities, validate ideas, plan a launch. Learn the fundamentals of starting and running a venture.',
      bg: 'bg-[#3db2d6]',
      link: '/curriculum/entrepreneurship',
    },
    {
      icon: TrendingUp,
      title: 'Economics',
      description:
        'Prices, markets, trade-offs, and decision-making. Understand how economies work and make informed choices.',
      bg: 'bg-[#d956a8]',
      link: '/curriculum/economics',
    },
    {
      icon: Target,
      title: 'Marketing',
      description:
        'Messaging, audience, and simple campaigns. Learn to communicate value and reach the right people.',
      bg: 'bg-[#16a56b]',
      link: '/curriculum/marketing',
    },
    {
      icon: BookOpen,
      title: 'Design Thinking',
      description:
        'Research, prototype, test, improve. A human-centered approach to solving complex problems.',
      bg: 'bg-[#6c4ccf]',
      link: '/curriculum/design-thinking',
    },
  ];

  const approach = [
    {
      title: 'Learn by Doing',
      description:
        'Our curriculum is built around hands-on projects, not lectures. Students apply concepts immediately.',
    },
    {
      title: 'Real-World Relevance',
      description:
        'Every lesson connects to real scenarios students can relate to and learn from.',
    },
    {
      title: 'Collaborative Learning',
      description:
        'Students work in teams, learning from each other and building social skills.',
    },
    {
      title: 'Iterative Improvement',
      description:
        'Feedback loops are built into every project, teaching resilience and growth mindset.',
    },
  ];

  return (
    <div ref={sectionRef} className=" min-h-screen">
      {/* Hero - matches Programs/About */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#4846b6db]  to-[#801280b0] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="animate-in font-heading font-black text-4xl sm:text-5xl lg:text-6xl mb-6">
              Our <span className="bg-gradient-to-r from-[#91b542]  to-[#f5a20095] bg-clip-text text-transparent font-black">Curriculum</span>
            </h1>
            <p className="animate-in text-gray-300 text-lg lg:text-xl">
              From idea to launch—covering the skills that matter. Our
              comprehensive curriculum prepares young people for the challenges
              and opportunities of the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#3db2d695] via-[#16a56c32] to-[#f5a20095]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
              Core Subjects
            </h2>
            <p className="animate-in text-gray-700 text-lg max-w-2xl mx-auto">
              Four pillars of entrepreneurial education.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <Link
                key={index}
                to={subject.link}
                className={`animate-in group rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-white ${subject.bg}`}
              >
                <subject.icon className="h-10 w-10 mb-4 text-white/90" />
                <h3 className="font-heading font-bold text-xl mb-2">
                  {subject.title}
                </h3>
                <p className="text-sm mb-4 text-white/90">
                  {subject.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-navy-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-lg bg-gradient-to-br from-white to-navy-50/40">
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                Our Teaching Approach
              </h2>
              <div className="space-y-6">
                {approach.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-navy-700 font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-navy-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/learn_postit_wall.jpg"
                alt="Teaching approach"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Framework */}
      <section className="py-20 lg:py-32 bg-gradient-to-l from-[#f5a30051] to-[#2cdfdf7f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
              Skills Framework
            </h2>
            <p className="animate-in text-gray-700 text-lg max-w-2xl mx-auto">
              Our curriculum develops a comprehensive set of skills.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: 'Cognitive Skills', skills: ['Critical thinking', 'Problem-solving', 'Creativity', 'Decision-making'] },
              { category: 'Social Skills', skills: ['Communication', 'Collaboration', 'Leadership', 'Empathy'] },
              { category: 'Practical Skills', skills: ['Research', 'Prototyping', 'Presentation', 'Project management'] },
              { category: 'Business Skills', skills: ['Market analysis', 'Financial literacy', 'Strategic planning', 'Customer focus'] },
              { category: 'Personal Skills', skills: ['Resilience', 'Self-confidence', 'Time management', 'Goal setting'] },
              { category: 'Technical Skills', skills: ['Digital tools', 'Data analysis', 'Design basics', 'Documentation'] },
            ].map((category, index) => (
              <div
                key={index}
                className="animate-in rounded-2xl p-6 border border-gray-200 shadow-lg bg-gradient-to-br from-white to-navy-50/40"
              >
                <h3 className="font-heading font-bold text-lg text-navy-900 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, sIndex) => (
                    <li key={sIndex} className="flex items-center gap-2 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-navy-600" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-navy via-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white via-gray-100 to-lime-200 bg-clip-text text-transparent">
            Explore our subjects in depth
          </h2>
          <p className="animate-in text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Click on any subject above to learn more about what students will
            learn.
          </p>
        </div>
      </section>
    </div>
  );
}
