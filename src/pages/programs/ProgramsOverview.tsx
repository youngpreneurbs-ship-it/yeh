import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Clock, Package, MessageCircle, Trophy, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function ProgramsOverview() {
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

  const features = [
    {
      icon: Clock,
      title: 'Weekly 90-minute sessions',
      description: 'Consistent, focused learning that fits busy schedules.',
    },
    {
      icon: Package,
      title: 'Project kits + digital templates',
      description: 'Everything needed to bring ideas to life.',
    },
    {
      icon: MessageCircle,
      title: 'Feedback rounds',
      description: 'Constructive input to refine and improve projects.',
    },
    {
      icon: Trophy,
      title: 'Demo day',
      description: 'Celebrate achievements and showcase work.',
    },
  ];

  const programs = [
    {
      title: 'Foundation Level',
      age: 'Ages 7–11',
      description:
        'Introduction to entrepreneurship through games, stories, and hands-on builds. Students learn teamwork, creativity, and basic business concepts.',
      features: [
        'Story-based learning',
        'Simple prototyping',
        'Team collaboration',
        'Creative problem-solving',
      ],
      bg: 'bg-white border border-gray-200',
      link: '/programs/ages-7-11',
    },
    {
      title: 'Advanced Foundation',
      age: 'Ages 12–16',
      description:
        'Deeper dive into entrepreneurship with research, prototyping, and pitching. Students build real products and present to audiences.',
      features: [
        'Market research',
        'Product prototyping',
        'Pitch development',
        'Business modeling',
      ],
      bg: 'bg-navy-50 border border-gray-200',
      link: '/programs/ages-12-16',
    },
  ];

  return (
    <div ref={sectionRef} className="bg-navy min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="animate-in font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Our <span className="bg-gradient-to-r from-yellow-400 to-lime-500 bg-clip-text text-transparent font-black">Programs</span>
            </h1>
            <p className="animate-in text-white/80 text-lg lg:text-xl">
              Two levels designed to meet students where they are and take them
              where they want to go.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Comparison */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`animate-in rounded-2xl p-8 lg:p-10 shadow-md ${program.bg}`}
              >
                <div className="mb-6">
                  <span className="inline-block bg-navy-100 text-navy-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
                    {program.age}
                  </span>
                  <h2 className="font-heading font-black text-2xl lg:text-3xl text-navy-900 mb-4">
                    {program.title}
                  </h2>
                  <p className="text-gray-600">{program.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle className="h-5 w-5 text-navy-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="bg-navy-700 hover:bg-navy-800 text-white font-medium rounded-lg px-8"
                >
                  <Link to={program.link}>
                    Learn more <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl text-navy-900 mb-4">
              What's Included
            </h2>
            <p className="animate-in text-gray-600 text-lg max-w-2xl mx-auto">
              Every program comes with everything students need to succeed.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-in bg-white rounded-2xl p-6 border border-gray-200 shadow-md text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-navy-100 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-navy-700" />
                </div>
                <h3 className="font-heading font-bold text-lg text-navy-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-navy-900 mb-6">
                Program Structure
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-navy-900 mb-1">
                      Discovery Phase
                    </h3>
                    <p className="text-gray-600">
                      Students explore problems they're passionate about solving
                      and form teams.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-navy-900 mb-1">
                      Ideation & Research
                    </h3>
                    <p className="text-gray-600">
                      Brainstorming solutions, conducting market research, and
                      validating ideas.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-navy-900 mb-1">
                      Prototyping
                    </h3>
                    <p className="text-gray-600">
                      Building minimum viable products and testing with real
                      users.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-navy-900 mb-1">
                      Pitch & Demo Day
                    </h3>
                    <p className="text-gray-600">
                      Presenting projects to peers, parents, and invited guests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/program_presentation.jpg"
                alt="Program structure"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-lime">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl text-white mb-6">
            Not sure which program is right?
          </h2>
          <p className="animate-in text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation and we'll help you find the perfect fit for
            your child.
          </p>
          <div className="animate-in flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-navy-900 font-medium rounded-lg px-8"
            >
              <Link to="/contact">Book a free taster</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/30  hover:bg-white/10  font-medium rounded-lg px-8"
            >
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
