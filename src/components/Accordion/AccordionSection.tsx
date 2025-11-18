type AccordionSectionProps = {
  title: string | React.ReactNode;
  content: React.ReactNode;
};

export const AccordionSection = ({ title, content }: AccordionSectionProps) => {
  return (
    <div>
      {title}
      {content}
    </div>
  );
};
