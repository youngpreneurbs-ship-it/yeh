import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle, BookOpen, Users, Zap, Award, School, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function Schools() {
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

  const offerings = [
    {
      icon: Calendar,
      title: 'Term-Time Programs',
      description:
        'Weekly sessions that align with the school calendar, providing consistent learning throughout the term.',
    },
    {
      icon: Zap,
      title: 'Holiday Intensives',
      description:
        'Condensed programs during school breaks for immersive learning experiences.',
    },
    {
      icon: BookOpen,
      title: 'Teacher Resources',
      description:
        'Comprehensive materials and training to support educators in teaching entrepreneurship.',
    },
    {
      icon: Users,
      title: 'Professional Development',
      description:
        'Training sessions for teachers to build their own entrepreneurship education skills.',
    },
  ];

  const benefits = [
    'Aligned with learning outcomes',
    'Materials + training included',
    'Ongoing support',
    'Flexible scheduling',
    'Progress tracking',
    'Demo day events',
  ];

  const partners = [
    'Lincoln Elementary',
    'Roosevelt Middle School',
    'Washington High',
    'Oakwood Academy',
    'Maple Valley School',
    'Riverside Prep',
  ];

  return (
    <div ref={sectionRef} className="bg-white min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-20  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-navy-900 mb-6">
                Bring it to <span className="bg-gradient-to-r from-navy to-lime bg-clip-text text-transparent font-black">your school.</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Term-time programs, holiday intensives, and teacher
                resources—designed to fit the school calendar and enhance your
                curriculum.
              </p>
              <Button
                asChild
                className="bg-navy-700 hover:bg-navy-800 text-white font-medium rounded-lg px-8"
              >
                <Link to="/contact">
                  Request a proposal <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/school_classroom.jpg"
                alt="School classroom"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl text-navy-900 mb-4">
              What We Offer
            </h2>
            <p className="animate-in text-gray-600 text-lg max-w-2xl mx-auto">
              Flexible programs designed to integrate seamlessly with your school.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="animate-in bg-white rounded-2xl p-6 border border-gray-200 shadow-md"
              >
                <div className="w-14 h-14 rounded-xl bg-navy-100 flex items-center justify-center mb-4">
                  <offering.icon className="h-7 w-7 text-navy-700" />
                </div>
                <h3 className="font-heading font-bold text-lg text-navy-900 mb-2">
                  {offering.title}
                </h3>
                <p className="text-gray-600 text-sm">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/school_teacher_desk.jpg"
                alt="Teacher with students"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="animate-in">
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-navy-900 mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We provide everything you need to bring entrepreneurship education
                to your students.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-navy-900"
                  >
                    <CheckCircle className="h-5 w-5 text-navy-600 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl text-navy-900 mb-4">
              How It Works
            </h2>
            <p className="animate-in text-gray-600 text-lg max-w-2xl mx-auto">
              Getting started is easy. Here's what to expect.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Initial Consultation',
                description:
                  'We discuss your goals, schedule, and how we can best support your school.',
              },
              {
                step: '2',
                title: 'Custom Proposal',
                description:
                  'We create a tailored program proposal based on your specific needs.',
              },
              {
                step: '3',
                title: 'Teacher Training',
                description:
                  'We train your staff on our curriculum and teaching methods.',
              },
              {
                step: '4',
                title: 'Program Launch',
                description:
                  'We launch the program with ongoing support and regular check-ins.',
              },
            ].map((item, index) => (
              <div key={index} className="animate-in text-center">
                <div className="w-16 h-16 rounded-full bg-navy-700 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-heading font-bold text-xl">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Schools */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl text-navy-900 mb-4">
              Schools We Work With
            </h2>
            <p className="animate-in text-gray-600 text-lg max-w-2xl mx-auto">
              Proud partners with leading educational institutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="animate-in bg-gray-50 rounded-xl p-6 border border-gray-200 flex items-center justify-center"
              >
                <div className="flex items-center gap-3">
                  <School className="h-5 w-5 text-navy-600" />
                  <span className="text-navy-900 font-medium">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl text-white mb-6">
            Ready to bring entrepreneurship to your school?
          </h2>
          <p className="animate-in text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can work together to empower your students with
            entrepreneurial skills.
          </p>
          <div className="animate-in flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-navy-900 font-medium rounded-lg px-8"
            >
              <Link to="/contact">Request a proposal</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/30  hover:bg-white/10 font-medium rounded-lg px-8"
            >
              <Link to="/contact">Schedule a call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
