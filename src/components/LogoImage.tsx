'use client';

import Image from 'next/image';
import { useState } from 'react';

type LogoImageProps = {
  alt?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export default function LogoImage({
  alt = 'TumblerPigeon',
  className = 'object-contain',
  sizes = '(max-width: 1024px) 90vw, 46vw',
  priority = false,
}: LogoImageProps) {
  const [src, setSrc] = useState('/images/logo.png');

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      priority={priority}
      onError={() => setSrc('/images/logo-placeholder.svg')}
    />
  );
}
