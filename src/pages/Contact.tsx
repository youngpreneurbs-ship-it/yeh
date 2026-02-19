import { useEffect, useRef, useState } from 'react';
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
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 014-2201',
      href: 'tel:+15550142201',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon–Fri, 9am–5pm',
      href: null,
    },
  ];

  return (
    <div ref={sectionRef} className="bg-navy min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-20  md:py-32 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="animate-in font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Let's <span className="">build something.</span>
            </h1>
            <p className="animate-in text-white/80 text-lg lg:text-xl">
              Book a free taster session or ask us anything. We reply within 24
              hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-in">
              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-navy-700" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-navy-900 mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you within 24
                      hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading font-bold text-2xl text-navy-900 mb-6">
                      Send us a message
                    </h2>
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-navy-900">
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            required
                            className="border-gray-200 focus:border-navy-700"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-navy-900">
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            required
                            className="border-gray-200 focus:border-navy-700"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-navy-900">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="border-gray-200 focus:border-navy-700"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-navy-900">
                          Phone (optional)
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="border-gray-200 focus:border-navy-700"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="interest" className="text-navy-900">
                          I'm interested in
                        </Label>
                        <Select
                          value={interest}
                          onValueChange={setInterest}
                        >
                          <SelectTrigger className="border-gray-200 focus:border-navy-700">
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
                        <Label htmlFor="message" className="text-navy-900">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your child or your questions..."
                          rows={4}
                          className="border-gray-200 focus:border-navy-700 resize-none"
                        />
                      </div>

                      {submitError && (
                        <p className="text-sm text-red-600">{submitError}</p>
                      )}

                      <Button
                        type="submit"
                        disabled={isSending}
                        className="w-full bg-navy-700 hover:bg-navy-800 text-white font-medium rounded-lg py-6 disabled:opacity-70"
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

            {/* Contact Info */}
            <div className="animate-in space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl text-navy-900 mb-6">
                  Get in touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our programs? Want to book a free taster?
                  We'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-navy-700" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-navy-900 font-medium hover:text-navy-700 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-navy-900 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/contact_maker_scene.jpg"
                  alt="Maker scene"
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-in font-heading font-black text-3xl sm:text-4xl text-navy-900 mb-4">
              Quick Links
            </h2>
            <p className="animate-in text-gray-600 text-lg">
              Find what you're looking for faster.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Programs', path: '/programs' },
              { name: 'Curriculum', path: '/curriculum' },
              { name: 'For Parents', path: '/parents' },
              { name: 'For Schools', path: '/schools' },
            ].map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="animate-in bg-gray-50 rounded-xl p-5 border border-gray-200 text-center hover:bg-gray-100 transition-colors"
              >
                <span className="text-navy-900 font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
