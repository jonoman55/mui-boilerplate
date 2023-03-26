import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent, CardActions, Button, Typography } from "@mui/material";
import { SentimentDissatisfied as NotFoundIcon } from "@mui/icons-material";

import { useAppSelector } from "../../../app/hooks";

/**
 * Not Found Card
 */
export const NotFound = () => {
  const navigate = useNavigate();
  const drawerOpen: boolean = useAppSelector(
    (state) => state.app.drawerOpen
  );
  const elevation: number = useMemo(
      () => drawerOpen ? 0 : 2,
      [drawerOpen]
  );  
  return (
    <Card elevation={elevation} sx={(theme) => ({
      margin: theme.spacing(4, 2),
      padding: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius,
      border: drawerOpen ? `1px solid ${theme.palette.divider}` : 'none'
    })}>
      <CardHeader
        title='Page Not Found'
        sx={{ textAlign: 'center', fontWeight: 'bold' }}
      />
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <NotFoundIcon
          sx={{
            height: 48,
            width: 48,
            color: 'primary.contrastText'
          }}
        />
        <Typography component='p' variant='body1' paragraph gutterBottom marginTop={2}>
          Sorry we can't find this page.
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button color='secondary' variant='contained' onClick={() => navigate('/')} sx={{ width: 125 }}>
          Home
        </Button>
      </CardActions>
    </Card>
  );
};
