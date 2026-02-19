import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle, Gamepad2, BookOpen, Users, Star, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function ProgramsAges7to11() {
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
      icon: Gamepad2,
      title: 'Story-Based Learning',
      description:
        'Entrepreneurship concepts taught through engaging stories and characters kids love.',
    },
    {
      icon: BookOpen,
      title: 'Creative Building',
      description:
        'Hands-on activities where students build simple prototypes using craft materials.',
    },
    {
      icon: Users,
      title: 'Teamwork Games',
      description:
        'Fun collaborative exercises that teach communication and cooperation.',
    },
    {
      icon: Star,
      title: 'Idea Celebration',
      description:
        'Every idea is celebrated, building confidence and creative thinking.',
    },
  ];

  const curriculum = [
    {
      week: 'Weeks 1-3',
      title: 'Imagination Station',
      topics: ['What is an entrepreneur?', 'Finding problems to solve', 'Brainstorming ideas'],
    },
    {
      week: 'Weeks 4-6',
      title: 'Build It!',
      topics: ['Creating simple prototypes', 'Testing with friends', 'Getting feedback'],
    },
    {
      week: 'Weeks 7-9',
      title: 'Storytelling Stars',
      topics: ['Creating a pitch', 'Using pictures and props', 'Practice presentations'],
    },
    {
      week: 'Weeks 10-12',
      title: 'Demo Day Prep',
      topics: ['Final project work', 'Rehearsals', 'Showcase preparation'],
    },
  ];

  return (
    <div ref={sectionRef} className="bg-white min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-20  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
              <span className="inline-block bg-navy-100 text-navy-700 text-sm font-medium px-4 py-1 rounded-full mb-6">
                Foundation Level
              </span>
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-navy-900 mb-6">
                Programs for <span className="text-navy-600">Ages 7–11</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Games, stories, and hands-on builds that introduce young minds to
                the exciting world of entrepreneurship. Our foundation level
                program makes learning fun while building essential skills.
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
                className="bg-navy-700 hover:bg-navy-800 text-white font-medium rounded-lg px-8"
              >
                <Link to="/contact">
                  Enroll now <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/age_younger_crafts.jpg"
                alt="Children crafting"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What They'll Learn */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl text-navy-900 mb-4">
              What They'll Learn
            </h2>
            <p className="animate-in text-gray-600 text-lg max-w-2xl mx-auto">
              Age-appropriate activities designed to spark creativity and build confidence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="animate-in bg-white rounded-2xl p-6 border border-gray-200 shadow-md"
              >
                <div className="w-14 h-14 rounded-xl bg-navy-100 flex items-center justify-center mb-4">
                  <module.icon className="h-7 w-7 text-navy-700" />
                </div>
                <h3 className="font-heading font-bold text-lg text-navy-900 mb-2">
                  {module.title}
                </h3>
                <p className="text-gray-600 text-sm">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl text-navy-900 mb-4">
              Curriculum Breakdown
            </h2>
            <p className="animate-in text-gray-600 text-lg max-w-2xl mx-auto">
              A 12-week journey from idea to showcase.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {curriculum.map((phase, index) => (
              <div
                key={index}
                className="animate-in bg-white rounded-2xl p-6 border border-gray-200 shadow-md"
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
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/hero_team_collab.jpg"
                alt="Skills development"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="animate-in">
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-navy-900 mb-6">
                Skills Developed
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Creative thinking',
                  'Problem-solving',
                  'Communication',
                  'Teamwork',
                  'Confidence',
                  'Presentation skills',
                  'Critical thinking',
                  'Resilience',
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200"
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

      {/* Parent Testimonial */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-in bg-navy-50 rounded-2xl p-8 lg:p-12 border border-gray-200">
            <div className="text-6xl text-navy-400 mb-6">"</div>
            <blockquote className="text-navy-900 text-xl lg:text-2xl mb-6">
              My daughter used to be shy about sharing her ideas. After the
              program, she confidently presented her invention to our entire
              family. The transformation was incredible!
            </blockquote>
            <div className="text-gray-600">
              <p className="font-semibold">— Jennifer M.</p>
              <p className="text-sm">Parent of 9-year-old graduate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl text-white mb-6">
            Ready to spark their creativity?
          </h2>
          <p className="animate-in text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Enroll your child in our Foundation Level program and watch them
            discover the joy of creating.
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
              className="border-white/30  hover:bg-white/10 font-medium rounded-lg px-8"
            >
              <Link to="/programs">View all programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
