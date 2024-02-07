import testHandler from './test';
import authHandler from './auth';
import memberHandler from './member';
import letterHandler from './letter';

const mockHandlers = [
  ...testHandler,
  ...letterHandler,
  ...authHandler,
  ...memberHandler,
];

export default mockHandlers;
