// Image optimization utilities for production build

export interface ImageSizes {
  thumbnail: number;
  small: number;
  medium: number;
  large: number;
}

export const imageSizes: ImageSizes = {
  thumbnail: 150,
  small: 400,
  medium: 800,
  large: 1200
};

export const createImageVariants = (basePath: string): Record<string, string> => {
  const extension = basePath.split('.').pop();
  const nameWithoutExt = basePath.replace(`.${extension}`, '');

  return {
    thumbnail: `${nameWithoutExt}-thumb.${extension}`,
    small: `${nameWithoutExt}-small.${extension}`,
    medium: `${nameWithoutExt}-medium.${extension}`,
    large: `${nameWithoutExt}-large.${extension}`,
    original: basePath
  };
};

export const getOptimalImageSrc = (
  basePath: string,
  targetWidth: number
): string => {
  if (targetWidth <= imageSizes.thumbnail) return basePath.replace('.', '-thumb.');
  if (targetWidth <= imageSizes.small) return basePath.replace('.', '-small.');
  if (targetWidth <= imageSizes.medium) return basePath.replace('.', '-medium.');
  if (targetWidth <= imageSizes.large) return basePath.replace('.', '-large.');
  return basePath;
};

export const createSrcSet = (basePath: string): string => {
  const variants = createImageVariants(basePath);
  return [
    `${variants.small} ${imageSizes.small}w`,
    `${variants.medium} ${imageSizes.medium}w`,
    `${variants.large} ${imageSizes.large}w`
  ].join(', ');
};