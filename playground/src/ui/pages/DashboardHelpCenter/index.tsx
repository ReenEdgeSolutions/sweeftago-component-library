import { AppHelpCenter } from "@component-library"

export const DashboardHelpCenter = () => {

  const handSearchClick = () => {
    // Handle search click event
  }

  const handleWhatsappChatClick = () => {
    // Handle WhatsApp chat click event
  }

  const faqData = [
    {
      id: 1,
      question: "How do I request a delivery?",
      answer: "Use the “New Delivery” button on your Home tab or simply message our assistant on WhatsApp. ",
    },
    {
      id: 2,
      question: "Where can I track my deliveries?",
      answer: "You can track your delivery requests on the dashboard or consult our AI assistant on WhatsApp.",
    },
    {
      id: 3,
      question: "Can I schedule a delivery for later?",
      answer: "Yes. Just set your preferred time when filling the delivery request form.",
    },
    {
      id: 4,
      question: "I was charged wrongly, what should I do?",
      answer: "You can click on each delivery on your dashboard to make reports or justb  report directly on WhatsApp ",
    }
  ]

  return(
    <AppHelpCenter
      handleSearchClick={handSearchClick}
      handleWhatsappChatClick={handleWhatsappChatClick}
      faqData={faqData}
      showHeader={false}
    />
  )
}