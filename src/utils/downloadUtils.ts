import axios from 'axios';

/**
 * 이미지 다운로드
 * @param imagePath 이미지 경로
 * @returns
 */
export const downloadImage = async (imagePath: string) => {
  if (!imagePath) {
    return;
  }

  const response = await axios.get(imagePath, {
    responseType: 'blob',
  });

  const url = window.URL.createObjectURL(new Blob([response.data]));

  const link = document.createElement('a');
  link.href = url;
  link.download = 'image.jpg';
  document.body.appendChild(link);
  link.click();

  window.URL.revokeObjectURL(url);
};
