import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { ROUTER_PATHS } from '@/router';
import authAPI from '@/api/auth/apis';

const SigninKakaoPage = () => {
  const [searchParams] = useSearchParams();
  const { mutateAsync } = useMutation({ mutationFn: authAPI.postKakaoCode });
  const navigate = useNavigate();
  const code = searchParams.get('code');

  useEffect(() => {
    (async () => {
      if (!code) {
        navigate(ROUTER_PATHS.SIGNIN);
        return;
      }

      try {
        await mutateAsync(code);
        navigate(ROUTER_PATHS.ONBOARDING);
      } catch (error) {
        console.error(error);
        navigate(ROUTER_PATHS.SIGNIN);
      }
    })();
  }, []);

  return <div>Loading...</div>;
};

export default SigninKakaoPage;
