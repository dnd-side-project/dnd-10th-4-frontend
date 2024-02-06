import testHandler from './test';
import oauth2Handler from './oauth2';
import memberHandler from './member';

const mockHandlers = [...testHandler, ...oauth2Handler, ...memberHandler];

export default mockHandlers;
