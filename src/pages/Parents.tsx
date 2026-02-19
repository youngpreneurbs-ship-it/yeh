import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar, Mail, MessageSquare, FileText, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

export function Parents() {
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

  const benefits = [
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Multiple session times to fit your family\'s busy schedule.',
    },
    {
      icon: Mail,
      title: 'Weekly Updates',
      description: 'Regular progress reports on your child\'s learning journey.',
    },
    {
      icon: MessageSquare,
      title: 'Open Communication',
      description: 'Direct line to instructors for questions and feedback.',
    },
    {
      icon: FileText,
      title: 'Make-up Sessions',
      description: 'One make-up session per term if your child misses a class.',
    },
  ];

  const faqs = [
    {
      question: 'Do you need prior experience?',
      answer:
        'No. We start with the basics and build up. Our programs are designed for beginners and meet students where they are.',
    },
    {
      question: 'What should my child bring?',
      answer:
        'Just a notebook and a charged device. We provide all project materials, templates, and resources.',
    },
    {
      question: 'Can we try one session first?',
      answer:
        'Yes—we offer free taster sessions so you and your child can experience our program before committing.',
    },
    {
      question: 'How do make-up sessions work?',
      answer:
        'We offer one make-up session per term, subject to availability. Just let us know in advance if your child will miss a class.',
    },
    {
      question: 'What is the class size?',
      answer:
        'We keep classes small (8-12 students) to ensure every child gets personalized attention and support.',
    },
    {
      question: 'How do you measure progress?',
      answer:
        'Students build portfolios of their work, and we provide regular feedback. You\'ll see tangible projects and presentations.',
    },
  ];

  const testimonials = [
    {
      quote:
        "My daughter now talks about 'iteration' at the dinner table. The program has completely changed how she approaches challenges.",
      author: 'Sarah L.',
      role: 'Parent of 11-year-old',
    },
    {
      quote:
        "I was amazed watching my son pitch his idea at demo day. The confidence he's gained is incredible.",
      author: 'Michael R.',
      role: 'Parent of 14-year-old',
    },
    {
      quote:
        'The weekly updates keep me informed, and my daughter loves the hands-on projects. Worth every penny.',
      author: 'Jennifer M.',
      role: 'Parent of 9-year-old',
    },
  ];

  return (
    <div ref={sectionRef} className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(74_52%_51%_/0.08),transparent)]" aria-hidden />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(135deg,transparent_0%,hsl(209_58%_28%_/0.02)_100%)]" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-in space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-navy-100 text-navy-700 font-label font-medium text-sm px-4 py-2">
                For Parents
              </span>
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-navy-900 mb-6 leading-[1.1]">
                Built for <span className="bg-gradient-to-r from-navy to-lime bg-clip-text text-transparent font-black">real life.</span>
              </h1>
              <p className="text-gray-600 text-lg lg:text-xl max-w-xl leading-relaxed">
                Clear schedules, easy booking, and progress updates you can
                actually read. We make it simple for parents to support their
                child's entrepreneurial journey.
              </p>
              <Button
                asChild
                className="bg-navy-700 hover:bg-navy-800 text-white font-medium rounded-xl px-8 py-6 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <Link to="/contact">
                  Ask a question <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="animate-in relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl ring-2 ring-white ring-offset-4 ring-offset-white sm:ring-offset-8">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-navy-900/20 via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src="/images/parent_reading.jpg"
                  alt="Parent and child"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl bg-lime-400/20 -z-10" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 bg-gray-50/80 relative">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,hsl(74_52%_51%_/0.03)_50%,transparent_100%)]" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl text-navy-900 mb-4">
              Parent-Friendly Features
            </h2>
            <p className="animate-in text-gray-600 text-lg max-w-2xl mx-auto">
              We understand busy families. That's why we've designed our programs
              with parents in mind.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-in group bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-card-hover hover:border-lime-200/80 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-navy-100 flex items-center justify-center mb-4 group-hover:bg-lime-100 group-hover:scale-105 transition-all duration-300">
                  <benefit.icon className="h-7 w-7 text-navy-700 group-hover:text-lime-700 transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-lg text-navy-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl text-navy-900 mb-4">
              What Parents Say
            </h2>
            <p className="animate-in text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from families who've experienced the transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="animate-in group relative bg-gray-50/80 rounded-2xl p-6 pl-8 border border-gray-200/80 hover:border-lime-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-lime-400 to-lime-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-lime-500 text-lime-500" />
                  ))}
                </div>
                <p className="text-navy-900 mb-6 leading-relaxed relative">
                  <span className="absolute -left-1 -top-1 font-heading text-4xl text-lime-400/60 leading-none">"</span>
                  <span className="pl-2">{testimonial.quote}"</span>
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-200 flex items-center justify-center font-heading font-bold text-navy-700 text-sm">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-navy-900 font-medium">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-32 bg-gray-50/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl text-navy-900 mb-4">
              Common Questions
            </h2>
            <p className="animate-in text-gray-600 text-lg">
              Everything you need to know about our programs.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="animate-in bg-white rounded-2xl border border-gray-200/80 px-6 shadow-sm hover:shadow-md hover:border-lime-100 transition-all duration-200 data-[state=open]:border-lime-200 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-navy-900 font-heading font-semibold text-left hover:no-underline py-5 hover:text-navy-700 [&[data-state=open]]:text-navy-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-32 bg-navy overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} aria-hidden />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-lime-500/10 to-transparent" aria-hidden />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl text-white mb-6">
            Still have questions?
          </h2>
          <p className="animate-in text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            We're here to help. Reach out and we'll get back to you within 24
            hours.
          </p>
          <div className="animate-in flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-navy-900 font-medium rounded-xl px-8 py-6 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <Link to="/contact">Contact us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60 font-medium rounded-xl px-8 py-6 text-base backdrop-blur-sm transition-all duration-200"
            >
              <Link to="/programs">Explore programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
