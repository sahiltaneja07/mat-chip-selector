import type { ChipProps } from '@mui/material';
import type { ReactNode } from 'react';

import type { SelectOption } from './SelectOption.model';

export interface ChipDisplayProps {
  option: SelectOption;
  onDelete: () => void;
  onClick?: () => void;
  disabled?: boolean;
  color?: ChipProps['color'];
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium';
  deleteIcon?: ReactNode;
  chipProps?: Partial<ChipProps>;
}
