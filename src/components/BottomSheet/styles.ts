const style = {
  paper: {
    borderRadius: '16px 16px 0px 0px',
    margin: '0 auto',
    overflowY: 'hidden' as const,
    maxWidth: '600px',
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
};

export default style;
