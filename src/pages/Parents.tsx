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

  const benefitColors = ['bg-[#3db2d6]', 'bg-[#d956a8]', 'bg-[#16a56b]', 'bg-[#f5a200]'];

  return (
    <div ref={sectionRef} className=" min-h-screen ">
      {/* Hero - same gradient as Home For Parents */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#a03dd695] via-[#16a56c32] to-[#f5a20095]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-in space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 text-navy-700 font-medium text-sm px-4 py-2">
                For Parents
              </span>
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mb-6 leading-[1.1]">
                Built for <span className="bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent font-black">real life.</span>
              </h1>
              <p className="text-gray-700 text-lg lg:text-xl max-w-xl leading-relaxed">
                Clear schedules, easy booking, and progress updates you can
                actually read. We make it simple for parents to support their
                child's entrepreneurial journey.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-[#1e4773] to-[#f5a200] hover:bg-[#1e4773] text-white font-medium rounded-xl px-8 py-6 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <Link to="/contact">
                  Ask a question <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="animate-in relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-navy-900/20 via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src="/images/parent_reading.jpg"
                  alt="Parent and child"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - brand-colored cards */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-navy-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
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
                className={`animate-in rounded-2xl p-6 border border-gray-200 shadow-lg text-white ${benefitColors[index]} hover:shadow-xl transition-shadow`}
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#3db2d695] via-[#16a56c32] to-[#f5a20095]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
              What Parents Say
            </h2>
            <p className="animate-in text-gray-700 text-lg max-w-2xl mx-auto">
              Hear from families who've experienced the transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="animate-in group relative rounded-2xl p-6 pl-8 border border-gray-200 shadow-lg bg-gradient-to-br from-white to-navy-50/40 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3db2d6] to-[#f5a200] opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#f5a200] text-[#f5a200]" />
                  ))}
                </div>
                <p className="text-navy-900 mb-6 leading-relaxed relative">
                  <span className="absolute -left-1 -top-1 font-heading text-4xl text-navy-300 leading-none">"</span>
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
      <section className="py-20 lg:py-32 bg-gradient-to-l from-[#f5a30051] to-[#2cdfdf7f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
              Common Questions
            </h2>
            <p className="animate-in text-gray-700 text-lg">
              Everything you need to know about our programs.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="animate-in rounded-2xl border border-gray-200 px-6 shadow-lg bg-white/90 hover:shadow-xl transition-shadow data-[state=open]:shadow-xl"
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

      {/* CTA - matches Home/About */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-navy via-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white via-gray-100 to-lime-200 bg-clip-text text-transparent">
            Still have questions?
          </h2>
          <p className="animate-in text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            We're here to help. Reach out and we'll get back to you within 24
            hours.
          </p>
          <div className="animate-in flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#1e4773] to-[#f5a200] hover:bg-[#1e4773] text-white font-medium rounded-lg px-8"
            >
              <Link to="/contact">Contact us</Link>
            </Button>
            <Button
              asChild
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-[#1e4773] to-[#f5a200] hover:bg-[#1e4773] text-white font-medium rounded-lg px-8"
            >
              <Link to="/programs">Explore programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
