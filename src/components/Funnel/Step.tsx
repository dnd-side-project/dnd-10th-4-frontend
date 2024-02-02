export interface StepProps<T extends readonly string[]> {
  /** Funnel 컴포넌트에서 렌더링 할 Step을 필터링하는데 사용됩니다. */
  name: T[number];
  children: React.ReactNode;
}

/** 퍼널에서 스텝 별로 렌더링 할 컴포넌트입니다. */
const Step = <T extends readonly string[]>({ children }: StepProps<T>) => {
  return <>{children}</>;
};

export default Step;
