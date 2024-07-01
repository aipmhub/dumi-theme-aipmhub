import { Icon } from '@aipmui/ui';
import { Link } from 'dumi';
import { Bug, FileClock, GitFork, Github } from 'lucide-react';
import { FooterColumn, FooterColumnItem } from 'rc-footer/es/column';

interface GetColumnParameters {
  github?: string;
}
export const getColumns = ({ github }: GetColumnParameters) => {
  const resources: FooterColumn = {
    items: [
      {
        description: 'AIGC Components',
        openExternal: true,
        title: 'AiPM UI',
        url: 'https://github.com/aipmhub/aipm-ui',
      },
      {
        description: 'Awesome lint configs',
        openExternal: true,
        title: 'AiPM Lint',
        url: 'https://github.com/aipmhub/aipm-lint',
      },
      {
        description: 'AiPM Dumi Theme',
        openExternal: true,
        title: 'Designed for Dumi 2',
        url: 'https://github.com/aipmhub/dumi-theme-aipmhub',
      },
    ],
    title: 'Resources',
  };
  const community: FooterColumn = {
    items: [
      github && {
        icon: <Icon icon={Bug} size="small" />,
        openExternal: true,
        title: 'Report Bug',
        url: `${github}/issues/new/choose`,
      },
      github && {
        icon: <Icon icon={GitFork} size="small" />,
        openExternal: true,
        title: 'Request Feature',
        url: `${github}/issues/new/choose`,
      },
    ].filter(Boolean) as FooterColumnItem[],
    title: 'Community',
  };

  const help: FooterColumn = {
    items: [
      github && {
        icon: <Icon icon={Github} size="small" />,
        openExternal: true,
        title: 'GitHub',
        url: github,
      },
      {
        LinkComponent: Link,
        icon: <Icon icon={FileClock} size="small" />,
        title: 'Changelog',
        url: '/changelog',
      },
    ].filter(Boolean) as FooterColumnItem[],
    title: 'Help',
  };

  const more: FooterColumn = {
    items: [
      {
        description: 'Chat Bot',
        openExternal: true,
        title: '🤖 AiPM Chat',
        url: 'https://github.com/aipmhub/aipm-chat',
      },
      {
        description: '📄 Feishu Documents',
        openExternal: true,
        title: '📝 AiPM Community',
        url: 'https://roadmaps.feishu.cn/wiki/RykrwFxPiiU4T7kZ63bc7Lqdnch',
      },
      {
        description: 'Gen intelligently',
        openExternal: true,
        title: '🌿 AiPM Official',
        url: 'https://www.theforage.cn',
      },
    ],
    title: 'More Products',
  };

  return [resources, community, help, more];
};
