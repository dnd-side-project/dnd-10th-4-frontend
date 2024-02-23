import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import authAPI from '@/api/auth/apis';
import STORAGE_KEYS from '@/constants/storageKeys';
import memberOptions from '@/api/member/queryOptions';
import LoadingScreen from '@/components/LoadingScreen';

const SigninKakaoPage = () => {
  const [searchParams] = useSearchParams();
  const { mutateAsync } = useMutation({ mutationFn: authAPI.postKakaoCode });
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const code = searchParams.get('code');

  useEffect(() => {
    (async () => {
      if (!code) {
        navigate(ROUTER_PATHS.SIGNIN);
        return;
      }

      try {
        const data = await mutateAsync(code);
        localStorage.setItem(STORAGE_KEYS.accessToken, data.accessToken);
        localStorage.setItem(STORAGE_KEYS.refreshToken, data.refreshToken);

        await queryClient.prefetchQuery(memberOptions.detail());
        navigate(data.firstLogin ? ROUTER_PATHS.ONBOARDING : ROUTER_PATHS.ROOT);
      } catch (error) {
        console.error(error);
        navigate(ROUTER_PATHS.SIGNIN);
      }
    })();
  }, []);

  return <LoadingScreen />;
};

export default SigninKakaoPage;
