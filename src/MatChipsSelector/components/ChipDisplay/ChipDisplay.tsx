import { Chip, Box } from '@mui/material';
import { motion } from 'framer-motion';
import type { ChipDisplayProps } from '../../models';

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
      component={motion.div}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <Chip
        label={option.label}
        onDelete={disabled ? undefined : onDelete}
        onClick={onClick}
        disabled={disabled}
        color={color}
        variant={variant}
        size={size}
        avatar={option.icon ? <>{option.icon}</> : undefined}
        deleteIcon={deleteIcon as React.ReactElement | undefined}
        sx={{
          cursor: disabled ? 'default' : 'pointer',
          transition: 'all 0.2s ease',
          '&:hover': {
            boxShadow: disabled ? 'none' : '0 2px 8px rgba(0,0,0,0.15)',
            transform: disabled ? 'none' : 'translateY(-1px)',
          },
          '& .MuiChip-deleteIcon': {
            transition: 'all 0.2s ease',
            '&:hover': {
              color: 'inherit',
              transform: 'scale(1.1)',
            },
          },
        }}
        {...chipProps}
      />
    </Box>
  );
};

export default ChipDisplay;