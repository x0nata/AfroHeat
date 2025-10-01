import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CommunitySectionProps {
  alignment: 'left' | 'right';
  text: string;
  imageSrc: string;
  buttons: {
    text: string;
    link: string;
    variant: 'primary' | 'secondary';
  }[];
}

const CommunitySection: React.FC<CommunitySectionProps> = ({
  alignment,
  text,
  imageSrc,
  buttons
}) => {
  return (
    <section className="py-16 md:py-20 bg-background text-foreground">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12"
        >
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
            alignment === 'right' ? 'lg:grid-flow-row-dense' : ''
          }`}>
            {/* Image */}
            <div className={`${alignment === 'right' ? 'lg:col-start-2' : ''} overflow-hidden`}>
              <img
                src={imageSrc}
                alt="AfroHeat community"
                className="rounded-lg md:rounded-xl shadow-lg w-full h-64 md:h-80 object-cover max-w-full max-h-full"
              />
            </div>

            {/* Content */}
            <div className={`${alignment === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed font-poppins">
                {text}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {buttons.map((button, index) => (
                  <Link
                    key={index}
                    to={button.link}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 font-poppins text-center ${
                      button.variant === 'primary'
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'border-2 border-border text-foreground hover:border-primary hover:text-primary'
                    }`}
                  >
                    {button.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;