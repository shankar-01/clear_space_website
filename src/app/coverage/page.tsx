'use client';

import dynamic from 'next/dynamic';

// Load CoverageMap only on client
const CoverageMap = dynamic(() => import('@/components/coveragemap'), {
  ssr: false,
});

export default function CoveragePage() {
  return <CoverageMap />;
}
