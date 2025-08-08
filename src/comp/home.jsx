import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from "@/assets/img/icon/logo_hires.webp"
import Autoplay from "embla-carousel-autoplay"
import {
  CalendarCheck,
  BookOpenCheck,
  Brain,
  MessageSquareText,
  Rocket,
  Settings2, Sparkles, Globe, Landmark,
  Users,
  BarChart4,
  Zap,
  Building,
  Eye,
  Handshake,
  Wrench,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card"

// Content //

const products = [
  {
    title: 'School Management System (SMS)',
    headline: 'Streamline Your Daily Operations with Intelligent Automation',
    benefits: [
      'Our SMS is engineered to bring unparalleled efficiency to your school\'s administrative tasks. It features automated attendance, seamless fee & financial management, comprehensive student & teacher records, and an integrated communication hub.',
      'This reduces the administrative burden, frees up valuable staff time, minimizes human error with digitized records, and enhances transparency between the school, parents, and students.'
    ],
    icon: <CalendarCheck className="w-20 h-20 md:w-28 md:h-28 text-primary" />,
  },
  {
    title: 'Learning Management System (LMS)',
    headline: 'Transform Learning into an Engaging & Interactive Journey',
    benefits: [
      'Our LMS creates a dynamic environment with a rich content library of audiobooks, e-books, and videos. Interactive modules and a basic question paper generator empower both students and teachers.',
      'This increases student engagement with multimedia content, provides anytime/anywhere access to learning resources, and fosters deeper understanding by supplementing traditional textbooks.'
    ],
    icon: <BookOpenCheck className="w-20 h-20 md:w-28 md:h-28 text-primary" />,
  },
  {
    title: 'Exam System',
    headline: 'Precise Assessments, Comprehensive Preparation',
    benefits: [
      'Conduct secure online quizzes with automated grading, prepare students for Olympiads with dedicated modules, and gain in-depth performance analytics to track progress.',
      'This ensures objective and fair evaluation, provides instant feedback for targeted improvement, and reduces student anxiety by familiarizing them with online testing environments.'
    ],
    icon: <BarChart4 className="w-20 h-20 md:w-28 md:h-28 text-primary" />,
  },
  {
    title: 'Future Innovations',
    headline: 'AI, AR/VR, and Hologram Integration',
    benefits: [
      'We are pushing the boundaries with AI-powered personalized learning paths and immersive AR/VR/Hologram experiences that bring complex concepts to life through interactive 3D models and virtual field trips.',
      'This offers an unrivaled immersive experience creating unforgettable learning moments, provides true adaptive learning that responds to each student\'s style, and keeps your curriculum on the cutting edge.'
    ],
    icon: <Brain className="w-20 h-20 md:w-28 md:h-28 text-primary" />,
  },
];

const roadmap = [
  {
    title: 'Discover & Connect',
    action:
      'Contact us for a personalized demo. Our experts will understand your school’s unique needs and showcase how Board&Benchers can provide tailored solutions.',
    benefit:
      'Get a clear understanding of our platform’s capabilities and how it aligns with your goals.',
    icon: <MessageSquareText className="w-8 h-8 text-primary flex-shrink-0" />,
  },
  {
    title: 'Smooth Onboarding & Setup',
    action:
      'Our dedicated support team will guide you through the initial setup process, including data migration, user account creation, and system configuration.',
    benefit: 'A hassle-free transition with minimal disruption to your daily operations.',
    icon: <Rocket className="w-8 h-8 text-primary flex-shrink-0" />,
  },
  {
    title: 'Training & Go Live',
    action:
      'We provide comprehensive training sessions for your administrative staff, teachers, and even a brief orientation for parents/students on using the platform.',
    benefit: 'Ensure everyone is comfortable and proficient, maximizing platform adoption and impact from day one.',
    icon: <Users className="w-8 h-8 text-primary flex-shrink-0" />,
  },
  {
    title: 'Continuous Support & Optimization',
    action:
      'Access our ongoing customer support, regular updates, and new feature rollouts. We\'re here to ensure your continued success.',
    benefit: 'Peace of mind with reliable support and a platform that constantly evolves with your needs.',
    icon: <Wrench className="w-8 h-8 text-primary flex-shrink-0" />,
  },
];


const features = [
  {
    icon: <Settings2 className="h-10 w-10 text-primary mx-auto" />,
    title: "Unparalleled Efficiency",
    description:
      "Schools operate with unparalleled efficiency, leveraging intelligent automation to free educators and administrators from mundane tasks, allowing them to focus on core educational goals.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary mx-auto" />,
    title: "Personalized & Captivating Learning",
    description:
      "Learning is truly personalized, with students exploring concepts through interactive multimedia, AI-driven adaptive paths, and immersive AR/VR/Hologram experiences that transcend traditional boundaries.",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary mx-auto" />,
    title: "Equitable Access to Tools",
    description:
      "Every student has access to advanced educational tools that foster critical thinking, creativity, and a lifelong passion for discovery, regardless of their location or background.",
  },
  {
    icon: <Landmark className="h-10 w-10 text-primary mx-auto" />,
    title: "The Backbone of Transformation",
    description:
      "Board&Benchers stands as the trusted backbone for educational transformation, continuously innovating to meet and anticipate the evolving needs of learners and educators globally.",
  },
];



gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const main = useRef();
  const productSection = useRef();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.product-panel');

      panels.forEach((panel) => {
        const panelContent = panel.querySelector('.panel-content');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            pin: true,
            pinSpacing: true,
            start: 'top 300px',
            end: '+=80%',
            scrub: 1,
            markers:false
          },
          defaults: { ease: 'power2.inOut' },
        });

        tl
          .fromTo(
            panelContent,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3 }
          )
          .to(
            panelContent,
            { y: -20, opacity: 0, duration: 0.3 },
            '>+=0.5'
          );
      });

      ScrollTrigger.refresh();
    }, main);

    return () => ctx.revert();
  }, []);


  return (
    <div ref={main}>
      {/* Homepage Intro */}
      <section className="text-center max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-6 md:px-0">
        <img src={logo} alt="Logo" className="h-60 w-60" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">The Future of Education is Here</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
          Board&Benchers: Revolutionizing School Management & Learning
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Empowering Schools and Students for a Digital-First Future.
        </p>
        <p className="text-base text-muted-foreground max-w-3xl mx-auto">
          Welcome to Board&Benchers, your partner in transforming education. We offer a holistic,
          AI-powered EdTech platform designed to streamline school administration, enrich the learning
          experience, and equip students with 21st-century skills. Discover how we're making education
          more efficient, engaging, and accessible for schools across India.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => scrollToSection('cta')}>Request a Free Demo</Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection('products')}>
            Explore Our Solutions
          </Button>
        </div>
      </section>

      <div className="space-y-24 md:space-y-32 px-6 md:px-20 py-16">
        {/* About Us */}
        <section className=" mx-auto text-center">
          <Building className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Innovating Education, One School at a Time</h2>
          <p className="text-xl text-muted-foreground mb-6">Building the Future of Learning & Administration Together.</p>
          <div className="text-left text-muted-foreground space-y-4 max-w-3xl mx-auto">
            <p>
              At Board&Benchers, we are driven by a simple yet powerful belief: every school and every student deserves access to technology that makes education better. We recognized the significant challenges faced by small and mid-level schools in India – from the burdens of inefficient manual processes to the critical need for engaging, personalized learning experiences.
            </p>
            <p>
              Our journey began with a clear vision: to bridge these gaps. We set out to create a comprehensive EdTech ecosystem that not only simplifies the complexities of daily school management but also transforms how students learn and prepare for the future.
            </p>
            <div className="p-6 bg-card rounded-xl shadow">
              <h3 className="font-semibold text-lg text-foreground mb-2">Our Mission:</h3>
              <p>
                Our mission is to empower educational institutions with an integrated, intelligent platform that fosters administrative efficiency, enhances teaching effectiveness, and delivers personalized, immersive learning experiences for students, preparing them to thrive in a rapidly evolving world.
              </p>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="w-full max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              A Seamless, Engaging, and Empowered Educational Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground">Shaping Tomorrow's Classrooms</p>
          </div>

          <Carousel
            plugins={[
              Autoplay({
                delay: 2000, stopOnMouseEnter: true
              }),
            ]}
            className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2">
                  <div className="p-4">
                    <Card className="aspect-[16/9] flex items-center justify-center">
                      <CardContent className="p-6 text-center space-y-3">
                        <div className="flex justify-center">{feature.icon}</div>
                        <h4 className="text-xl font-semibold text-foreground">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </div>

      {/* Products Section */}
      <section id="products" ref={productSection} className="relative">
        <div className="text-center pt-16 pb-12 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Integrated EdTech Ecosystem</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">A Holistic Platform for Next-Generation Education: Simplify Administration, Elevate Learning, & Master Assessment.</p>
        </div>
        {products.map((product, idx) => (
          <div key={idx} className="product-panel w-full flex items-center justify-center">
            <div className="panel-content w-full max-w-7xl mx-auto p-6 md:p-10 flex flex-col lg:flex-row gap-10 items-center">
              <div className="w-full lg:w-1/2">
                <div className="product-image aspect-video bg-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
                  {product.icon}
                </div>
              </div>
              <div className="product-text w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3">{product.title}</h3>
                <h4 className="text-lg md:text-xl font-semibold text-primary">{product.headline}</h4>
                <div className="space-y-3 text-muted-foreground">
                  {product.benefits.map((benefit, bIdx) => (
                    <p key={bIdx}>{benefit}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="space-y-24 md:space-y-32 px-6 md:px-20 py-24">
        {/* How It Works */}
        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Your Seamless Journey with Board&Benchers</h2>
            <p className="text-xl text-muted-foreground">Simple Steps to Transform Your School</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {roadmap.map((step, idx) => (
              <div key={idx} className="p-6 rounded-xl shadow-md bg-card border">
                <div className="flex items-center gap-4 mb-4">
                  {step.icon}
                  <h4 className="text-xl font-semibold">Step {idx + 1}: {step.title}</h4>
                </div>
                <p className="text-muted-foreground mb-2"><strong>Action:</strong> {step.action}</p>
                <p className="text-muted-foreground"><strong>Benefit:</strong> {step.benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Strategic Alliances: Powering Innovation</h2>
            <p className="text-xl text-muted-foreground">Building a Stronger EdTech Ecosystem Together</p>
          </div>
          <div className="bg-card p-8 rounded-2xl shadow-md border max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-2">Technical Development Partner</h3>
            <h4 className="text-lg font-medium text-primary mb-4">[Technical Partner Company Name]</h4>
            <div className="space-y-4 text-muted-foreground">
              <p>We've partnered with [Technical Partner Company Name], a leading software development firm that brings exceptional expertise in full-stack development, cloud infrastructure, and AI engineering. This vital partnership provides us with a dedicated pool of highly skilled developers who accelerate our product development, ensure code quality, and drive the implementation of our advanced features.</p>
              <div>
                <strong className="text-foreground">Benefit for You:</strong>
                <p>This partnership means Board&Benchers benefits from top-tier development talent, allowing us to build a more powerful, reliable, and feature-rich platform for your school, faster and more efficiently.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="text-center py-16">
          <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Revolutionize Your School?</h3>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">Let Board&Benchers be your partner in educational excellence. Take the first step today.</p>
          <Button size="lg" className="px-10 py-6 text-lg">
            Request a Free Demo
          </Button>
        </section>
      </div>
    </div>
  );
}

