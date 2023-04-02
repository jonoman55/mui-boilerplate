import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Box, CardHeader, Button, Typography } from "@mui/material";
import { SentimentDissatisfied as NotFoundIcon } from "@mui/icons-material";

import { Card, CardContent, CardActions } from '../../styled/Card.styled';
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
    <Box component='div' sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Card elevation={elevation} drawerOpen={drawerOpen} sx={{ width: '50%' }}>
        <CardHeader
          title='Page Not Found'
          sx={{ textAlign: 'center', fontWeight: 'bold' }}
        />
        <CardContent>
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
        <CardActions>
          <Button color='secondary' variant='contained' onClick={() => navigate('/')} sx={{ my: 1, width: 125 }}>
            Home
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
