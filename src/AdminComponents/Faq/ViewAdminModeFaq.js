import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';

 const ViewAdminModeFaq=({question, answer, handleCallUpdateWindow, faq_id})=>{
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} className='bg-white rounded-md' onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={ <ExpandMoreIcon /> }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className='shadow-sm' sx={{ width: '100%', flexShrink: 0 }}>
            {question}
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>Question</Typography> */}
        </AccordionSummary>
        <AccordionDetails className='bg-lime-50 p-2 mx-1 rounded-sm'>
          <Typography>
            {answer}
          </Typography>
        </AccordionDetails>
          <section className='space-x-5 flex justify-center'>
          <button className='p-1 text-xl bg-orange-200 hover:bg-orange-500 text-orange-600 hover:text-white duration-200 rounded-md' onClick={()=>{handleCallUpdateWindow(faq_id)}}><EditIcon /></button>
          <button className='p-1 text-xl bg-red-200 hover:bg-red-500 text-red-700 hover:text-white duration-200 rounded-md' onClick={()=>{handleCallUpdateWindow(faq_id)}}><DeleteIcon /></button>
          </section>
      </Accordion>
    </div>
  );
}


export default ViewAdminModeFaq
