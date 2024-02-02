import testHandler from './test';
import oauth2Handler from './oauth2';

const mockHandlers = [...testHandler, ...oauth2Handler];

export default mockHandlers;
