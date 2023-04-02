import { styled, Box, Tooltip, TooltipProps, tooltipClasses, Zoom, SxProps } from '@mui/material';

/**
 * Styled Tooltip
 */
export const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: 12,
    fontWeight: 'bold',
    boxShadow: theme.shadows[2],
    border: 'solid',
    borderWidth: 'thin',
    borderColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.dark,
  },
}));

/**
 * ToolTip Props
 */
interface ToolTipProps {
  /**
   * Tooltip Title
   */
  title: string;
  /**
   * Tooltip Placement
   */
  placement: TooltipProps['placement'];
  /**
   * React Child Component
   */
  component: React.ReactNode | JSX.Element | JSX.Element[];
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles
   */
  sx?: SxProps
};

/**
 * Custom ToolTip Component
 */
export const ToolTip = ({ title, placement, component, sx }: ToolTipProps) => (
  <StyledTooltip title={title} placement={placement} TransitionComponent={Zoom}>
    <Box component='div' sx={sx}>
      {component}
    </Box>
  </StyledTooltip>
);