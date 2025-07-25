import { AlertTriangle, Lightbulb, Sparkles, Users, Target, Brain, Shield } from "lucide-react";
import businessPresentationImage from "@/assets/business-presentation.jpg";
import professionalAssessmentImage from "@/assets/professional-assessment.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Hero Image */}
        <div className="mb-16">
          <img 
            src={businessPresentationImage}
            alt="Professional business presentation showing assessment analytics and team collaboration"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-elegant"
          />
        </div>
        {/* About Us Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">About Us – Authencore Analytics</h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Who We Are */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Who We Are</h3>
            <div className="space-y-4 text-foreground text-lg leading-relaxed">
              <p>
                At Authencore Analytics, we're passionate learners, creators, and digital explorers who believe that everyone deserves access to the tools that unlock self-understanding and personal growth.
              </p>
              <p>
                We are not a team of licensed psychologists, but a small group of developers and educators who've built this platform using AI technologies combined with open-source, research-backed psychological frameworks. Our mission is to bring the science of personality, emotional intelligence, and wellbeing to your fingertips in a way that is practical, insightful, and affordable.
              </p>
            </div>
          </div>

          {/* Why We Built This */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Why We Built This</h3>
            <div className="space-y-4 text-foreground text-lg leading-relaxed">
              <p>
                We know that deep self-insight isn't just for corporate executives or therapy sessions. It's for students finding their path, professionals navigating challenges, and anyone wanting to understand themselves a little better today than yesterday.
              </p>
              <p>
                Our AI-powered assessments are built on validated constructs in psychology such as the Big Five personality traits, emotional intelligence models, and wellbeing frameworks. We combine these with modern technology to make them accessible anytime, anywhere.
              </p>
            </div>
          </div>

          {/* Visual Features Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Professional Assessment Platform</h3>
              <p className="text-foreground text-lg leading-relaxed">
                Our platform combines cutting-edge technology with validated psychological frameworks 
                to deliver professional-grade assessments that help individuals and organizations 
                make informed decisions about personal and professional development.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Brain className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium text-foreground">AI-Powered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium text-foreground">Secure Platform</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium text-foreground">Team Analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium text-foreground">Goal-Oriented</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={professionalAssessmentImage}
                alt="Professional using assessment analytics for business decision making"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Our Promise */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Our Promise</h3>
            <p className="text-foreground text-lg leading-relaxed">
              We promise to always be honest about what our assessments can and cannot do. We're here to empower your personal development journey, not to diagnose or label you.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8 space-y-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              <h3 className="text-2xl font-bold text-destructive">Disclaimer</h3>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Important Note</h4>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  The assessments and reports provided by Authencore Analytics are designed for educational and personal development purposes only. They are not clinical tools and should not be used to diagnose, treat, or manage any mental health condition.
                </p>
                <p>
                  Our results are based on self-reported data and structured using open-source validated psychological frameworks interpreted through AI algorithms. If you have concerns about your mental health or wellbeing, we strongly encourage you to consult a qualified mental health professional or licensed psychologist.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Add-On */}
          <div className="text-center py-8 border-t border-border">
            <div className="flex items-center justify-center gap-2 text-foreground">
              <Sparkles className="w-5 h-5 text-primary" />
              <p className="text-lg font-medium">
                Powered by AI and open-source psychology for human growth and clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;