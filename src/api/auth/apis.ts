import baseInstance from '../instance';

const authAPI = {
  // TODO: 추후 API 명세에 맞게 수정해야 합니다.
  postKakaoCode: async (code: string) => {
    const { data } = await baseInstance.post('/oauth2/authorization/kakao', {
      code,
    });
    return data;
  },
};

export default authAPI;
