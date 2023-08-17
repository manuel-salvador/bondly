import React, { useState } from 'react';
import { ArrowUp } from './Icons';

type Props = {};

export default function FAQS({}: Props) {
  const [questionIdx, setQuestionIdx] = useState(-1);

  const handleOnClick = (idx: number) => {
    setQuestionIdx(idx === questionIdx ? -1 : idx);
  };

  return (
    <section className="my-20">
      <h3 className="font-bold text-2xl mb-6">FAQS</h3>

      <ul className="flex flex-col gap-4">
        {questions.map((item, idx) => (
          <li key={item.question} className={`flex flex-col transition-all duration-300 overflow-hidden relative rounded-md`}>
            <span className={`bg-primary/60 p-4 text-lg cursor-pointer`} onClick={() => handleOnClick(idx)}>
              {item.question}
            </span>
            <span
              className={`bg-primary/20 transition-all duration-300 block p-4 overflow-hidden ${
                questionIdx === idx ? 'h-fit py-4' : 'h-0 py-0'
              }`}
            >
              {item.answer}
            </span>
            <span className={`absolute right-10 top-5 transition-all duration-300 ${questionIdx === idx ? '' : '-rotate-180'}`}>
              <ArrowUp />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

const questions = [
  {
    question: 'Why Bondly?',
    answer:
      "Bondly offers a range of advantages and benefits that make it a solid choice for community and enterprise management based on blockchain:\n\nEnhanced transparency: Bondly uses blockchain technology to ensure transparency in all transactions and activities within the community or enterprise. Each action is securely and verifiably recorded, fostering trust and accountability.\n\nReinforced trust: By eliminating intermediaries and leveraging blockchain's decentralization, Bondly establishes a trusted environment for all parties involved. This reduces the risk of fraud and manipulation, promoting fairness and equal opportunities.\n\nImproved efficiency: Bondly automates processes through smart contracts, streamlining operations, reducing administrative burden, and minimizing errors. This saves time and resources, allowing administrators to focus on strategic initiatives and promote growth.",
  },
  {
    question: 'How Bondly help my organization?',
    answer:
      "Bondly offers various forms of support to your organization:\n\nTransparent resource management: With Bondly, you can have a detailed and transparent record of resource allocation and tracking within your community or enterprise. This facilitates more efficient and equitable management.\n\n Increased participation and collaboration: Bondly encourages participation and collaboration among community members or collaborators. The platform provides tools that enable smoother interaction and more inclusive decision-making.\n\nInnovation opportunities: Thanks to Bondly's capabilities, you can explore new opportunities for returns on locked funds.",
  },
  {
    question: 'Do I need to be a developer to use Bondly?',
    answer:
      "You don't need to be a developer to use Bondly. The platform is designed to be accessible and user-friendly for community leaders and decision-makers in various organizations. You can take advantage of Bondly's functions and features without specialized technical knowledge.",
  },
];
