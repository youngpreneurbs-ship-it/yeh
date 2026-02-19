import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

gsap.registerPlugin(ScrollTrigger);

const EMAILJS_SERVICE_ID = 'service_eldl2of';
const EMAILJS_TEMPLATE_ID = 'template_vpsj3xc';

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [interest, setInterest] = useState('');

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      first_name: (formData.get('firstName') as string) ?? '',
      last_name: (formData.get('lastName') as string) ?? '',
      email: (formData.get('email') as string) ?? '',
      phone: (formData.get('phone') as string) ?? '',
      interest: interest || (formData.get('interest') as string) || '',
      message: (formData.get('message') as string) ?? '',
    };

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      setSubmitError('Email is not configured. Please set VITE_EMAILJS_PUBLIC_KEY.');
      return;
    }

    setIsSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey }
      );
      setIsSubmitted(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setSubmitError('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@younghub.academy',
      href: 'mailto:hello@younghub.academy',
      color: 'bg-[#3db2d6]',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 014-2201',
      href: 'tel:+15550142201',
      color: 'bg-[#d956a8]',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon–Fri, 9am–5pm',
      href: null,
      color: 'bg-[#16a56b]',
    },
  ];

  const quickLinks = [
    { name: 'Programs', path: '/programs', color: 'bg-[#3db2d6]' },
    { name: 'Curriculum', path: '/curriculum', color: 'bg-[#d956a8]' },
    { name: 'For Parents', path: '/parents', color: 'bg-[#16a56b]' },
    { name: 'For Schools', path: '/schools', color: 'bg-[#f5a200]' },
  ];

  return (
    <div ref={sectionRef} className=" min-h-screen ">
      {/* Hero - matches site CTA */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#a03dd695] via-[#16a56c32] to-[#f5a20095]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="animate-in font-heading font-black text-4xl sm:text-5xl lg:text-6xl mb-6">
              Let's <span className="bg-gradient-to-r from-[#3db2d6]  to-[#f5a20095] bg-clip-text text-transparent font-black">build something.</span>
            </h1>
            <p className="animate-in text-black/70 text-lg lg:text-xl">
              Book a free taster session or ask us anything. We reply within 24
              hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - soft gradient + form + info cards */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#3db2d695] via-[#16a56c32] to-[#f5a20095]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-in">
              <div className="rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-xl bg-gradient-to-br from-white to-navy-50/40">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-[#16a56b] flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <CheckCircle className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-navy-900 mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 max-w-sm mx-auto">
                      Thank you for reaching out. We'll get back to you within 24
                      hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading font-black text-2xl mb-6 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                      Send us a message
                    </h2>
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-navy-900 font-medium">
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            required
                            className="border-gray-200 focus:border-navy-600 focus:ring-navy-500/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-navy-900 font-medium">
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            required
                            className="border-gray-200 focus:border-navy-600 focus:ring-navy-500/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-navy-900 font-medium">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="border-gray-200 focus:border-navy-600 focus:ring-navy-500/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-navy-900 font-medium">
                          Phone (optional)
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="border-gray-200 focus:border-navy-600 focus:ring-navy-500/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="interest" className="text-navy-900 font-medium">
                          I'm interested in
                        </Label>
                        <Select
                          value={interest}
                          onValueChange={setInterest}
                        >
                          <SelectTrigger className="border-gray-200 focus:border-navy-600 focus:ring-navy-500/20">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="taster">
                              Free taster session
                            </SelectItem>
                            <SelectItem value="7-11">
                              Program for ages 7-11
                            </SelectItem>
                            <SelectItem value="12-16">
                              Program for ages 12-16
                            </SelectItem>
                            <SelectItem value="school">
                              School partnership
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-navy-900 font-medium">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your child or your questions..."
                          rows={4}
                          className="border-gray-200 focus:border-navy-600 focus:ring-navy-500/20 resize-none"
                        />
                      </div>

                      {submitError && (
                        <p className="text-sm text-red-600 font-medium">{submitError}</p>
                      )}

                      <Button
                        type="submit"
                        disabled={isSending}
                        className="w-full bg-gradient-to-r from-[#1e4773] to-[#f5a200] hover:bg-[#1e4773] text-white font-medium rounded-lg py-6 disabled:opacity-70 shadow-lg"
                      >
                        {isSending ? (
                          'Sending...'
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send message
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact Info - brand-colored cards */}
            <div className="animate-in space-y-8">
              <div className="rounded-2xl p-6 border border-gray-200 shadow-lg bg-gradient-to-br from-white to-navy-50/40">
                <h2 className="font-heading font-black text-2xl mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
                  Get in touch
                </h2>
                <p className="text-gray-600">
                  Have questions about our programs? Want to book a free taster?
                  We'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 rounded-2xl p-5 border border-gray-200 shadow-lg text-white ${item.color} hover:shadow-xl transition-shadow`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:underline transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg ring-2 ring-white/50">
                <img
                  src="/images/contact_maker_scene.jpg"
                  alt="Maker scene"
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links - brand-colored tiles */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-navy-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-navy-900 to-navy bg-clip-text text-transparent">
              Quick Links
            </h2>
            <p className="animate-in text-gray-600 text-lg">
              Find what you're looking for faster.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`animate-in rounded-2xl p-6 text-center text-white font-heading font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all ${link.color}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
