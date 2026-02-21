import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Lightbulb, TrendingUp, Users, Target, Zap, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const learnRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const ageTracksRef = useRef<HTMLDivElement>(null);
  const curriculumRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const parentsRef = useRef<HTMLDivElement>(null);
  const schoolsRef = useRef<HTMLDivElement>(null);
  const instructorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(
        '.hero-photo',
        { x: '-60vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 1.1, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.hero-content',
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 1.1, ease: 'power2.out', delay: 0.1 }
      );
      gsap.fromTo(
        '.hero-headline',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.3 }
      );
      gsap.fromTo(
        '.hero-card-green',
        { y: '18vh', rotate: -2, opacity: 0 },
        { y: 0, rotate: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.5 }
      );
      gsap.fromTo(
        '.hero-card-yellow',
        { y: '22vh', rotate: 2, opacity: 0 },
        { y: 0, rotate: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.7 }
      );

      // Section animations with ScrollTrigger
      const sections = [
        learnRef,
        programsRef,
        ageTracksRef,
        curriculumRef,
        experienceRef,
        parentsRef,
        schoolsRef,
        instructorsRef,
      ];

      sections.forEach((ref) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current.querySelectorAll('.animate-in'),
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Section 1: Hero */}
      <section
        ref={heroRef}
        className="relative md:pt-20 py-6 lg:pt-0 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2  gap-8 lg:gap-12 items-center w-full py-12 lg:py-0">
            {/* Left Photo Card */}
            <div className="hero-photo relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/hero_team_collab.jpg"
                  alt="Young entrepreneurs collaborating"
                  className="w-full h-[400px] lg:h-[600px] object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="hero-content order-1 lg:order-2 space-y-6">
              <div className="hero-headline space-y-4">
                <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                  <span className="bg-gradient-to-r from-navy-900 via-navy to-navy-800 bg-clip-text text-transparent">Build real skills.</span>
                  <br />
                  <span className="bg-gradient-to-r from-navy to-lime bg-clip-text text-transparent font-black">Launch real ideas.</span>
                </h1>
                <p className="text-gray-600 text-lg lg:text-xl max-w-lg">
                  Entrepreneurship workshops for young people—practical projects,
                  real feedback, and skills that last.
                </p>
              </div>

              {/* Program Cards */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <Link
                  to="/programs/ages-7-11"
                  className="hero-card-green group bg-[#3db2d6] rounded-xl p-5 border border-gray-200 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Lightbulb className="h-10 w-10 text-[#d956a8]" />
                    <ArrowRight className="h-5 w-5 text-[#d956a8] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-1">
                    Programs for ages 7–11
                  </h3>
                  <p className="text-white text-sm">
                    Games, stories, and hands-on builds.
                  </p>
                </Link>

                <Link
                  to="/programs/ages-12-16"
                  className="hero-card-yellow group bg-[#e65c4f] rounded-xl p-5 border border-gray-200 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Zap className="h-10 w-10 text-[#f5a200]" />
                    <ArrowRight className="h-5 w-5 text-[#f5a200] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-1">
                    Programs for ages 12–16
                  </h3>
                  <p className="text-white text-sm">
                    Build a product, pitch it, and iterate.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What You'll Learn */}
      <section
        ref={learnRef}
        className="py-20 lg:py-32 bg-gradient-to-br from-[#3db2d695] via-[#16a56c32] to-[#f5a20095]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content Card */}
            <div className="animate-in bg-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-lg bg-gradient-to-br from-white to-navy-50/40">
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                Learn by building.
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We turn ideas into projects—prototypes, pitches, and plans you
                can actually use. No exams. Just real work, real feedback, and
                real progress.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-navy-900">
                  <div className="w-8 h-8 rounded-full bg-navy-100 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-navy-700" />
                  </div>
                  <span>Prototype fast</span>
                </li>
                <li className="flex items-center gap-3 text-navy-900">
                  <div className="w-8 h-8 rounded-full bg-navy-100 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-navy-700" />
                  </div>
                  <span>Pitch with confidence</span>
                </li>
                <li className="flex items-center gap-3 text-navy-900">
                  <div className="w-8 h-8 rounded-full bg-navy-100 flex items-center justify-center">
                    <Users className="h-4 w-4 text-navy-700" />
                  </div>
                  <span>Work in teams</span>
                </li>
              </ul>
              <Button
                // asChild
                size="lg"
                className=" bg-gradient-to-r from-[#1e4773] to-[#f5a200] hover:bg-[#1e4773] text-white font-medium rounded-lg px-8 "
              >
                <Link to="/curriculum">See the curriculum</Link>
              </Button>
            </div>

            {/* Right Photos */}
            <div className="space-y-6">
              <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/learn_prototype_closeup.jpg"
                  alt="Building prototypes"
                  className="w-full h-[250px] lg:h-[300px] object-cover"
                />
              </div>
              <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/learn_postit_wall.jpg"
                  alt="Team collaboration"
                  className="w-full h-[250px] lg:h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Program Cards */}
      <section
        ref={programsRef}
        className="py-20 lg:py-32 bg-gradient-to-b from-white via-navy-50/20 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Title Card */}
            <div className="animate-in rounded-2xl p-8 lg:p-10 border border-gray-200 bg-gradient-to-br from-[#3db2d6ae] to-[#e65c4f]/30">
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                Choose your track.
              </h2>
              <p className="text-gray-600 text-lg">
                Two levels. One goal: ship something you're proud of.
              </p>
            </div>

            {/* Top Right Photo */}
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/program_group_table.jpg"
                alt="Students collaborating"
                className="w-full h-[250px] lg:h-full max-h-[400px] object-cover"
              />
            </div>

            {/* Bottom Left Photo */}
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/program_presentation.jpg"
                alt="Student presenting"
                className="w-full h-[300px] lg:h-[400px] max-h-[400px] object-cover"
              />
            </div>

            {/* Info Card */}
            <div className="animate-in bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-lg bg-gradient-to-br from-[#f4c30077] to-[#e65c4f]/30">
              <h3 className="font-heading font-bold text-2xl text-navy-900 mb-6">
                What's included
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-navy-700" />
                  Weekly 90-minute sessions
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-navy-700" />
                  Project kits + digital templates
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-navy-700" />
                  Feedback rounds
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-navy-700" />
                  Demo day
                </li>
              </ul>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white bg-gradient-to-bl from-[#1e4773] to-[#f5a200] hover:text-navy-700 font-medium rounded-lg px-6"
              >
                <Link to="/programs">Compare programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Age Tracks */}
      <section
        ref={ageTracksRef}
        className="py-20 lg:py-32 bg-gradient-to-l from-[#f5a30051] ] to-[#2cdfdf7f]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Top Left Photo */}
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/age_younger_crafts.jpg"
                alt="Younger children crafting"
                className="w-full h-[250px] lg:h-full max-h-[400px] object-cover"
              />
            </div>

            {/* Title Card */}
            <div className="animate-in rounded-2xl p-8 lg:p-10 bg-gradient-to-br from-navy-900 via-navy to-navy-800">
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mb-4">
                A pathway for every age.
              </h2>
              <p className="text-gray-300 text-lg">
                Start where you are. Build what matters to you.
              </p>
            </div>

            {/* Green Card - Ages 7-11 */}
            <Link
              to="/programs/ages-7-11"
              className="animate-in group bg-gradient-to-br from-[#6d4ccfb0] to-[#e65c4f]/30 rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading font-bold text-2xl text-navy-900">
                  Ages 7–11
                </h3>
                <ArrowRight className="h-6 w-6 text-navy-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-600 mb-6">
                Foundation level: storytelling, simple builds, teamwork.
              </p>
              <span className="inline-flex items-center gap-2 text-navy-700 font-medium">
                View details <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            {/* Yellow Card - Ages 12-16 */}
            <Link
              to="/programs/ages-12-16"
              className="animate-in group bg-navy-50 rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading font-bold text-2xl text-navy-900">
                  Ages 12–16
                </h3>
                <ArrowRight className="h-6 w-6 text-navy-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-600 mb-6">
                Advanced foundation: research, prototyping, pitching.
              </p>
              <span className="inline-flex items-center gap-2 text-navy-700 font-medium">
                View details <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Curriculum Topics */}
      <section
        ref={curriculumRef}
        className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {/* Title Card */}
            <div className="animate-in rounded-2xl p-8 lg:p-10 border border-gray-200 bg-gradient-to-br from-[#3db2d6ae] to-[#e65c4f]/30">
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                Real-world topics.
              </h2>
              <p className="text-gray-600 text-lg">
                From idea to launch—covering the skills that matter.
              </p>
            </div>

            {/* Photo */}
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/age_older_laptop.jpg"
                alt="Student working on laptop"
                className="w-full h-[250px] lg:h-full max-h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Topic Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              {
                title: 'Entrepreneurship',
                description: 'Spot opportunities, validate ideas, plan a launch.',
                icon: Lightbulb,
                bg: 'bg-[#3db2d6]',
                text: 'text-white',
                link: '/curriculum/entrepreneurship',
              },
              {
                title: 'Economics',
                description: 'Prices, markets, trade-offs, and decision-making.',
                icon: TrendingUp,
                bg: 'bg-[#d956a8] border border-gray-200',
                text: 'text-white',
                link: '/curriculum/economics',
              },
              {
                title: 'Marketing',
                description: 'Messaging, audience, and simple campaigns.',
                icon: Target,
                bg: 'bg-[#16a56b] border border-gray-200',
                text: 'text-white',
                link: '/curriculum/marketing',
              },
              {
                title: 'Design Thinking',
                description: 'Research, prototype, test, improve.',
                icon: BookOpen,
                bg: 'bg-[#6c4ccf] border border-gray-200',
                text: 'text-white',
                link: '/curriculum/design-thinking',
              },
            ].map((topic, index) => (
              <Link
                key={topic.title}
                to={topic.link}
                className={`animate-in group rounded-2xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 ${topic.bg}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <topic.icon
                  className={`h-8 w-8 mb-4 ${topic.text === 'text-white'
                      ? 'text-blue-300'
                      : 'text-navy-700'
                    }`}
                />
                <h3 className={`font-heading font-bold text-xl mb-2 ${topic.text}`}>
                  {topic.title}
                </h3>
                <p
                  className={`text-sm ${topic.text === 'text-white'
                      ? 'text-gray-300'
                      : 'text-gray-600'
                    }`}
                >
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Workshop Experience */}
      <section
        ref={experienceRef}
        className="py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Photo */}
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/experience_presenting.jpg"
                alt="Student presenting"
                className="w-full h-[400px] lg:h-[600px]  object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="animate-in bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-lg bg-gradient-to-br from-[#3db2d6ae] to-[#e65c4f]/30">
                <h2 className="font-heading font-black text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-navy-900 via-navy to-navy-700 bg-clip-text text-transparent">
                  Collaborate. Create. Present.
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Work in small teams. Build a prototype. Pitch it to the room.
                  Get feedback you can use immediately.
                </p>
                <Button
                  asChild
                  className="bg-navy-700 hover:bg-navy-800 text-white font-medium rounded-lg px-8"
                >
                  <Link to="/programs">Watch a demo day clip</Link>
                </Button>
              </div>

              <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/experience_team_smile.jpg"
                  alt="Team smiling"
                  className="w-full h-[250px] lg:h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: For Parents */}
      <section
        ref={parentsRef}
        className="py-20 lg:py-32 bg-gradient-to-b from-[#a03dd695] via-[#16a56c32] to-[#f5a20095]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Photos */}
            <div className="space-y-6">
              <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/parent_reading.jpg"
                  alt="Parent and child reading"
                  className="w-full h-[250px] lg:h-[300px] object-cover"
                />
              </div>
              <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/parent_laptop_help.jpg"
                  alt="Parent helping with laptop"
                  className="w-full h-[300px] lg:h-[350px] object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="animate-in rounded-2xl p-8 lg:p-10 border border-gray-200 bg-white">
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                Built for real life.
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Clear schedules, easy booking, and progress updates you can
                actually read.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-navy-900">
                  <div className="w-8 h-8 rounded-full bg-navy-200 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-navy-700" />
                  </div>
                  <span>Flexible start dates</span>
                </li>
                <li className="flex items-center gap-3 text-navy-900">
                  <div className="w-8 h-8 rounded-full bg-navy-200 flex items-center justify-center">
                    <Users className="h-4 w-4 text-navy-700" />
                  </div>
                  <span>Make-up sessions available</span>
                </li>
                <li className="flex items-center gap-3 text-navy-900">
                  <div className="w-8 h-8 rounded-full bg-navy-200 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-navy-700" />
                  </div>
                  <span>Weekly parent summary</span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#1e4773] to-[#f5a200] hover:bg-[#1e4773] text-white font-medium rounded-lg px-8"
              >
                <Link to="/parents">Ask a question</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: For Schools */}
      <section
        ref={schoolsRef}
        className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-navy-50/20 to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="animate-in rounded-2xl p-8 lg:p-10 bg-gradient-to-br from-navy-900 via-navy to-navy-800">
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mb-6">
                Bring it to your school.
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Term-time programs, holiday intensives, and teacher
                resources—designed to fit the school calendar.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-full bg-navy-700 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-blue-300" />
                  </div>
                  <span>Aligned with learning outcomes</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-full bg-navy-700 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-blue-300" />
                  </div>
                  <span>Materials + training included</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-full bg-navy-700 flex items-center justify-center">
                    <Users className="h-4 w-4 text-blue-300" />
                  </div>
                  <span>Ongoing support</span>
                </li>
              </ul>
              <Button
                asChild
                className="bg-white hover:bg-gray-100 text-navy-900 font-medium rounded-lg px-8"
              >
                <Link to="/schools">Request a proposal</Link>
              </Button>
            </div>

            {/* Right Photos */}
            <div className="space-y-6">
              <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/school_classroom.jpg"
                  alt="School classroom"
                  className="w-full h-[250px] lg:h-[300px] object-cover"
                />
              </div>
              <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/school_teacher_desk.jpg"
                  alt="Teacher helping students"
                  className="w-full h-[250px] lg:h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Instructors */}
      <section
        ref={instructorsRef}
        className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Photo */}
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/instructor_portrait.jpg"
                alt="Instructor portrait"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="animate-in rounded-2xl p-8 lg:p-10 border border-gray-200 bg-gradient-to-br from-navy-50 to-white">
                <h2 className="font-heading font-black text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                  Learn from builders.
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Our instructors are founders, product people, and educators who
                  know how to work with young teams.
                </p>
                <Button
                  asChild
                  className="bg-navy-700 hover:bg-navy-800 text-white font-medium rounded-lg px-8"
                >
                  <Link to="/about">Meet the team</Link>
                </Button>
              </div>

              <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/instructor_group.jpg"
                  alt="Instructor group"
                  className="w-full h-[250px] lg:h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-navy via-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white via-gray-100 to-lime-200 bg-clip-text text-transparent">
            Ready to start building?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Book a free taster session and see what your child can create.
          </p>
          <Button
            asChild
            className="bg-white hover:bg-gray-100 text-navy-900 font-medium rounded-lg px-10 py-6 text-lg"
          >
            <Link to="/contact">Book a free taster</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
