
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Camera, Smartphone, Users, ArrowRight, Mail, Star, Quote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Index = () => {
  const [email, setEmail] = useState({ name: '', gmail: '' });
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      emailjs
        .send(
          'service_i9a5i2b',
          'template_xbcbclf',
          {
            to_email: 'alissonfidelis147@gmail.com',
            email: email.gmail,
            name: email.name
          },
          'xjFvpSoU18ygYLHsl'
        )
        .then(
          () => {
            alert("Obrigado. Eu retornarei para você assim que possível.");

            setEmail({
              name: "",
              gmail: "",
            });
          },
          (error) => {
            console.error(error);
            alert("Ahh, Algo deu errado. Por favor, tente novamente.");
          }
        );
    }
  };

  const scrollToEmail = () => {
    document.getElementById('email-signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-neutral-50">
      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <Button
          onClick={scrollToEmail}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full shadow-lg"
        >
          Get Started Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-green-100 text-green-800 px-4 py-2">
            📱 DIY Creator Kit
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Start Creating Content
            <span className="text-green-600"> Without Fancy Gear</span>
            or Big Budgets
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            You don't need a ring light, tripod, or perfect aesthetic to begin your creator journey.
            Learn how to start small, stay consistent, and grow with what you have.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToEmail}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full"
            >
              Get the Starter Guide Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <div className="flex items-center text-sm text-gray-500">
              <Users className="h-4 w-4 mr-2" />
              Trusted by 1,000+ creators
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative mx-auto max-w-2xl">
            <div className="bg-gradient-to-r from-green-200 to-blue-200 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-center space-x-6">
                <Smartphone className="h-16 w-16 text-green-600" />
                <Camera className="h-20 w-20 text-blue-600" />
                <div className="text-4xl">📱</div>
              </div>
              <p className="mt-4 text-gray-600 font-medium">Phone + Natural Light = Amazing Content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Sound Familiar?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            These are real concerns from aspiring creators just like you
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "💸",
                quote: "Do I need a tripod, ring light, etc. to get started? I don't want to invest a lot and then fail.",
                author: "Reddit user"
              },
              {
                icon: "😳",
                quote: "I feel awkward recording myself and don't know how to make it look good.",
                author: "Reddit user"
              },
              {
                icon: "💡",
                quote: "Lighting is hard for me and I can't decide if I should get a cheap ring light or wait.",
                author: "Reddit user"
              },
              {
                icon: "📱",
                quote: "I just use my phone and natural light, but I wish I knew some hacks to make it look professional.",
                author: "Reddit user"
              }
            ].map((pain, index) => (
              <Card key={index} className="border-l-4 border-l-red-400 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{pain.icon}</div>
                    <div>
                      <Quote className="h-5 w-5 text-gray-400 mb-2" />
                      <p className="text-gray-700 italic mb-3 leading-relaxed">"{pain.quote}"</p>
                      <p className="text-sm text-gray-500">— {pain.author}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              onClick={scrollToEmail}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full"
            >
              I Need This Solution
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-green-600 text-white px-4 py-2 text-lg mb-4">
              📱 DIY Creator Kit
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Simple Path to
              <span className="text-green-600"> Content Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              An actionable, beginner-friendly guide that helps you start creating content
              using just your phone and simple, affordable tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "1",
                title: "Learn Simple Creator Hacks",
                description: "Shoot professional-looking videos & photos with no fancy gear",
                icon: <Camera className="h-8 w-8" />
              },
              {
                step: "2",
                title: "Follow Easy Checklists",
                description: "Plan and post consistently with our proven templates",
                icon: <CheckCircle className="h-8 w-8" />
              },
              {
                step: "3",
                title: "Upgrade When Ready",
                description: "Grow at your own pace — no pressure, no expensive mistakes",
                icon: <Star className="h-8 w-8" />
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            onClick={scrollToEmail}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg rounded-full"
          >
            Start for Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl bg-gradient-to-br from-blue-50 to-green-50">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  JD
                </div>

                <Quote className="h-8 w-8 text-green-600 mx-auto mb-6" />

                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "I know how intimidating content creation can feel when you're starting out.
                  I built this guide to help people like you stop overthinking and start creating —
                  even if all you have is your phone and a little bit of courage.
                  Start small, stay consistent, and you'll amaze yourself."
                </blockquote>

                <footer className="text-gray-600">
                  <strong className="text-gray-900">— Jane Doe</strong>, Founder & Creator Coach
                </footer>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Email Signup Section */}
      <section id="email-signup" className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Stop Waiting for Perfect.
            <br />Start Your Creator Journey Today.
          </h2>

          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Join 1,000+ aspiring creators who are already posting with confidence —
            no expensive gear required.
          </p>

          <Card className="bg-white text-gray-900 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold">Get Instant Access</h3>
              </div>

              <p className="text-gray-600 mb-6">
                Enter your email below to download the DIY Creator Kit and start creating today.
              </p>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <Input
                  type="name"
                  placeholder="Enter your name address"
                  value={email.name}
                  onChange={e => setEmail(prev => ({ ...prev, name: e.target.value }))}
                  className="text-lg py-3 px-4"
                  required
                />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email.gmail}
                  onChange={e => setEmail(prev => ({ ...prev, gmail: e.target.value }))}
                  className="text-lg py-3 px-4"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg rounded-full"
                >
                  Download the Free Starter Guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                No spam, ever. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">📱 DIY Creator Kit</h3>
          <p className="text-gray-400 mb-6">
            Helping aspiring creators start their journey without breaking the bank.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <span>Made with ❤️ for creators everywhere</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
