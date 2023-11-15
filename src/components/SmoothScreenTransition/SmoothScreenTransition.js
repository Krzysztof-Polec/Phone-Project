import { motion } from 'framer-motion'

const SmoothScreenTransition = ({ className, children}) => {
  return(
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

export default SmoothScreenTransition
