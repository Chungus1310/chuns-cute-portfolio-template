import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', gradient = false, className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2";
  
  const variants = {
    primary: gradient 
      ? "animated-gradient gradient-1 text-white hover:shadow-glow"
      : "bg-primary hover:bg-primary-dark text-white hover:shadow-glow",
    secondary: "glass-effect border-2 border-primary hover:border-primary-dark hover:shadow-glow",
    outline: "border-2 border-primary-light hover:border-primary text-primary-dark hover:bg-primary-light/10"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
