import testHandler from './test';
import authHandler from './auth';
import memberHandler from './member';
import letterHandler from './letter';
import reportHandler from './report';

const mockHandlers = [
  ...testHandler,
  ...letterHandler,
  ...authHandler,
  ...memberHandler,
  ...reportHandler,
];

export default mockHandlers;
