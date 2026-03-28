import { motion } from 'framer-motion'

const CommonPage = ({ title }) => {
  return (
    <div className="pt-40 min-h-screen text-center">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-5xl font-bold"
      >
        {title}
      </motion.h1>
    </div>
  )
}

export default CommonPage