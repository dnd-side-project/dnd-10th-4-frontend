import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ImageUploadButton from '.';

const meta = {
  title: 'Components/ImageUploadButton',
  component: ImageUploadButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ImageUploadButton>;

export default meta;

export const 이미지_업로드: StoryObj = {
  render: () => {
    const ImageUploadButtonComponent = () => {
      const [image, setImage] = useState<File | null>();
      const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setImage(file);
      };

      return (
        <>
          <ImageUploadButton onChangeImage={handleFileChange} />
          {image && <img src={URL.createObjectURL(image)} width="200" />}
        </>
      );
    };
    return <ImageUploadButtonComponent />;
  },
};
