import { http } from 'msw';
import { baseURL } from '@/utils/mswUtils';
import { API_PATHS } from '@/constants/routerPaths';
import withAuth from '../middlewares/withAuth';
import { letterResolvers } from '../resolvers/letter';

const letterHandler = [
  /** 받은 편지 전체 조회 */
  http.get(
    baseURL(API_PATHS.LETTER_RECEPTION),
    withAuth(letterResolvers.getLetterReception.success),
  ),

  /** 보낸 편지 단건 조회 */
  http.get(
    baseURL(API_PATHS.LETTER_RECEPTION_DETAIL(':letterId')),
    letterResolvers.getLetterReceptionDetail.success,
  ),

  /** 답장 받은 편지 페이징 조회 */
  http.get(
    baseURL(API_PATHS.LETTER_REPLY),
    withAuth(letterResolvers.getLetterReply.success),
  ),

  /** 답장 받은 편지 단건 조회 */
  http.get(
    baseURL(API_PATHS.LETTER_REPLY_DETAIL(':letterId')),
    withAuth(letterResolvers.getLetterReplyDetail.success),
  ),

  /** 보관한 편지 페이징 조회 */
  http.get(
    baseURL(API_PATHS.LETTER_STORAGE),
    withAuth(letterResolvers.getLetterStorage.success),
  ),

  /** 내가 보낸 편지 페이징 조회 */
  http.get(
    baseURL(API_PATHS.LETTER_SEND),
    withAuth(letterResolvers.getLetterSend.success),
  ),

  /** 편지 작성 */
  http.post(
    baseURL(API_PATHS.LETTER),
    withAuth(letterResolvers.postLetter.success),
  ),

  /** 받은 편지 답장 */
  http.patch(
    baseURL(API_PATHS.LETTER_RECEPTION_REPLY_DETAIL(':letterId')),
    withAuth(letterResolvers.patchLetterReceptionReplyDetail.success),
  ),

  /** 받은 편지 패스 */
  http.patch(
    baseURL(API_PATHS.LETTER_RECEPTION_PASS_DETAIL(':letterId')),
    withAuth(letterResolvers.patchLetterReceptionPassDetail.success),
  ),

  /** 답장 받은 편지 보관함에 보관 */
  http.patch(
    baseURL(API_PATHS.LETTER_REPLY_STORAGE_DETAIL(':letterId')),
    withAuth(letterResolvers.patchLetterReplyStorageDetail.success),
  ),

  /** 온보딩 편지 보관함에 보관 */
  http.patch(
    baseURL(API_PATHS.LETTER_ONBOARDING_STORAGE_DETAIL(':letterId')),
    withAuth(letterResolvers.patchLetterOnboardingStorageDetail.success),
  ),

  /** 보관된 편지 보관 취소 */
  http.patch(
    baseURL(API_PATHS.LETTER_STORAGE_DETAIL(':letterId')),
    withAuth(letterResolvers.patchLetterStorageDetail.success),
  ),

  /** 보낸 편지 삭제 */
  http.patch(
    baseURL(API_PATHS.LETTER_SEND_DETAIL(':letterId')),
    withAuth(letterResolvers.patchLetterSendDetail.success),
  ),
];

export default letterHandler;
