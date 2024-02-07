import { Test } from '@/types/test';
import { baseInstance } from '../instance';

/** @NOTE: API 통신 예시용 임시 코드입니다. */
const testAPI = {
  getTestList: async () => {
    const { data } = await baseInstance.get<Test[]>('/test');
    return data;
  },
  getTestDetail: async (testId: string) => {
    const { data } = await baseInstance.get<Test>(`/test/${testId}`);
    return data;
  },
  postTest: async (test: Test) => {
    const { data } = await baseInstance.post<string>('/test', test);
    return data;
  },
};

export default testAPI;
