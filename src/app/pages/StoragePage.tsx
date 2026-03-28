import { motion } from 'motion/react';
import { Thermometer, Lock, Wrench, Clock, Check, DollarSign } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { Link } from 'react-router';

export function StoragePage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1753281797108-9d294df6504e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJhZ2UlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NzQ2MTYyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Premium Indoor Garage"
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
              Premium Exotic Car
              <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Storage Solutions
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              State-of-the-art indoor storage with climate control, advanced security, 
              and white-glove service for vehicles valued at $100K+
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Storage Features
            </h2>
            <p className="text-xl text-white/70">
              Everything your exotic vehicle needs for long-term preservation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Thermometer,
                title: 'Climate Control System',
                features: [
                  'Consistent 68-72°F temperature year-round',
                  'Humidity control to prevent moisture damage',
                  'Air filtration to reduce dust and contaminants',
                  'Regular monitoring and maintenance',
                ],
              },
              {
                icon: Lock,
                title: 'Advanced Security',
                features: [
                  '24/7 video surveillance coverage',
                  'Biometric access control system',
                  'Individual alarm systems per bay',
                  'On-site security personnel',
                ],
              },
              {
                icon: Wrench,
                title: 'Maintenance Support',
                features: [
                  'Battery tender connections included',
                  'Tire pressure monitoring',
                  'Coordination with local exotic car specialists',
                  'Pre-delivery inspection and detailing',
                ],
              },
              {
                icon: Clock,
                title: 'Flexible Access',
                features: [
                  'Access your vehicle with 2-hour notice',
                  'Extended hours available',
                  'Remote viewing via secure camera access',
                  'Concierge delivery service available',
                ],
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <GlassCard>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600/30 to-purple-900/30 rounded-xl flex items-center justify-center mb-6 border border-purple-500/30">
                    <feature.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-6">{feature.title}</h3>
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                        <span className="text-white/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Perfect For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Collectors',
                description: 'Secure, climate-controlled environment for rare and valuable vehicles. Perfect for rotating collections or long-term investment storage.',
                image: 'https://images.unsplash.com/photo-1697179162923-9ea45f98092c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleG90aWMlMjBzdXBlcmNhciUyMHNob3dyb29tfGVufDF8fHx8MTc3NDYxNjI1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              },
              {
                title: 'Seasonal Residents',
                description: 'Leave your exotic in expert hands while you\'re away. Return to find it in pristine condition, ready to drive.',
                image: 'https://images.unsplash.com/photo-1609522085278-7e60bdcf9c7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaW5kb29yJTIwY2FyJTIwc3RvcmFnZXxlbnwxfHx8fDE3NzQ2MTYyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              },
              {
                title: 'Festival Visitors',
                description: 'Store your high-end vehicle securely during Coachella and Stagecoach. Avoid VIP parking hassles and event congestion.',
                image: 'https://images.unsplash.com/photo-1774310438212-a0a5432a40da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBjb2xsZWN0aW9uJTIwZGlzcGxheXxlbnwxfHx8fDE3NzQ2MTYyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              },
            ].map((customer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={customer.image}
                      alt={customer.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-t from-black via-black/95 to-black/80">
                    <h3 className="text-2xl font-semibold mb-3">{customer.title}</h3>
                    <p className="text-white/70 leading-relaxed">{customer.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-white/70">
              Flexible storage plans for every need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Short-Term',
                period: 'Daily/Weekly',
                price: '$75/day',
                features: [
                  'Climate controlled storage',
                  '24/7 security',
                  'Battery maintenance',
                  '2-hour access notice',
                ],
                best: false,
              },
              {
                name: 'Monthly',
                period: 'Month-to-Month',
                price: '$1,500/mo',
                features: [
                  'All short-term features',
                  'Priority access',
                  'Monthly inspection report',
                  'Complimentary detailing',
                ],
                best: true,
              },
              {
                name: 'Annual',
                period: 'Yearly Contract',
                price: '$15,000/yr',
                features: [
                  'All monthly features',
                  'Dedicated storage bay',
                  'Concierge delivery service',
                  'Save over $3,000 annually',
                ],
                best: false,
              },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <GlassCard className={`relative ${plan.best ? 'border-purple-500/60' : ''}`}>
                  {plan.best && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-purple-400 text-sm mb-4">{plan.period}</p>
                    <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.best ? 'primary' : 'secondary'} 
                    className="w-full"
                  >
                    Select Plan
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 border border-purple-500/30 rounded-xl backdrop-blur-sm">
              <DollarSign className="text-purple-400" />
              <span className="text-white/80">
                Custom pricing available for multi-vehicle storage and long-term contracts
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <GlassCard className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Reserve Your Storage Spot
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Limited bays available. Secure premium storage for your exotic vehicle today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary">Contact Us Now</Button>
              <Link to="/about">
                <Button variant="secondary">Learn About Us</Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
