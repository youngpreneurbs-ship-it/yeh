import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Heart, Lightbulb, Users, Award, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function About() {
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

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We believe every child has creative potential waiting to be unlocked.',
      color: 'bg-[#3db2d6]',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Learning is most effective when driven by genuine curiosity and enthusiasm.',
      color: 'bg-[#16a56b]',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Great ideas emerge when diverse minds work together toward common goals.',
      color: 'bg-[#f5a200]',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'We measure success by the real-world skills students develop.',
      color: 'bg-[#d956a8]',
    },
  ];

  const stats = [
    { number: '5,000+', label: 'Students Empowered', color: 'bg-[#3db2d6]' },
    { number: '150+', label: 'Schools Partnered', color: 'bg-[#d956a8]' },
    { number: '50+', label: 'Expert Instructors', color: 'bg-[#16a56b]' },
    { number: '98%', label: 'Parent Satisfaction', color: 'bg-[#f5a200]' },
  ]


  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      bio: 'Former product manager at Google, passionate about youth education.',
      image: '/images/instructor_portrait.jpg',
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Curriculum',
      bio: 'EdTech specialist with 15 years of experience in entrepreneurship education.',
      image: '/images/instructor_group.jpg',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Instructor',
      bio: 'Former startup founder, now inspiring the next generation of entrepreneurs.',
      image: '/images/15.jpg',
    },
  ];


  return (
    <div ref={sectionRef} className=" min-h-screen ">
      {/* Hero Section - matches Home CTA gradient */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#4846b6db]  to-[#801280b0] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="animate-in font-heading font-black text-4xl sm:text-5xl lg:text-6xl mb-6">
              <span className="bg-gradient-to-r from-[#3db2d6]  to-[#f5a20095] bg-clip-text text-transparent font-black">About Young Entrepreneurs Hub</span>
            </h1>
            <p className="animate-in text-gray-300 text-lg lg:text-xl">
              We're on a mission to empower the next generation with the skills,
              mindset, and confidence to turn their ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - same gradient as Home "What You'll Learn" */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#3db2d695] via-[#16a56c32] to-[#f5a20095]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-lg bg-gradient-to-br from-white to-navy-50/40">
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Young Entrepreneurs Hub was founded in 2018 with a simple belief:
                every child has the potential to create something amazing. We
                exist to nurture that potential through hands-on, project-based
                learning that mirrors the real world of innovation and business.
              </p>
              <p className="text-gray-600 text-lg">
                Our programs don't just teach theory—they put students in the
                driver's seat of their own learning journey. From ideation to
                pitching, our students experience the full cycle of bringing an
                idea to life.
              </p>
            </div>
            <div className="animate-in grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 border border-gray-200 shadow-lg text-center text-white  ${stat.color}`}
                >
                  <div className="font-heading font-black text-3xl lg:text-4xl mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/90 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - same bg as Home programs section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-navy-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="animate-in text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`animate-in rounded-2xl p-6 border border-gray-200 shadow-lg bg-gradient-to-br hover:shadow-xl transition-shadow ${value.color}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${value.color}`}>
                  <value.icon className="h-6 w-6 text-navy-700" />
                </div>
                <h3 className="font-heading font-bold text-xl text-black mb-2">
                  {value.title}
                </h3>
                <p className="text-black/80 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - same gradient as Home age tracks */}
      <section className="py-20 lg:py-32 bg-gradient-to-l from-[#f5a30051] to-[#2cdfdf7f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="animate-in text-gray-600 text-lg max-w-2xl mx-auto">
              Passionate educators, experienced entrepreneurs, and dedicated
              mentors.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="animate-in bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-navy-50/30"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-navy-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-navy-600 font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - matches Home curriculum/experience sections */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/school_classroom.jpg"
                alt="Our story"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="animate-in rounded-2xl p-8 lg:p-10 border border-gray-200 bg-gradient-to-br from-[#3db2d6ae] to-[#e65c4f]/30 shadow-lg">
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  It all started with a simple observation: traditional education
                  wasn't preparing kids for the real-world challenges they'd face.
                  While schools taught math and science, they often missed the
                  practical skills of problem-solving, creativity, and resilience.
                </p>
                <p>
                  Our founder, Sarah Chen, left her role at Google to create
                  something different—a place where young people could learn by
                  doing, fail safely, and discover their own potential for
                  innovation.
                </p>
                <p>
                  Today, Young Entrepreneurs Hub has grown into a community of
                  thousands of students, parents, and educators who believe in the
                  power of hands-on learning. We've partnered with schools across
                  the country and continue to expand our reach.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-navy-700">
                  <Award className="h-5 w-5" />
                  <span className="font-medium">Award-winning curriculum</span>
                </div>
                <div className="flex items-center gap-2 text-navy-700">
                  <Globe className="h-5 w-5" />
                  <span className="font-medium">Nationwide presence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
