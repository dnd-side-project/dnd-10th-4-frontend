import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import { HourGlass } from '@/assets/icons';
import Chip from '.';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '안녕하세요',
  },
};

const styles = {
  container: css`
    width: 100%;
    max-width: 37.5rem;
    background-color: skyblue;
  `,
  chipContainer: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4375rem;
    justify-content: center;
  `,
  chip: css`
    margin-block: 0.4375rem;
  `,
  formContainer: css`
    display: flex;
    gap: 0.5rem;
  `,
  formChip: css`
    flex: 1;
  `,
};

export const 고민_종류_칩: StoryObj = {
  render: () => {
    const ChipComponent = () => {
      type VariantType = 'primary' | 'primary-selected' | 'primary-disabled';
      const [selectedChips, setSelectedChips] = useState<string[]>([]);

      const handleChipClick = (chip: string) => {
        setSelectedChips((currentChips) => {
          if (currentChips.includes(chip)) {
            return currentChips.filter((c) => c !== chip);
          } else if (currentChips.length < 3) {
            return [...currentChips, chip];
          }
          return currentChips;
        });
      };

      const getVariant = (label: string): VariantType => {
        if (selectedChips.includes(label)) {
          return 'primary-selected';
        } else if (selectedChips.length >= 3) {
          return 'primary-disabled';
        }
        return 'primary';
      };

      const chipLabels = [
        '일·직장',
        '취업·진로',
        '인간관계',
        '이별·상실',
        '연애',
        '학업',
        '가족',
        '기타',
      ];

      return (
        <div css={styles.container}>
          <p>최대 3개까지만 선택 가능합니다.</p>
          <div css={styles.chipContainer}>
            {chipLabels.map((label) => (
              <Chip
                key={label}
                variant={getVariant(label)}
                onClick={() => handleChipClick(label)}
                css={styles.chip}
              >
                {label}
              </Chip>
            ))}
          </div>
        </div>
      );
    };

    return <ChipComponent />;
  },
};

export const 물병_칩: StoryObj = {
  render: () => (
    <div css={styles.chipContainer}>
      <Chip variant="bottle-tag">
        <HourGlass color="#828282" width={14} height={14} />
        <p>26h</p>
      </Chip>
      <Chip variant="bottle-tag">NEW</Chip>
      <Chip variant="bottle-tag-bubble">답장이 도착했어요</Chip>
    </div>
  ),
};

export const 필터링_칩: StoryObj = {
  render: () => (
    <div css={styles.chipContainer}>
      <Chip variant="filter">17~</Chip>
      <Chip variant="filter">모두에게</Chip>
      <Chip variant="filter">진로</Chip>
    </div>
  ),
};

export const 태그_칩: StoryObj = {
  render: () => (
    <div css={styles.chipContainer}>
      <Chip variant="tag">17~</Chip>
      <Chip variant="tag">모두에게</Chip>
      <Chip variant="tag">진로</Chip>
    </div>
  ),
};

export const 폼_칩: StoryObj = {
  render: () => (
    <div css={{ backgroundColor: 'white', padding: '0.625rem' }}>
      <div css={styles.formContainer}>
        <Chip variant="form-selected" css={styles.formChip}>
          모두에게 보내기
        </Chip>
        <Chip variant="form" css={styles.formChip}>
          나와 같은 성별에게 보내기
        </Chip>
      </div>
      <div>
        <Chip variant="form" css={styles.formChip}>
          일·직장
        </Chip>
      </div>
    </div>
  ),
};
