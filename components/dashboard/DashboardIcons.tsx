
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
  Home: (props: IconWrapperProps) => <Icon name="home" size="sm" {...props} />,
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
  Plane: (props: IconWrapperProps) => <Icon name="flight" size="sm" {...props} />,
  
  // New Icons for Gallery
  Wifi: (props: IconWrapperProps) => <Icon name="wifi" size="sm" {...props} />,
  Battery: (props: IconWrapperProps) => <Icon name="battery_full" size="sm" {...props} />,
  Signal: (props: IconWrapperProps) => <Icon name="signal_cellular_alt" size="sm" {...props} />,
  Layers: (props: IconWrapperProps) => <Icon name="layers" size="sm" {...props} />,
  Palette: (props: IconWrapperProps) => <Icon name="palette" size="sm" {...props} />,
  Grid: (props: IconWrapperProps) => <Icon name="grid_view" size="sm" {...props} />,
  List: (props: IconWrapperProps) => <Icon name="view_list" size="sm" {...props} />,
  Download: (props: IconWrapperProps) => <Icon name="download" size="sm" {...props} />,
  Share: (props: IconWrapperProps) => <Icon name="share" size="sm" {...props} />,
  Heart: (props: IconWrapperProps) => <Icon name="favorite_border" size="sm" {...props} />,
  Copy: (props: IconWrapperProps) => <Icon name="content_copy" size="sm" {...props} />,
  Filter: (props: IconWrapperProps) => <Icon name="filter_list" size="sm" {...props} />,
  Sort: (props: IconWrapperProps) => <Icon name="sort" size="sm" {...props} />,
  Play: (props: IconWrapperProps) => <Icon name="play_arrow" size="sm" {...props} />,
  Drag: (props: IconWrapperProps) => <Icon name="drag_indicator" size="sm" {...props} />,
  Eye: (props: IconWrapperProps) => <Icon name="visibility" size="sm" {...props} />,
  
  // Finance & Commerce Icons
  ShoppingBag: (props: IconWrapperProps) => <Icon name="shopping_bag" size="sm" {...props} />,
  Refresh: (props: IconWrapperProps) => <Icon name="refresh" size="sm" {...props} />,

  // Security & Legal Icons
  Key: (props: IconWrapperProps) => <Icon name="vpn_key" size="sm" {...props} />,
  Bug: (props: IconWrapperProps) => <Icon name="bug_report" size="sm" {...props} />,
  Hdd: (props: IconWrapperProps) => <Icon name="storage" size="sm" {...props} />,
  Fingerprint: (props: IconWrapperProps) => <Icon name="fingerprint" size="sm" {...props} />,
  Globe: (props: IconWrapperProps) => <Icon name="public" size="sm" {...props} />,
  Shield: (props: IconWrapperProps) => <Icon name="security" size="sm" {...props} />,
  Rss: (props: IconWrapperProps) => <Icon name="rss_feed" size="sm" {...props} />,
  Mail: (props: IconWrapperProps) => <Icon name="mail" size="sm" {...props} />,
  Book: (props: IconWrapperProps) => <Icon name="menu_book" size="sm" {...props} />,
  Phone: (props: IconWrapperProps) => <Icon name="smartphone" size="sm" {...props} />,
  EyeOff: (props: IconWrapperProps) => <Icon name="visibility_off" size="sm" {...props} />,
};
