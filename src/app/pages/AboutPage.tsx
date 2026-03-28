import { motion } from 'motion/react';
import { Heart, Shield, Target, MapPin, Users, Award } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { Link } from 'react-router';

export function AboutPage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1767729659508-0d29dadd2254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhdXRvbW90aXZlJTIwZGV0YWlsfGVufDF8fHx8MTc3NDYxNjI1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-black/70 to-black" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Built by Enthusiasts,
              <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                For Enthusiasts
              </span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We're not just a storage facility—we're car lovers who understand 
              the passion and precision your exotic vehicle deserves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full mb-6 backdrop-blur-sm">
                <Heart className="text-purple-400" size={20} />
                <span className="text-sm text-purple-300">OUR STORY</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Born from Passion, Driven by Excellence
              </h2>
              
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Coachella Valley Exotic Storage was founded by a team of automotive enthusiasts 
                  who experienced firsthand the challenge of finding trustworthy, premium storage 
                  for high-value vehicles in the desert.
                </p>
                <p>
                  After years of attending Coachella and Stagecoach festivals, we noticed a critical 
                  gap: nowhere in the valley offered the level of security, climate control, and care 
                  that exotic vehicles truly need. So we built it ourselves.
                </p>
                <p>
                  Today, we're proud to serve collectors, seasonal residents, and festival-goers 
                  with a facility that we'd trust with our own vehicles—because many of the cars 
                  stored here belong to our founding team.
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                <Link to="/storage">
                  <Button variant="primary">View Storage Options</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-purple-500/30">
                <img
                  src="https://images.unsplash.com/photo-1774310438212-a0a5432a40da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBjb2xsZWN0aW9uJTIwZGlzcGxheXxlbnwxfHx8fDE3NzQ2MTYyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Our Facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-white/70">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Trust',
                description: 'We treat every vehicle like it\'s our own. Your investment is safe with us, backed by comprehensive insurance and 24/7 monitoring.',
              },
              {
                icon: Target,
                title: 'Precision',
                description: 'From climate control calibration to security protocols, we obsess over every detail that keeps your vehicle in pristine condition.',
              },
              {
                icon: Heart,
                title: 'Care',
                description: 'We\'re enthusiasts first, operators second. We understand the emotional connection you have with your exotic vehicle.',
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <GlassCard className="text-center h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600/30 to-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-500/30">
                    <value.icon className="w-10 h-10 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Coachella Valley Advantage
            </h2>
            <p className="text-xl text-white/70">
              Strategic location meets world-class facilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <MapPin className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Prime Location</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Minutes from Coachella and Stagecoach festival grounds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Easy access from Highway 10 and Palm Springs area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Central to luxury resort communities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Near private airports for jet owners</span>
                  </li>
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <Award className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Festival Ready</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Avoid VIP parking chaos and festival crowds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Store exotic vehicles during multi-day events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Quick retrieval when you're ready to leave</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Special festival season packages available</span>
                  </li>
                </ul>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-white/70">
              Automotive professionals dedicated to your vehicle's care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Michael Rodriguez',
                role: 'Founder & Managing Director',
                expertise: '15+ years exotic car ownership',
              },
              {
                name: 'Sarah Chen',
                role: 'Facility Operations Manager',
                expertise: 'Former luxury automotive specialist',
              },
              {
                name: 'James Thompson',
                role: 'Security Director',
                expertise: '20+ years high-value asset protection',
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <GlassCard className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-600/30 to-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-500/30">
                    <Users className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-3">{member.role}</p>
                  <p className="text-sm text-white/60">{member.expertise}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Vehicles Stored' },
              { value: '99.9%', label: 'Security Uptime' },
              { value: '5.0', label: 'Average Rating' },
              { value: '2', label: 'Minutes from Festival' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <GlassCard className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Join the community of exotic car owners who trust us with their prized vehicles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/storage">
                <Button variant="primary">Reserve Storage</Button>
              </Link>
              <Button variant="secondary">Schedule a Tour</Button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
