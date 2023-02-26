import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

export default function Companycard(props) {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: 320,
        gap: 2,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      
      <AspectRatio ratio="1" sx={{ width: 150 }}>
        <img
          src={props.img}
          
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <div>
        <Typography level="h1" fontSize="md" id="card-description" mb={0.5}>
          {props.name}
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
         
           <p style={{
            fontSize: '12px',
           }}>
           {props.address}
           </p>
          
        </Typography>
        <Link href={`/company/${props.id}`} sx={{
            textDecoration: 'none',
            
        }} >
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
         
          sx={{ pointerEvents: 'none' 
        
        }}
        >
            <p style={{
                color: '#3f51b5',
                padding: '0px',
                margin: '0px',
                
              

            }}>
                Visit company
            </p>
           
        </Chip>
        </Link>
      </div>
    </Card>
  );
}
