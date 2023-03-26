import React from "react";
import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardContent as MuiCardContent,
  CardContentProps as MuiCardContentProps,
  CardActions as MuiCardActions,
  CardActionsProps as MuiCardActionsProps
} from "@mui/material";
import { styled } from "@mui/material/styles";

/**
 * Card Props
 */
interface CardProps extends MuiCardProps {
  component?: React.ReactNode;
  drawerOpen?: boolean;
};

/**
 * Styled Card
 */
export const Card = styled(({ ...props }: CardProps) =>
  <MuiCard {...props} />, {
  shouldForwardProp: (prop: PropertyKey) => prop !== 'drawerOpen',
})(({ theme, drawerOpen }) => ({
  margin: theme.spacing(6, 0),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  border: drawerOpen ? `1px solid ${theme.palette.divider}` : 'none',
  borderRadius: theme.spacing(2),
}));

/**
 * Styled CardContent
 */
export const CardContent = styled(MuiCardContent)<MuiCardContentProps>(({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

/**
 * Styled CardActions
 */
export const CardActions = styled(MuiCardActions)<MuiCardActionsProps>(({
  display: 'flex',
  justifyContent: 'center',
}));