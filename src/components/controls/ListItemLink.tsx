import React, { forwardRef, useMemo } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { Box, ListItem, ListItemBaseProps , ListItemIcon, ListItemText } from '@mui/material';

import { ToolTip } from './ToolTip';

import type { Placement } from '../../types';

const styles = {
  color: 'primary.contrastText'
};

/**
 * List Item Link Button Props
 */
interface ListItemLinkProps {
  icon?: React.ReactNode;
  primary: string;
  to: string;
  placement: Placement;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

/**
 * List Item Link Button (Router Link)
 */
export const ListItemLink = (props: ListItemLinkProps & ListItemBaseProps) => {
  const { icon, primary, to, placement, onClick } = props;

  const renderLink = useMemo(
    () =>
      forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(function Link(
        itemProps,
        ref,
      ) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} onClick={onClick} />;
      }),
    [to, onClick]
  );

  return (
    <Box component='li'>
      <ToolTip title={primary} placement={placement} component={
        <ListItem button component={renderLink} {...props}>
          {icon ? (
            <ListItemIcon sx={{ ...styles, ml: 0.5 }}>{icon}</ListItemIcon>
          ) : null}
          <ListItemText primary={primary} sx={styles} />
        </ListItem>}
      />
    </Box>
  );
};