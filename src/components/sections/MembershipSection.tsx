import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardSpotlight } from '../ui/card-spotlight';
import { motion } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { Boxes } from '../ui/background-boxes';
import {
  IconCheck,
  IconStar,
  IconCrown,
  IconHeart,
  IconUsers,
  IconCalendar,
  IconBarbell,
  IconAward
} from '@tabler/icons-react';

const MembershipSection: React.FC = () => {
  const navigate = useNavigate();
  const { selectMembership, state } = useApp();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const membershipPlans = [
    {
      id: 'basic',
      name: '1 Month',
      icon: <IconHeart className="h-6 w-6" />,
      price: { monthly: 15000, annual: 15000 },
      originalPrice: { monthly: 15000, annual: 15000 },
      description: 'Perfect for getting started with AfroHeat',
      popular: false,
      color: 'from-primary to-primary/80',
      features: [
        'Strength & Conditioning (Mon-Fri)',
        '1 Free Kickboxing session',
        'Sauna access included',
        'Women-only environment',
        'Cultural music celebration'
      ],
      kickboxingPrice: 10000,
      bothClassesPrice: 20000,
      notIncluded: [
        'Extended class packages',
        'Pause options'
      ]
    },
    {
      id: 'premium',
      name: '3 Months',
      icon: <IconStar className="h-6 w-6" />,
      price: { monthly: 33000, annual: 33000 },
      originalPrice: { monthly: 33000, annual: 33000 },
      description: 'Most popular choice for committed members',
      popular: true,
      color: 'from-primary to-secondary',
      features: [
        'Everything in 1 Month',
        'Extended class access',
        'Max 2 weeks pause option',
        'Better value per month',
        'Consistent routine building'
      ],
      kickboxingPrice: 23000,
      bothClassesPrice: 43000,
      notIncluded: [
        'Extended pause options'
      ]
    },
    {
      id: 'elite',
      name: '6 Months',
      icon: <IconCrown className="h-6 w-6" />,
      price: { monthly: 53000, annual: 53000 },
      originalPrice: { monthly: 53000, annual: 53000 },
      description: 'Best value with maximum flexibility and commitment',
      popular: false,
      color: 'from-secondary to-accent',
      features: [
        'Everything in 3 Months',
        '2 Free Kickboxing sessions',
        '2 Free S&C sessions',
        'Max 1 month pause option',
        'Best value pricing',
        'Long-term transformation'
      ],
      kickboxingPrice: 38000,
      bothClassesPrice: 72000,
      notIncluded: []
    }
  ];

  const handleSelectPlan = (planId: string) => {
    selectMembership(planId);
  };

  return (
    <section id="membership" className="py-20 text-foreground">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-industry">
            Choose Your{" "}
            <span className="text-primary">
              Package
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-poppins">
            Flexible packages designed to fit your lifestyle and fitness goals.
            Join our AfroHeat community and start your transformation today.
          </p>

          {/* Class Type Toggle */}
          <div className="inline-flex items-center bg-muted rounded-full p-1 mb-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              S&C Classes
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === 'annual'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Both Classes
            </button>
          </div>
        </motion.div>

        {/* Membership Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {membershipPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <CardSpotlight 
                className={`h-full ${plan.popular ? 'border-pink-500' : ''}`}
                color={plan.popular ? "#ea328eff" : "#da40f6ff"}
              >
                <div className="relative z-20 h-full flex flex-col">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-primary rounded-xl text-primary-foreground mb-4`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 font-industry">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm font-poppins">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-foreground font-poppins">
                        {billingCycle === 'monthly' 
                          ? `${plan.price.monthly.toLocaleString()} ETB`
                          : billingCycle === 'annual' && plan.bothClassesPrice
                          ? `${plan.bothClassesPrice.toLocaleString()} ETB`
                          : `${plan.price.monthly.toLocaleString()} ETB`
                        }
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground font-poppins">
                      {billingCycle === 'monthly' && (
                        <div>
                          <div className="mb-1">S&C: {plan.price.monthly.toLocaleString()} ETB</div>
                          <div className="mb-1">Kickboxing: {plan.kickboxingPrice?.toLocaleString()} ETB</div>
                          <div>Both Classes: {plan.bothClassesPrice?.toLocaleString()} ETB</div>
                        </div>
                      )}
                      {billingCycle === 'annual' && (
                        <div className="text-secondary font-medium">
                          Both S&C + Kickboxing Included
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <IconCheck className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground text-sm font-poppins">{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <li key={`not-${featureIndex}`} className="flex items-start opacity-50">
                          <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
                            <div className="w-3 h-0.5 bg-muted-foreground"></div>
                          </div>
                          <span className="text-muted-foreground text-sm font-poppins">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => handleSelectPlan(plan.id)}
                    className={`w-full py-4 rounded-xl font-semibold transition-all relative overflow-hidden group ${
                      state.selectedMembership === plan.id
                        ? 'bg-green-600 text-primary-foreground '
                        : plan.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-primary/20 text-foreground hover:bg-primary/30'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">
                      {state.selectedMembership === plan.id ? 'Selected' : 'Choose Plan'}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground font-industry">
            All Packages Include
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <IconUsers className="h-6 w-6" />, label: 'Women-Only Environment' },
              { icon: <IconCalendar className="h-6 w-6" />, label: 'Flexible Scheduling' },
              { icon: <IconBarbell className="h-6 w-6" />, label: 'Modern Equipment' },
              { icon: <IconAward className="h-6 w-6" />, label: 'Certified Trainers' }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-xl text-primary-foreground mb-3 mx-auto">
                  {benefit.icon}
                </div>
                <p className="text-muted-foreground text-sm font-poppins">{benefit.label}</p>
              </div>
            ))}
          </div>

        </motion.div>

        {/* New CTA Section with Background Boxes */}
        <motion.section
          className="py-12 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg mt-12 group"
          whileHover="hover"
          variants={{
            hover: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Boxes />
          </div>
          <div className="w-full px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card/20 rounded-lg p-6"
            >
              <motion.h2
                className="text-2xl font-bold mb-4 text-foreground font-industry"
                variants={{
                  hover: {
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }
                }}
              >
               AfroHeat Community
              </motion.h2>
              <motion.p
                className="text-base text-muted-foreground mb-6 font-poppins"
                variants={{
                  hover: {
                    y: -3,
                    transition: { duration: 0.3 }
                  }
                }}
              >
                Experience fitness in a way that celebrates African culture, music, and dance.
                Join us in creating a healthier, more active lifestyle for Africans and the diaspora.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.button
                  onClick={() => navigate('/about')}
                  className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg relative overflow-hidden group w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={{
                    hover: {
                      y: -3,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      transition: { duration: 0.3 }
                    }
                  }}
                >
                  <span className="relative z-10">Learn More</span>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
                <motion.button
                  onClick={() => navigate('/contact')}
                  className="border border-border text-foreground px-5 py-2.5 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all font-poppins relative overflow-hidden w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={{
                    hover: {
                      y: -3,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      transition: { duration: 0.3 }
                    }
                  }}
                >
                  <span className="relative z-10">Contact Us</span>
                  <motion.div
                    className="absolute inset-0 bg-primary/5"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default MembershipSection;