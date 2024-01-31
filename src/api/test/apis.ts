import { Test } from '@/types/test';
import baseInstance from '../instance';

/** @NOTE: API 통신 예시용 임시 코드입니다. */
const testAPI = {
  getTestDetail: async (testId: string) => {
    const { data } = await baseInstance.get<Test>(`/test/${testId}`);
    return data;
  },
};

export default testAPI;
