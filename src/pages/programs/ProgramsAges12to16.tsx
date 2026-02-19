import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle, TrendingUp, Target, Lightbulb, Presentation, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function ProgramsAges12to16() {
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

  const modules = [
    {
      icon: TrendingUp,
      title: 'Market Research',
      description:
        'Learn to identify opportunities and validate ideas through real-world research.',
    },
    {
      icon: Target,
      title: 'Product Development',
      description:
        'Build functional prototypes and iterate based on user feedback.',
    },
    {
      icon: Lightbulb,
      title: 'Business Modeling',
      description:
        'Understand revenue streams, costs, and creating sustainable ventures.',
    },
    {
      icon: Presentation,
      title: 'Pitch Mastery',
      description:
        'Develop compelling presentations and deliver them with confidence.',
    },
  ];

  const curriculum = [
    {
      week: 'Weeks 1-3',
      title: 'Problem Discovery',
      topics: [
        'Identifying meaningful problems',
        'Customer interviews',
        'Market analysis basics',
      ],
    },
    {
      week: 'Weeks 4-6',
      title: 'Solution Design',
      topics: [
        'Ideation frameworks',
        'Prototype planning',
        'Building MVPs',
      ],
    },
    {
      week: 'Weeks 7-9',
      title: 'Business Foundations',
      topics: [
        'Business model canvas',
        'Pricing strategies',
        'Marketing fundamentals',
      ],
    },
    {
      week: 'Weeks 10-12',
      title: 'Launch & Pitch',
      topics: [
        'Pitch deck creation',
        'Presentation skills',
        'Demo day preparation',
      ],
    },
  ];

  const moduleColors = ['bg-[#6c4ccf]', 'bg-[#e65c4f]', 'bg-[#16a56b]', 'bg-[#f5a200]'];

  return (
    <div ref={sectionRef} className=" min-h-screen ">
      {/* Hero - matches ProgramsOverview Advanced card */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#6d4ccfb0] to-[#e65c4f]/30 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
              <span className="inline-block bg-white/90 text-navy-700 text-sm font-medium px-4 py-1 rounded-full mb-6">
                Advanced Foundation
              </span>
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mb-6">
                <span className="bg-gradient-to-r from-navy-900 via-navy to-navy-800 bg-clip-text text-transparent">Programs for </span>
                <span className="bg-gradient-to-r from-navy to-lime bg-clip-text text-transparent">Ages 12–16</span>
              </h1>
              <p className="text-gray-700 text-lg mb-8">
                Build a product, pitch it, and iterate. Our advanced foundation
                program gives teens the tools and experience to turn their ideas
                into real ventures.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5 text-navy-600" />
                  <span>12-week program</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5 text-navy-600" />
                  <span>90 min/session</span>
                </div>
              </div>
              <Button
                asChild
                className="bg-gradient-to-r from-[#1e4773] to-[#f5a200] hover:bg-[#1e4773] text-white font-medium rounded-lg px-8"
              >
                <Link to="/contact">
                  Enroll now <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/age_older_laptop.jpg"
                alt="Teen working on laptop"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What They'll Learn */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#3db2d695] via-[#16a56c32] to-[#f5a20095]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
              What They'll Learn
            </h2>
            <p className="animate-in text-gray-700 text-lg max-w-2xl mx-auto">
              Real-world skills that prepare teens for the future of work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`animate-in rounded-2xl p-6 border border-gray-200 shadow-lg text-white ${moduleColors[index]}`}
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <module.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">
                  {module.title}
                </h3>
                <p className="text-white/90 text-sm">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-navy-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
              Curriculum Breakdown
            </h2>
            <p className="animate-in text-gray-600 text-lg max-w-2xl mx-auto">
              A comprehensive 12-week program from concept to launch.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {curriculum.map((phase, index) => (
              <div
                key={index}
                className="animate-in rounded-2xl p-6 border border-gray-200 shadow-lg bg-gradient-to-br from-white to-navy-50/40"
              >
                <span className="inline-block bg-navy-100 text-navy-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {phase.week}
                </span>
                <h3 className="font-heading font-bold text-xl text-navy-900 mb-4">
                  {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.topics.map((topic, tIndex) => (
                    <li
                      key={tIndex}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-navy-600 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Developed */}
      <section className="py-20 lg:py-32 bg-gradient-to-l from-[#f5a30051] to-[#2cdfdf7f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/experience_presenting.jpg"
                alt="Presentation skills"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="animate-in rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-lg bg-gradient-to-br from-white to-navy-50/40">
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                Skills Developed
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Critical thinking',
                  'Research skills',
                  'Data analysis',
                  'Public speaking',
                  'Leadership',
                  'Financial literacy',
                  'Project management',
                  'Networking',
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl p-4 border border-gray-200 bg-white/80"
                  >
                    <CheckCircle className="h-5 w-5 text-navy-600 flex-shrink-0" />
                    <span className="text-navy-900 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonial */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-in rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-lg bg-gradient-to-br from-[#6d4ccfb0] to-[#e65c4f]/30">
            <div className="text-6xl text-navy-400 mb-6">"</div>
            <blockquote className="text-navy-900 text-xl lg:text-2xl mb-6">
              I never thought I could actually build something people would use.
              This program showed me that age doesn't matter—ideas and execution
              do. I'm now working on my second project!
            </blockquote>
            <div className="text-gray-700">
              <p className="font-semibold">— Marcus T.</p>
              <p className="text-sm">14-year-old graduate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-navy via-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white via-gray-100 to-lime-200 bg-clip-text text-transparent">
            Ready to turn ideas into reality?
          </h2>
          <p className="animate-in text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Enroll your teen in our Advanced Foundation program and give them the
            skills to build their future.
          </p>
          <div className="animate-in flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-navy-900 font-medium rounded-lg px-8"
            >
              <Link to="/contact">Enroll now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/30 hover:bg-white/10 text-white font-medium rounded-lg px-8"
            >
              <Link to="/programs">View all programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
