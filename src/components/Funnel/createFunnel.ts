import useFunnel from '@/hooks/useFunnel';
import Funnel from './Funnel';
import Step from './Step';

/**
 * 퍼널 컴포넌트와 훅을 이용하는데 있어서 스텝의 순서를 자동으로 제네릭에 의해 관리할 수 있도록 도와주는 함수
 * @param steps 퍼널 컴포넌트에서 사용할 스텝의 이름을 순서대로 나열한 배열
 * @returns 퍼널 컴포넌트와 훅을 반환하는 객체
 */
const createFunnel = <T extends readonly string[]>(steps: T) => ({
  Funnel: Funnel<T>,
  Step: Step<T>,
  useFunnel: () => useFunnel<T>(steps),
});

export default createFunnel;
