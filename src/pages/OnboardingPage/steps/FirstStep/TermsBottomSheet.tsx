import React from 'react';
import { useFormContext } from 'react-hook-form';
import { css } from '@emotion/react';
import useBoolean from '@/hooks/useBoolean';
import BottomSheet from '@/components/BottomSheet';
import textStyles from '@/styles/textStyles';
import Button from '@/components/Button';
import { CaretRight } from '@/assets/icons';
import { Inputs } from '../../hooks/useOnboardingForm';

const SERVICE_TERMS_LINK =
  'https://longhaired-second-898.notion.site/892771674fa744d9ace3a9d578cdd0ad';
const PRIVACY_POLICY_LINK =
  'https://longhaired-second-898.notion.site/9a8d8cbc5de946ffb8a8772f9ffb1f41';

interface TermsBottomSheetProps extends ReturnType<typeof useBoolean> {}

const TermsBottomSheet = ({ off, on, value }: TermsBottomSheetProps) => {
  const { register, getValues, setValue } = useFormContext<Inputs>();

  const handleChangeAllAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('terms.serviceTerm', e.target.checked);
    setValue('terms.privacyPolicy', e.target.checked);
  };

  const handleChangeCheckbox = () => {
    if (getValues('terms.serviceTerm') && getValues('terms.privacyPolicy')) {
      setValue('terms.allAgree', true);
    } else {
      setValue('terms.allAgree', false);
    }
  };

  const handleClickCancel = () => {
    setValue('terms.serviceTerm', false);
    setValue('terms.privacyPolicy', false);
    setValue('terms.allAgree', false);
    off();
  };

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <BottomSheet.Title css={styles.title}>
        <p css={textStyles.t2}>
          내 마음 속 바다 이용을 위한
          <br />
          약관에 동의해 주세요
        </p>
      </BottomSheet.Title>
      <BottomSheet.Content css={styles.headContent}>
        <input
          css={styles.checkbox}
          id="all-agree"
          type="checkbox"
          {...register('terms.allAgree', {
            onChange: handleChangeAllAgree,
          })}
        />
        <label css={textStyles.t4} htmlFor="all-agree">
          약관 전체동의
        </label>
      </BottomSheet.Content>
      <BottomSheet.Divider />
      <BottomSheet.Content css={styles.content}>
        <div css={styles.inputLine}>
          <input
            css={styles.checkbox}
            id="required-term"
            type="checkbox"
            {...register('terms.serviceTerm', {
              onChange: handleChangeCheckbox,
            })}
          />
          <label css={textStyles.b5R} htmlFor="required-term">
            [필수] 서비스 이용 약관
          </label>
          <a href={SERVICE_TERMS_LINK} target="_blank" rel="noreferrer">
            <CaretRight color="#BDBDBD" />
          </a>
        </div>
        <div css={styles.inputLine}>
          <input
            css={styles.checkbox}
            id="optional-term"
            type="checkbox"
            {...register('terms.privacyPolicy', {
              onChange: handleChangeCheckbox,
            })}
          />
          <label css={textStyles.b5R} htmlFor="optional-term">
            [선택] 개인정보 처리방침
          </label>
          <a href={PRIVACY_POLICY_LINK} target="_blank" rel="noreferrer">
            <CaretRight color="#BDBDBD" />
          </a>
        </div>
      </BottomSheet.Content>
      <BottomSheet.Divider />
      <BottomSheet.ButtonSection>
        <Button variant="cancel" size="sm" onClick={handleClickCancel}>
          취소
        </Button>
        <Button variant="primary" size="sm" onClick={off}>
          확인
        </Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

const styles = {
  title: css`
    text-align: start;
  `,
  headContent: css`
    display: flex;
    gap: 0.5rem;
    justify-content: start;
    align-items: center;
  `,
  content: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: start;
    align-items: start;
  `,
  checkbox: css`
    width: 1.5rem;
    height: 1.5rem;
  `,
  inputLine: css`
    display: flex;
    gap: 0.5rem;
    justify-content: start;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding-left: 1rem;
    text-align: start;

    label {
      flex-grow: 1;
    }
  `,
};

export default TermsBottomSheet;
