import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, BookOpen, Search, Lightbulb, Hammer, RotateCcw, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function CurriculumDesignThinking() {
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

  const phaseColors = ['bg-[#6c4ccf]', 'bg-[#3db2d6]', 'bg-[#d956a8]', 'bg-[#16a56b]', 'bg-[#f5a200]'];

  const phases = [
    {
      icon: Search,
      title: 'Empathize',
      description: 'Understand the people you are designing for through research and observation.',
    },
    {
      icon: BookOpen,
      title: 'Define',
      description: 'Clearly articulate the problem you want to solve.',
    },
    {
      icon: Lightbulb,
      title: 'Ideate',
      description: 'Generate a wide range of creative solutions.',
    },
    {
      icon: Hammer,
      title: 'Prototype',
      description: 'Build tangible representations of your ideas.',
    },
    {
      icon: RotateCcw,
      title: 'Test',
      description: 'Get feedback and iterate on your solutions.',
    },
  ];

  const learningOutcomes = [
    'Apply the design thinking process to any problem',
    'Conduct user research and interviews',
    'Synthesize findings into clear problem statements',
    'Generate creative solutions through brainstorming',
    'Build low-fidelity prototypes quickly',
    'Test solutions and iterate based on feedback',
  ];

  return (
    <div ref={sectionRef} className=" min-h-screen ">
      {/* Hero - subject gradient */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#6d4ccfb0] to-[#e65c4f]/30 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-navy-700" />
                </div>
                <span className="text-navy-700 font-medium">Curriculum</span>
              </div>
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                Design Thinking
              </h1>
              <p className="text-gray-700 text-lg mb-8">
                Research, prototype, test, improve. Our design thinking curriculum
                teaches a human-centered approach to solving complex problems
                creatively.
              </p>
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
                src="/images/learn_postit_wall.jpg"
                alt="Design Thinking"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Phases */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#3db2d695] via-[#16a56c32] to-[#f5a20095]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
              The 5 Phases
            </h2>
            <p className="animate-in text-gray-700 text-lg max-w-2xl mx-auto">
              A proven process for creative problem-solving.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`animate-in rounded-2xl p-5 border border-gray-200 shadow-lg text-white ${phaseColors[index]}`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <phase.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-white/80 text-sm font-medium mb-1">
                  Phase {index + 1}
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">
                  {phase.title}
                </h3>
                <p className="text-white/90 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-navy-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <img
                src="/images/learn_prototype_closeup.jpg"
                alt="Learning outcomes"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="animate-in order-1 lg:order-2 rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-lg bg-gradient-to-br from-white to-navy-50/40">
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                Learning Outcomes
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                By the end of this module, students will be able to:
              </p>
              <ul className="space-y-4">
                {learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-center gap-3 text-navy-900">
                    <CheckCircle className="h-5 w-5 text-navy-600 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 lg:py-32 bg-gradient-to-l from-[#f5a30051] to-[#2cdfdf7f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
              Sample Projects
            </h2>
            <p className="animate-in text-gray-700 text-lg max-w-2xl mx-auto">
              Hands-on challenges that apply the design thinking process.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Redesign the Lunch Experience', description: 'Students interview peers about lunch challenges, then design and prototype solutions.' },
              { title: 'User Interview Challenge', description: 'Conduct interviews with real users to understand their needs and pain points.' },
              { title: 'Rapid Prototyping Sprint', description: 'Build and test three different prototypes in one session, iterating based on feedback.' },
            ].map((project, index) => (
              <div
                key={index}
                className="animate-in rounded-2xl p-6 border border-gray-200 shadow-lg bg-gradient-to-br from-white to-navy-50/40"
              >
                <h3 className="font-heading font-bold text-lg text-navy-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-gradient-to-b from-white via-gray-50/30 to-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link to="/curriculum/marketing" className="text-gray-600 hover:text-navy-700 transition-colors">
              ← Previous: Marketing
            </Link>
            <Link to="/curriculum" className="text-gray-600 hover:text-navy-700 transition-colors">
              Back to Curriculum
            </Link>
            <Link to="/programs" className="text-gray-600 hover:text-navy-700 transition-colors">
              Explore Programs →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
