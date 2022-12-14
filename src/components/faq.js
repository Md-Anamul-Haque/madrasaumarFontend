import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';

 const Faq=({question, answer})=>{
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (<>
  {(answer || question) &&
     <div>
      <Accordion expanded={expanded === 'panel1'} className='bg-white dark:bg-gray-700 dark:text-white rounded-md' onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={ <ExpandMoreIcon /> }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='dark:bg-gray-800 dark:text-white '
        >
          <Typography className='shadow-sm font-serif ' sx={{ fontSize:'1.3rem', width: '100%', flexShrink: 1 }}>
            {question}
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>Question</Typography> */}
        </AccordionSummary>
        <AccordionDetails className='bg-lime-50 dark:bg-gray-500 dark:text-white p-2 mx-1 rounded-sm'>
          <Typography className='text-sm font-mono' >
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>}
  </>);
}


export default Faq
