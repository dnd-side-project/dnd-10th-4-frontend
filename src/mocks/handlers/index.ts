import testHandler from './test';
import authHandler from './auth';
import memberHandler from './member';

const mockHandlers = [...testHandler, ...authHandler, ...memberHandler];

export default mockHandlers;
