import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Lightbulb, Search, Rocket, Target, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function CurriculumEntrepreneurship() {
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

  const topicColors = ['bg-[#3db2d6]', 'bg-[#d956a8]', 'bg-[#16a56b]', 'bg-[#f5a200]'];

  const topics = [
    {
      icon: Search,
      title: 'Opportunity Recognition',
      description: 'Learn to spot problems worth solving and identify market gaps.',
    },
    {
      icon: Lightbulb,
      title: 'Idea Validation',
      description: 'Test assumptions and validate ideas before investing time.',
    },
    {
      icon: Target,
      title: 'Business Planning',
      description: 'Create simple business models and plan for success.',
    },
    {
      icon: Rocket,
      title: 'Launch Strategies',
      description: 'Understand how to bring products to market effectively.',
    },
  ];

  const learningOutcomes = [
    'Identify real-world problems and opportunities',
    'Develop and validate business ideas',
    'Create simple business models',
    'Understand basic financial concepts',
    'Plan and execute a mini-launch',
    'Pitch ideas with confidence',
  ];

  return (
    <div ref={sectionRef} className="min-h-screen ">
      {/* Hero - subject gradient */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#3db2d6ae] to-[#e65c4f]/30 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-navy-700" />
                </div>
                <span className="text-navy-700 font-medium">Curriculum</span>
              </div>
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                Entrepreneurship
              </h1>
              <p className="text-gray-700 text-lg mb-8">
                Spot opportunities, validate ideas, plan a launch. Our
                entrepreneurship curriculum teaches students how to turn their
                ideas into real ventures.
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
                src="/images/21.jpg"
                alt="Entrepreneurship"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#3db2d695] via-[#16a56c32] to-[#f5a20095]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
              Topics Covered
            </h2>
            <p className="animate-in text-gray-700 text-lg max-w-2xl mx-auto">
              Core concepts every young entrepreneur needs to know.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <div
                key={index}
                className={`animate-in rounded-2xl p-6 border border-gray-200 shadow-lg text-white ${topicColors[index]}`}
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <topic.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">
                  {topic.title}
                </h3>
                <p className="text-white/90 text-sm">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-navy-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-lg bg-gradient-to-br from-white to-navy-50/40">
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
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/20.jpg"
                alt="Learning outcomes"
                className="w-full h-[400px] object-cover"
              />
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
              Hands-on activities that bring concepts to life.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Problem Journal', description: 'Students keep a journal of problems they observe in daily life, then select one to solve.' },
              { title: 'Idea Pitch', description: 'Create a 2-minute pitch for a new product or service, including target audience and value proposition.' },
              { title: 'Mini Business', description: 'Launch a small venture (like a lemonade stand or craft sale) and track results.' },
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
            <Link to="/curriculum" className="text-gray-600 hover:text-navy-700 transition-colors">
              ← Back to Curriculum
            </Link>
            <Link to="/curriculum/economics" className="text-gray-600 hover:text-navy-700 transition-colors">
              Next: Economics →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
