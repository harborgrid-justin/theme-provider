import React from 'react';
import { Icon, IconProps } from '../ui-elements/Icon';

// Explicitly define IconWrapperProps to ensure all attributes are available
export interface IconWrapperProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: IconProps['size'];
  className?: string;
  style?: React.CSSProperties;
}

export const Icons = {
  Check: (props: IconWrapperProps) => <Icon name="check" size="sm" {...props} />,
  User: (props: IconWrapperProps) => <Icon name="person" size="sm" {...props} />,
  Chart: (props: IconWrapperProps) => <Icon name="bar_chart" size="sm" {...props} />,
  Bell: (props: IconWrapperProps) => <Icon name="notifications" size="sm" {...props} />,
  Search: (props: IconWrapperProps) => <Icon name="search" size="sm" {...props} />,
  Menu: (props: IconWrapperProps) => <Icon name="menu" size="md" {...props} />,
  Star: (props: IconWrapperProps) => <Icon name="star" size="sm" {...props} />,
  Settings: (props: IconWrapperProps) => <Icon name="settings" size="sm" {...props} />,
  Chat: (props: IconWrapperProps) => <Icon name="chat_bubble_outline" size="sm" {...props} />,
  Folder: (props: IconWrapperProps) => <Icon name="folder" size="md" {...props} />,
  File: (props: IconWrapperProps) => <Icon name="description" size="md" {...props} />,
  Send: (props: IconWrapperProps) => <Icon name="send" size="sm" {...props} />,
  More: (props: IconWrapperProps) => <Icon name="more_vert" size="sm" {...props} />,
  ChevronDown: (props: IconWrapperProps) => <Icon name="expand_more" size="sm" {...props} />,
  ChevronRight: (props: IconWrapperProps) => <Icon name="chevron_right" size="sm" {...props} />,
  Image: (props: IconWrapperProps) => <Icon name="image" size="lg" {...props} />,
  Help: (props: IconWrapperProps) => <Icon name="help_outline" size="sm" {...props} />,
  Edit: (props: IconWrapperProps) => <Icon name="edit" size="sm" {...props} />,
  Trash: (props: IconWrapperProps) => <Icon name="delete_outline" size="sm" {...props} />,
  Lock: (props: IconWrapperProps) => <Icon name="lock" size="sm" {...props} />,
  Cloud: (props: IconWrapperProps) => <Icon name="cloud_upload" size="md" {...props} />,
  Calendar: (props: IconWrapperProps) => <Icon name="calendar_today" size="sm" {...props} />,
  Clock: (props: IconWrapperProps) => <Icon name="schedule" size="sm" {...props} />,
  Attach: (props: IconWrapperProps) => <Icon name="attach_file" size="sm" {...props} />,
  Link: (props: IconWrapperProps) => <Icon name="link" size="sm" {...props} />,
  Flag: (props: IconWrapperProps) => <Icon name="flag" size="sm" {...props} />,
  Tag: (props: IconWrapperProps) => <Icon name="label" size="sm" {...props} />,
  Close: (props: IconWrapperProps) => <Icon name="close" size="sm" {...props} />,
  Code: (props: IconWrapperProps) => <Icon name="code" size="sm" {...props} />,
};