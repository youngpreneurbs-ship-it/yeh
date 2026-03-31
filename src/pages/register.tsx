import { CalendarDays, Clock, MapPin, Video } from 'lucide-react';
import { Helmet } from 'react-helmet';

const sessions = [
    {
        title: 'Rouse Hill Town Centre',
        date: '11 Apr',
        time: '12:30 PM - 1:30 PM',
        type: 'In-person',
        location: 'Vinegar Hill Memorial Community Centre ',
        Sublocation: "(Level 2, Rex Money Room)",
        locationLink: "https://maps.app.goo.gl/XT9EdUYh8TPtVWpC8",
        link: 'https://calendly.com/tutorwise2/ybs_openday',
        icon: MapPin,
        cardClass: 'from-[#3db2d695] via-[#16a56c45] to-[#f5a20095]',
        bgImage: "/images/image2.png"
    },
    {
        title: ' Webinar',
        date: '12 Apr',
        time: '5:30 PM - 6:30 PM',
        type: 'Online',
        location: 'Live webinar session',
        Sublocation: "(Google Meet)",

        link: 'https://calendly.com/tutorwise2/ybs-webinar',
        icon: Video,
        cardClass: 'from-[#3db2d695] via-[#1e477340] to-[#d956a895]',
        bgImage: "/images/meet.png"
    },
];

export function Register() {
    return (
        <>
            <Helmet>
                <title>Register | Youngpreneurs</title>
                <meta
                    name="description"
                    content="Register for Youngpreneurs sessions, events, and webinars."
                />
                <link rel="canonical" href="https://youngpreneurbs.com/register" />
            </Helmet>
            <section className="min-h-screen py-12 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-5xl mx-auto mb-12">
                        <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mb-5">
                            <span className="bg-gradient-to-r from-[#3db2d6] to-[#f5a200] bg-clip-text text-transparent">
                                Register for Upcoming Sessions
                            </span>
                        </h1>
                    
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {sessions.map((session) => {
                            const SessionIcon = session.icon;
                            return (
                                <article
                                    key={session.title}
                                    className={`rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-lg bg-gradient-to-br ${session.cardClass}`}
                                >
                                    <div className='relative md:h-80 h-40 w-full'>
                                        <img src={session.bgImage} alt={session.title} className='w-full h-full object-contain rounded-2xl' />
                                    </div>
                                    <div className="inline-flex mt-4 items-center rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-navy-900 mb-4">
                                        {session.type}
                                    </div>
                                    <h2 className="font-heading font-black text-2xl text-navy-900 mb-5">
                                        {session.title}
                                    </h2>

                                    <div className="space-y-3 text-gray-800 mb-8">
                                        <p className="flex items-center gap-2">
                                            <CalendarDays className="h-5 w-5 text-navy-700" />
                                            <span>{session.date}</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Clock className="h-5 w-5 text-navy-700" />
                                            <span>{session.time}</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <SessionIcon className="h-5 w-5 text-navy-700" />
                                            <span>{session.location}</span>
                                        </p>
                                        <p className="flex items-center gap-2 ml-7 ">
                                            <span>{session?.Sublocation}</span>
                                        </p>
                                    </div>

                                    <a
                                        href={session.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Register for ${session.title}`}
                                        className="inline-flex items-center justify-center w-full rounded-lg bg-navy hover:bg-navy-800 px-5 py-3 text-white font-semibold transition-colors"
                                    >
                                        Register Now
                                    </a>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
