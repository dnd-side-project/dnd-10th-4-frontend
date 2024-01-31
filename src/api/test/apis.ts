import baseInstance from '../instance';

const testAPI = {
  getTestDetail: async (testId: string) => {
    const { data } = await baseInstance.get<{
      id: string;
      name: string;
    }>(`/test/${testId}`);

    return data;
  },
};

export default testAPI;
