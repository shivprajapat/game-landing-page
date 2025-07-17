import { AccordionItem, Heading } from "@/components";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const FaqData = [
    {
      title: " What is Ziffi Chess? ",
      content:
        " Ziffi Chess is a fast, fun chess format where each player has only 6 moves to score the most points. It's perfect for quick games during short breaks. Play strategically and see if you can outscore your opponent in just a few moves! ",
    },
    {
      title: "Can you make money playing online chess?",
      content:
        "Yes, you can earn real money by entering cash battles and arenas in Ziffi Chess. If you win, you receive a cash prize, which is available for instant withdrawal.",
    },
    {
      title: "How do you play online chess with friends?",
      content:
        "Invite your friends to join the same cash battle or arena in Ziffi Chess. You can compete in real-time matches and track your performance on the leaderboard together.",
    },
    {
      title: "How can I learn chess for free?",
      content:
        "Ziffi Chess offers free trial games to help you get started. You can also explore strategies and tips to improve your game before jumping into cash battles.",
    },
    {
      title: "What are the benefits of playing Chess?",
      content:
        "Play quick, fun games in just 6 moves. Earn real money by winning cash battles. Join tournaments and track your ranking. Compete with friends in real-time matches. Enjoy secure and instant withdrawals for your winnings.",
    },
    {
      title: "What is 6-move chess?",
      content:
        "Play quick, fun games in just 6 moves. Earn real money by winning cash battles. Join tournaments and track your ranking. Compete with friends in real-time matches. Enjoy secure and instant withdrawals for your winnings.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section>
      <Heading>FAQ's About Chess Game</Heading>

      <div className="max-w-5xl mx-4 xl:mx-auto">
        <div className="space-y-2">
          {FaqData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
