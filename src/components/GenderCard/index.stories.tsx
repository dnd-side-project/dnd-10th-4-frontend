import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import { GENDER_DICT, type Gender } from '@/constants/users';
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
    value: 'FEMALE',
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

      const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value as Gender;

        if (value in GENDER_DICT) {
          setGender(value);
        }
      };

      return (
        <section
          css={[styles.genderSection, css({ backgroundColor: '#3EAFFF' })]}
        >
          <GenderCard
            value="MALE"
            name="gender"
            variant="primary"
            selectedValue={gender}
            onChange={handleSelect}
          />
          <GenderCard
            value="FEMALE"
            name="gender"
            variant="primary"
            selectedValue={gender}
            onChange={handleSelect}
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

      const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value as Gender;

        if (value in GENDER_DICT) {
          setGender(value);
        }
      };

      return (
        <section css={styles.genderSection}>
          <GenderCard
            value="MALE"
            name="gender"
            variant="secondary"
            selectedValue={gender}
            onChange={handleSelect}
          />
          <GenderCard
            value="FEMALE"
            name="gender"
            variant="secondary"
            selectedValue={gender}
            onChange={handleSelect}
          />
        </section>
      );
    };

    return <Component />;
  },
};
