import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FAQProp {
  faqData: {
    id: number;
    question: string;
    answer: string;
  }[];
  expanded: number | false;
  handleChange: (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

export const FAQ: React.FC<FAQProp> = ({ faqData, expanded, handleChange }: FAQProp) => {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        height: "100%",
      }}
    >
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: { xs: "16px", md: "20px" },
          lineHeight: { xs: "140%", md: "120%" },
          color: "#252423",
          textAlign: "left",
        }}
      >
        FAQ
      </Typography>
      
      <Box sx={{ mt: "24px" }}>
        {faqData.map((faq) => (
          <Accordion
            key={faq.id}
            expanded={expanded === faq.id}
            onChange={handleChange(faq.id)}
            sx={{
              mb: "24px",
              boxShadow: "none",
              "&:before": { display: "none" },
              border: '1px solid #D5D5D5',
              borderRadius: "10px !important",
              overflow: "hidden",
              backgroundColor: "transparent",
              "& .MuiAccordionSummary-content": {
                margin: 0, // remove default bottom margin between summary and details
              },
              p: "16px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${faq.id}-content`}
              id={`panel${faq.id}-header`}
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper": {
                  transition: "transform 0.3s",
                  transform: expanded === faq.id ? "rotate(180deg)" : "rotate(0deg)",
                  alignSelf: "flex-start",
                  marginTop: "3px", // Add a small top margin to align with the first line of text
                },
                "& .MuiAccordionSummary-content": {
                  flexGrow: 1, // Allow content to take up available space
                  alignItems: "flex-start", // Align content at the top
                  margin: 0,
                  justifyContent: "flex-start",
                },
                p: 0, // remove all padding
                minHeight: "0px", // remove default min height
                alignItems: "flex-start", // Align the entire summary content at the top
                "&.Mui-expanded": {
                  minHeight: "0px",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    m: 0,
                    fontWeight: 500,
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: "22px",
                    color: "#252423",
                    textAlign: "left",
                  }}
                >
                  {faq.question}
                </Typography>
              </Box>
            </AccordionSummary>

            <AccordionDetails sx={{ p: 0, pb: 1, mt: "20px", textAlign: "left" }}>
              <Typography
                sx={{
                  m: 0,
                  fontWeight: 400,
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: "22px",
                  color: "#615D5D",
                  textAlign: "left",
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};
