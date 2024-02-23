import { motion } from 'framer-motion';
import textStyles from '@/styles/textStyles';
import LoadingSpinner from '../LoadingSpinner';
import styles from './styles';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 2 }}
      css={styles.container}
    >
      <section css={styles.content}>
        <LoadingSpinner size="8rem" weight="0.5rem" />
        <h2 css={textStyles.logo}>Loading...</h2>
      </section>
    </motion.div>
  );
};

export default LoadingScreen;
