import styles from './styles';

interface SparkleProps {
  src: string;
}

const Sparkle = ({ src, ...props }: SparkleProps) => {
  return (
    <img css={styles.sparkleAnimation} src={src} alt="반짝이" {...props} />
  );
};

export default Sparkle;
