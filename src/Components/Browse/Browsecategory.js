import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Collapse, Typography, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const ExpandMore = styled((props) => <IconButton {...props} />)(({ theme, expand }) => ({
  transform: expand ? 'rotate(90deg)' : 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Browsecategory = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(true);
  const [expanded3, setExpanded3] = useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };

  return (
    <>
      <Card
        sx={{
          backgroundColor: '#383840',
          color: 'white',
          width: expanded1 ? '100%' : '50%',
          transition: 'width 0.5s ease-in-out',
          padding: '1rem',
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CardHeader title="Brand 1" />
          <Box sx={{ ml: 'auto' }}>
            <ExpandMore
              expand={expanded1}
              onClick={handleExpandClick1}
              aria-expanded={expanded1}
              aria-label="show more"
            >
              <ExpandCircleDownIcon style={{ transform: 'rotate(270deg)', color: 'white' }} />
            </ExpandMore>
          </Box>
        </Box>
        <Collapse in={expanded1} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph >Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card
        sx={{
          backgroundColor: '#383840',
          color: 'white',
          width: expanded2 ? '100%' : '50%',
          transition: 'width 0.5s ease-in-out',
          padding: '1rem',
          marginTop: '1rem',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CardHeader title="Brand 2" />
          <Box sx={{ ml: 'auto' }}>
            <ExpandMore
              expand={expanded2}
              onClick={handleExpandClick2}
              aria-expanded={expanded2}
              aria-label="show more"
            >
              <ExpandCircleDownIcon style={{ transform: 'rotate(270deg)', color: 'white' }} />
            </ExpandMore>
          </Box>
        </Box>
        <Collapse in={expanded2} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
            "Climbing to new marketing heights, HyperBoost's AI-powered solutions rewrite the playbook for success. This case study reveals the transformational journey where data meets innovation, redefining marketing excellence one click at a time."
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card
        sx={{
          backgroundColor: '#383840',
          color: 'white',
          width: expanded3 ? '100%' : '50%',
          transition: 'width 0.5s ease-in-out',
          padding: '1rem',
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CardHeader title="Brand 3" />
          <Box sx={{ ml: 'auto' }}>
            <ExpandMore
              expand={expanded3}
              onClick={handleExpandClick3}
              aria-expanded={expanded3}
              aria-label="show more"
            >
              <ExpandCircleDownIcon style={{ transform: 'rotate(270deg)', color: 'white' }} />
            </ExpandMore>
          </Box>
        </Box>
        <Collapse in={expanded3} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
            "Climbing to new marketing heights, HyperBoost's AI-powered solutions rewrite the playbook for success. This case study reveals the transformational journey where data meets innovation, redefining marketing excellence one click at a time."
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default Browsecategory;