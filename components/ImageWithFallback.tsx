'use client';

import { useState, ImgHTMLAttributes } from 'react';

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export default function ImageWithFallback({
  fallbackSrc = '/placeholder.jpg',
  src,
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  return (
    <img
      {...props}
      src={imgSrc as string}
      alt={alt || 'Image'}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
