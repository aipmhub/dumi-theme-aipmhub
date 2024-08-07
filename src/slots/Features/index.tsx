import { Features as F } from '@aipmui/ui';
import { useTheme } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';

import { featuresSel, useSiteStore } from '@/store';

const Features = memo(() => {
  const features = useSiteStore(featuresSel, isEqual);
  const theme = useTheme();

  if (!features?.length) return;

  return <F items={features} maxWidth={theme.contentMaxWidth} style={{ margin: '0 16px' }} />;
});

export default Features;
