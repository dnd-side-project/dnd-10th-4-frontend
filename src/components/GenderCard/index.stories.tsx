import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import { type Gender } from '@/types/member';
import GenderCard from './';

const meta = {
  title: 'Components/GenderCard',
  component: GenderCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof GenderCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    gender: 'FEMALE',
    isSelected: false,
    onClick: () => {},
  },
};

const styles = {
  genderSection: css`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    width: 100%;
    max-width: 15rem;
    margin-top: 1.5625rem;
    padding: 1rem;
  `,
};
export const Primary_Variant: Story = {
  ...Primary,
  render: () => {
    const Component = () => {
      const [gender, setGender] = useState<Gender>();

      return (
        <section
          css={[styles.genderSection, css({ backgroundColor: '#3EAFFF' })]}
        >
          <GenderCard
            variant="primary"
            gender="MALE"
            isSelected={gender === 'MALE'}
            onClick={() => setGender('MALE')}
          />
          <GenderCard
            variant="primary"
            gender="FEMALE"
            isSelected={gender === 'FEMALE'}
            onClick={() => setGender('FEMALE')}
          />
        </section>
      );
    };

    return <Component />;
  },
};

export const Secondary_Variant: Story = {
  ...Primary,
  render: () => {
    const Component = () => {
      const [gender, setGender] = useState<Gender>();

      return (
        <section css={styles.genderSection}>
          <GenderCard
            variant="secondary"
            gender="MALE"
            isSelected={gender === 'MALE'}
            onClick={() => setGender('MALE')}
          />
          <GenderCard
            variant="secondary"
            gender="FEMALE"
            isSelected={gender === 'FEMALE'}
            onClick={() => setGender('FEMALE')}
          />
        </section>
      );
    };

    return <Component />;
  },
};
