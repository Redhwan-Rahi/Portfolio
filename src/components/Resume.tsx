import React from "react";
import { Button, Container, Box, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import resumePdf from '../assets/Redhwan_Rahi_Resume.pdf';

const Resume = () => {
  return (
    <Box className="resume-container" sx={{ pt: 10, pb: 5 }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h1">Resume</Typography>
          <Button 
            variant="contained" 
            startIcon={<DownloadIcon />} 
            href={resumePdf} 
            download="Redhwan_Rahi_Resume.pdf"
          >
            Download Resume
          </Button>
        </Box>
        
        <Box sx={{ 
          width: '100%', 
          height: 'calc(100vh - 200px)', 
          border: '1px solid #ccc', 
          borderRadius: '4px', 
          overflow: 'hidden' 
        }}>
          <iframe 
            src={`${resumePdf}#view=FitH`}
            title="Resume" 
            width="100%" 
            height="100%" 
            style={{ border: 'none' }} 
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Resume; 