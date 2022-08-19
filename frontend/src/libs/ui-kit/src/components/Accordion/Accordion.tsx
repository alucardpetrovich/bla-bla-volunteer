import { Accordion as MuiAccordion, AccordionActions, AccordionDetails, AccordionSummary } from '@mui/material';
import React, { FC } from 'react';

import { ReactComponent as Arrow } from './assets/arrow.svg';

interface AccordionProps {
  title: string;
  children: { content: React.ReactNode; actions?: React.ReactNode };
  defaultExpanded?: boolean;
}

export const Accordion: FC<AccordionProps> = ({ children: { content, actions }, title, defaultExpanded = false }) => {
  return (
    <MuiAccordion defaultExpanded={defaultExpanded} TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary expandIcon={<Arrow />}>{title}</AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
      {actions && <AccordionActions>{actions}</AccordionActions>}
    </MuiAccordion>
  );
};
