'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function LogoImage() {
  const [src, setSrc] = useState('/images/logo.png');

  return (
    <Image
      src={src}
      alt="TumblerPigeon Logo"
      fill
      sizes="(max-width: 768px) 144px, 176px"
      className="object-cover"
      priority
      onError={() => setSrc('/images/logo-placeholder.svg')}
    />
  );
}
