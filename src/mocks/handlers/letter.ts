import { http } from 'msw';
import { baseURL } from '@/utils/mswUtils';
import { API_PATHS } from '@/constants/routerPaths';
import withAuth from '../middlewares/withAuth';
import { letterResolvers } from '../resolvers/letter';

const letterHandler = [
  http.get(
    baseURL(API_PATHS.LETTER_RECEPTION),
    withAuth(letterResolvers.getLetterReception.success),
  ),

  http.get(
    baseURL(API_PATHS.LETTER_RECEPTION_DETAIL(':letterId')),
    letterResolvers.getLetterReceptionDetail.success,
  ),

  http.get(
    baseURL(API_PATHS.LETTER_REPLY),
    withAuth(letterResolvers.getLetterReply.success),
  ),

  http.get(
    baseURL(API_PATHS.LETTER_REPLY_DETAIL(':letterId')),
    withAuth(letterResolvers.getLetterReplyDetail.success),
  ),

  http.get(
    baseURL(API_PATHS.LETTER_STORAGE),
    withAuth(letterResolvers.getLetterStorage.success),
  ),

  http.get(
    baseURL(API_PATHS.LETTER_SEND),
    withAuth(letterResolvers.getLetterSend.success),
  ),

  http.post(
    baseURL(API_PATHS.LETTER),
    withAuth(letterResolvers.postLetter.success),
  ),

  http.patch(
    baseURL(API_PATHS.LETTER_RECEPTION_REPLY_DETAIL(':letterId')),
    withAuth(letterResolvers.patchLetterReceptionReplyDetail.success),
  ),

  http.patch(
    baseURL(API_PATHS.LETTER_RECEPTION_PASS_DETAIL(':letterId')),
    withAuth(letterResolvers.patchLetterReceptionPassDetail.success),
  ),

  http.patch(
    baseURL(API_PATHS.LETTER_REPLY_STORAGE_DETAIL(':letterId')),
    withAuth(letterResolvers.patchLetterReplyStorageDetail.success),
  ),

  http.patch(
    baseURL(API_PATHS.LETTER_ONBOARDING_STORAGE_DETAIL(':letterId')),
    withAuth(letterResolvers.patchLetterOnboardingStorageDetail.success),
  ),

  http.patch(
    baseURL(API_PATHS.LETTER_STORAGE_DETAIL(':letterId')),
    withAuth(letterResolvers.patchLetterStorageDetail.success),
  ),

  http.patch(
    baseURL(API_PATHS.LETTER_SEND_DETAIL(':letterId')),
    withAuth(letterResolvers.patchLetterSendDetail.success),
  ),
];

export default letterHandler;
