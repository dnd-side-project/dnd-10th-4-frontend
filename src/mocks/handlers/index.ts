import testHandler from './test';
import authHandler from './auth';
import memberHandler from './member';
import letterHandler from './letter';
import reportHandler from './report';
import adminHandler from './admin';

const mockHandlers = [
  ...testHandler,
  ...letterHandler,
  ...authHandler,
  ...memberHandler,
  ...reportHandler,
  ...adminHandler,
];

export default mockHandlers;
