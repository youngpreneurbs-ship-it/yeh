import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Lightbulb, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const curriculumRef = useRef<HTMLDivElement>(null);
  const parentsRef = useRef<HTMLDivElement>(null);
  const schoolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      [aboutRef, programsRef, curriculumRef, parentsRef, schoolsRef].forEach((ref) => {
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
              scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none reverse' },
            }
          );
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Youngpreneurs Business School</title>
        <meta
          name="description"
          content="Entrepreneurship programs for students aged 8–18 in Sydney."
        />
        <link rel="canonical" href="https://youngpreneurbs.com/" />
        <meta
          name="keywords"
          content="Youngpreneurs, business school for kids, entrepreneurship for children, teen entrepreneurship programs, business curriculum for students"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Youngpreneurs Business School"
        />
        <meta
          property="og:description"
          content="Entrepreneurship programs for young people in Sydney, ages 8–18."
        />
        <meta property="og:url" content="https://youngpreneurbs.com/" />
        <meta
          property="og:image"
          content="https://youngpreneurbs.com/images/1.jpeg"
        />
      </Helmet>
      <div className="bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* 1. Hero / Banner */}
      <section ref={heroRef} className="relative md:pt-20 py-6 lg:pt-0 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full  lg:py-0">
            <div className="hero-photo relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl max-h-[300px] md:max-h-[500px]">
                {/* Optional: add hero image e.g. /images/hero_team_collab.jpg */}
                <img src="/images/1.jpeg" alt="Youngpreneurs Business School" className="w-full h-full object-cover" />
              </div>
            </div>
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
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <Link
                  to="/programs"
                  aria-label="View programs for ages 8 to 11"
                  className="hero-card-green group bg-[#3db2d6a9] rounded-xl p-5 border border-gray-200 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Lightbulb className="h-10 w-10 text-[#ffffff]" />
                    <ArrowRight className="h-5 w-5 text-[#d956a8] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-1">Programs for ages 8–11</h3>
                </Link>
                <Link
                  to="/programs"
                  aria-label="View programs for ages 12 to 18"
                  className="hero-card-yellow group bg-[#e65b4faf] rounded-xl p-5 border border-gray-200 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Zap className="h-10 w-10 text-[#ffffff]" />
                    <ArrowRight className="h-5 w-5 text-[#f5a200] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-1">Programs for ages 12–18</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About (teaser + link to About page) */}
      <section ref={aboutRef} className="py-20 lg:py-32 bg-gradient-to-br from-[#3db2d695] via-[#16a56c32] to-[#f5a20095]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/2.jpg"
                alt="Youngpreneurs learning"
                className="w-full h-[300px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="animate-in">
              <h2 className="font-heading font-black text-3xl sm:text-6xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                About
              </h2>
              <p className="text-gray-800 text-lg mb-4 font-bold">
                Building Business Thinking Early — With Structure, Depth, and Purpose
              </p>
              <p className="text-gray-600 text-lg mb-3">
                Youngpreneurs Business School is an academic learning platform designed to introduce
                students aged 8–11 and 12–18 to the fundamentals of entrepreneurship, economics,
                marketing, and design thinking in a structured, age-appropriate, and intellectually meaningful
                way.

              </p>
              <p className="text-gray-600 text-lg mb-3">
                We do not treat business education as a hobby or a short-term activity. At Youngpreneurs,
                students follow a well-designed curriculum, similar in spirit to a business school — but
                adapted carefully for young minds.

              </p>
              <p className="text-gray-600 text-lg mb-3">
                Our goal is not to create entrepreneurs overnight. Our goal is to develop thinking ability,
                decision-making skills, and real-world understanding that benefits students in academics,
                careers, and life.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Programs (short + link to Programs page) */}
      <section ref={programsRef} className="py-20 lg:py-32 bg-gradient-to-b from-white via-navy-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-in">
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                Who Is This Program For?
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Youngpreneurs is designed for:
              </p>
              <ul className="space-y-2 text-gray-600 text-lg mb-6 list-none">
                <li>● Curious students who ask &quot;why&quot; and &quot;how&quot;</li>
                <li>● Learners who enjoy thinking, analysing, and applying ideas</li>
                <li>● Parents who want more than activity-based classes</li>
                <li>● Schools looking for meaningful entrepreneurship education</li>
              </ul>
              <Button asChild size="lg" className="bg-gradient-to-r from-[#1e4773] to-[#f5a200] hover:bg-[#1e4773] text-white font-medium rounded-lg px-8">
                <Link to="/programs" aria-label="View all programs">
                  View all programs <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/3.jpg"
                alt="Programs"
                className="w-full h-[300px] lg:h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Curriculum (short + link to Curriculum page) */}
      <section ref={curriculumRef} className="py-20 lg:py-32 bg-gradient-to-l from-[#f5a30051] to-[#2cdfdf7f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-in relative rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <img
                src="/images/4.jpg"
                alt="Curriculum"
                className="w-full h-[300px] lg:h-[380px] object-cover"
              />
            </div>
            <div className="animate-in order-1 lg:order-2">
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                Curriculum Structure
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                The Youngpreneurs curriculum is divided into 4 core modules, each consisting of 10 structured chapters.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center rounded-full border border-navy-200 bg-navy-50/80 px-4 py-2 text-sm font-semibold text-navy-900 shadow-sm">
                  Module 1: Business Basics
                </span>
                <span className="inline-flex items-center rounded-full border border-navy-200 bg-navy-50/80 px-4 py-2 text-sm font-semibold text-navy-900 shadow-sm">
                  Module 2: Marketing Playbook
                </span>
                <span className="inline-flex items-center rounded-full border border-navy-200 bg-navy-50/80 px-4 py-2 text-sm font-semibold text-navy-900 shadow-sm">
                  Module 3: Business Economics
                </span>
                <span className="inline-flex items-center rounded-full border border-navy-200 bg-navy-50/80 px-4 py-2 text-sm font-semibold text-navy-900 shadow-sm">
                  Module 4: Design Thinking & Innovation
                </span>
              </div>
              <Button asChild size="lg" className="bg-gradient-to-r from-[#1e4773] to-[#f5a200] hover:bg-[#1e4773] text-white font-medium rounded-lg px-8">
                <Link to="/curriculum" aria-label="View full curriculum">
                  View full curriculum <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. For Schools & Institutions + image */}
      <section ref={schoolsRef} className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-navy-50/20 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-in rounded-2xl p-8 lg:p-10 bg-gradient-to-br from-navy-900 via-navy to-navy-800">
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mb-6">
                For Schools & Institutions
              </h2>
              <p className="text-gray-200 text-lg mb-4">
                Youngpreneurs partners with schools to offer:
              </p>
              <ul className="text-gray-400 space-y-2 text-lg mb-6 list-none">
                <li>● Structured entrepreneurship education</li>
                {/* <li>● Curriculum-aligned enrichment programs</li> */}
                <li>● Age-appropriate business learning</li>
                <li>● Concept-driven, application-focused modules</li>
              </ul>
              <p className="text-gray-300 text-xl font-medium mb-2">Programs can be delivered as:</p>
              <ul className="text-gray-400 space-y-2 text-lg mb-8 list-none">
                {/* <li>● Integrated curriculum support</li>
                <li>● Enrichment courses</li> */}
                <li>● After-school programs</li>
                <li>● Community Centre programs</li>
              </ul>

            </div>
            <div className="animate-in space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/5.jpg"
                  alt="School classroom"
                  className="w-full h-[250px] lg:h-[430px] object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-navy via-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white via-gray-100 to-lime-200 bg-clip-text text-transparent">
            Ready to learn more?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Submit an Expression Of Interest to learn more about our programs.
          </p>
          <Button asChild className="bg-white hover:bg-gray-100 text-navy-900 font-medium rounded-lg px-10 py-6 text-lg">
            <Link to="/eoi" aria-label="Submit an Expression Of Interest">
              Submit an Expression Of Interest
            </Link>
          </Button>
        </div>
      </section>
    </div>
    </>
  );
}
