import { motion } from 'motion/react';
import { Shield, Thermometer, Clock, Award, MapPin, Camera, Lock, Star } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { Link } from 'react-router';

export function HomePage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1766246099181-2055091f8721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBleG90aWMlMjBzcG9ydHMlMjBjYXIlMjBnYXJhZ2V8ZW58MXx8fHwxNzc0NjE2MjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury Car Storage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-black/70 to-black" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full mb-6 backdrop-blur-sm">
              <MapPin size={16} className="text-purple-400" />
              <span className="text-sm text-purple-300">Steps from Coachella Festival Grounds</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Coachella Valley's Premier
              <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Exotic Car Storage
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Secure, climate-controlled indoor storage for your high-performance vehicles. 
              Trusted by collectors, enthusiasts, and seasonal residents.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/storage">
                <Button variant="primary">STORE YOUR VEHICLE</Button>
              </Link>
              <Button variant="secondary">VIEW FACILITY</Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full p-1">
            <div className="w-1 h-2 bg-purple-500 rounded-full mx-auto" />
          </div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 border-y border-purple-900/30 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: MapPin, label: 'Indio, CA', sublabel: 'Prime Location' },
              { icon: Lock, label: '24/7 Security', sublabel: 'Advanced Systems' },
              { icon: Shield, label: 'Premium Indoor', sublabel: 'Climate Controlled' },
              { icon: Award, label: 'Enthusiast Owned', sublabel: 'Trusted by Collectors' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <item.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="font-semibold">{item.label}</div>
                <div className="text-sm text-white/60">{item.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Elite Protection for Elite Vehicles
            </h2>
            <p className="text-xl text-white/70">
              Your car deserves more than a basic garage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Thermometer,
                title: 'Climate Controlled Storage',
                description: 'Maintain optimal temperature and humidity levels year-round to preserve your vehicle\'s condition.',
              },
              {
                icon: Lock,
                title: '24/7 Advanced Security',
                description: 'Multi-layer security systems including surveillance, alarms, and controlled access protocols.',
              },
              {
                icon: Award,
                title: 'White-Glove Service',
                description: 'Expert handling, maintenance coordination, and concierge services for ultimate peace of mind.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <GlassCard>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600/30 to-purple-900/30 rounded-xl flex items-center justify-center mb-6 border border-purple-500/30">
                    <item.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Coachella Valley Storage?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, title: 'Festival Adjacent', desc: 'Minutes from Coachella VIP parking' },
              { icon: Shield, title: 'Insurance Approved', desc: 'Meet all policy requirements' },
              { icon: Camera, title: 'Live Access', desc: 'Check your vehicle anytime' },
              { icon: Clock, title: 'Flexible Terms', desc: 'Daily to annual storage plans' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard hover={false} className="text-center h-full">
                  <item.icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicle - GTR Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-purple-500/30">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1545221188-ba65ab186c50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaXNzYW4lMjBndHIlMjBzdXBlcmNhciUyMG5pZ2h0fGVufDF8fHx8MTc3NDYxNjI1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Nissan GT-R"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>

            <div className="relative z-10 p-12 md:p-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-xl"
              >
                <div className="inline-block px-4 py-2 bg-purple-600/30 border border-purple-500/50 rounded-full mb-6 backdrop-blur-sm">
                  <span className="text-sm text-purple-300">FEATURED VEHICLE</span>
                </div>
                
                <h2 className="text-5xl font-bold mb-4">Nissan GT-R</h2>
                <p className="text-xl text-white/70 mb-8">
                  The same precision and care we give to this automotive legend is what your vehicle deserves.
                </p>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { label: 'Power', value: '565 HP' },
                    { label: '0-60', value: '2.9s' },
                    { label: 'Top Speed', value: '196 mph' },
                  ].map((spec, idx) => (
                    <div key={idx} className="backdrop-blur-md bg-white/5 border border-purple-500/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-400">{spec.value}</div>
                      <div className="text-sm text-white/60">{spec.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by Enthusiasts
            </h2>
            <div className="flex items-center justify-center gap-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" size={24} />
              ))}
              <span className="ml-2 text-white/80">5.0 from 50+ reviews</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marcus R.',
                vehicle: 'Ferrari 488',
                text: 'Finally found a storage facility I can trust with my Ferrari. The climate control and security give me complete peace of mind during festival season.',
              },
              {
                name: 'Sarah K.',
                vehicle: 'Lamborghini Huracán',
                text: 'Outstanding service and attention to detail. They treat my car like it\'s their own. The location near Coachella is perfect for seasonal storage.',
              },
              {
                name: 'David L.',
                vehicle: 'Porsche 911 Turbo',
                text: 'Professional, secure, and convenient. The white-glove service is exceptional. Highly recommend to anyone with a high-value vehicle.',
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <GlassCard>
                  <div className="flex items-center gap-2 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={16} />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-purple-400">{testimonial.vehicle}</div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Prime Coachella Valley Location
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Strategically located in Indio, just minutes from the Coachella Festival grounds and VIP parking areas. 
                Perfect for seasonal residents, collectors, and festival-goers.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Easy Access</div>
                    <div className="text-white/60">Minutes from Highway 10 and downtown Indio</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Festival Ready</div>
                    <div className="text-white/60">Store your exotic for Coachella & Stagecoach events</div>
                  </div>
                </div>
              </div>

              <Link to="/storage">
                <Button variant="primary">Get Directions</Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-purple-500/30">
                <img
                  src="https://images.unsplash.com/photo-1631874890870-2be6a79a0ed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FjaGVsbGElMjBkZXNlcnQlMjBzdW5zZXQlMjBjYWxpZm9ybmlhfGVufDF8fHx8MTc3NDYxNjI1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Coachella Valley"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Map placeholder overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end p-8">
                <div className="text-white">
                  <div className="font-semibold text-lg mb-1">Indio, California</div>
                  <div className="text-sm text-white/70">Coachella Valley</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <GlassCard className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Vehicle?
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Join the elite collection of vehicles stored at Coachella Valley's premier facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/storage">
                <Button variant="primary">Reserve Storage Now</Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary">Learn More</Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
