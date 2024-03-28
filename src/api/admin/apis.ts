import { API_PATHS } from '@/constants/routerPaths';
import {
  type PagedMemberResponse,
  type PagedReportResponse,
} from '@/types/admin';
import { authInstance } from '../instance';

const adminAPI = {
  getReport: async (email?: string) => {
    const { data } = await authInstance.get<PagedReportResponse>(
      API_PATHS.ADMIN_REPORT,
      {
        params: {
          email,
        },
      },
    );
    return data;
  },

  getMemberSearch: async (email: string) => {
    const { data } = await authInstance.get<PagedMemberResponse>(
      API_PATHS.ADMIN_MEMBER_SEARCH,
      {
        params: {
          email,
        },
      },
    );
    return data;
  },

  deleteMember: async (email: string) => {
    const { data } = await authInstance.delete(API_PATHS.ADMIN_MEMBER_SEARCH, {
      params: {
        email,
      },
    });
    return data;
  },

  postSpecialLetter: async ({
    content,
    email,
    image,
  }: {
    email: string;
    content: string;
    image?: File;
  }) => {
    const formData = new FormData();
    formData.append('content', content);
    formData.append('email', email);

    if (image) {
      formData.append('image', image);
    }

    const { data } = await authInstance.post(
      API_PATHS.ADMIN_LETTER_SPECIAL,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return data;
  },
};

export default adminAPI;
