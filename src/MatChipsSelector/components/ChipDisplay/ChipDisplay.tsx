import { Chip, Box } from '@mui/material';
import { motion } from 'framer-motion';
import type { ChipDisplayProps } from '../../models';
import './ChipDisplay.scss';

export const ChipDisplay = ({
  option,
  onDelete,
  onClick,
  disabled = false,
  color = 'primary',
  variant = 'filled',
  size = 'medium',
  deleteIcon,
  chipProps,
}: ChipDisplayProps) => {
  return (
    <Box
      className="chip"
      component={motion.div}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <Chip
        className={`chip-element ${disabled ? 'chip-disabled' : ''}`}
        label={option.label}
        onDelete={disabled ? undefined : onDelete}
        onClick={onClick}
        disabled={disabled}
        color={color}
        variant={variant}
        size={size}
        avatar={option.icon ? <>{option.icon}</> : undefined}
        deleteIcon={deleteIcon as React.ReactElement | undefined}
        {...chipProps}
      />
    </Box>
  );
};

export default ChipDisplay;