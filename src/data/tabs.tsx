import React, { useState } from 'react';
import { engineeringMentors, dataScienceMentors, businessMentors, productMentors } from './mentors';
import MentorCard from '../components/MentorCard';
import MentorModal from '../components/MentorModal';

export const tabs = [
  {
    id: 'engineering',
    label: 'Engineering',
    content: () => {
      const [selectedMentor, setSelectedMentor] = useState(null);
      
      return (
        <>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {engineeringMentors.map((mentor, index) => (
              <MentorCard 
                key={index} 
                {...mentor} 
                onClick={() => setSelectedMentor(mentor)}
              />
            ))}
          </div>
          <MentorModal
            mentor={selectedMentor}
            onClose={() => setSelectedMentor(null)}
          />
        </>
      );
    },
  },
  {
    id: 'data-science',
    label: 'Data Science',
    content: () => {
      const [selectedMentor, setSelectedMentor] = useState(null);
      
      return (
        <>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dataScienceMentors.map((mentor, index) => (
              <MentorCard 
                key={index} 
                {...mentor} 
                onClick={() => setSelectedMentor(mentor)}
              />
            ))}
          </div>
          <MentorModal
            mentor={selectedMentor}
            onClose={() => setSelectedMentor(null)}
          />
        </>
      );
    },
  },
  {
    id: 'business',
    label: 'Business',
    content: () => {
      const [selectedMentor, setSelectedMentor] = useState(null);
      
      return (
        <>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {businessMentors.map((mentor, index) => (
              <MentorCard 
                key={index} 
                {...mentor} 
                onClick={() => setSelectedMentor(mentor)}
              />
            ))}
          </div>
          <MentorModal
            mentor={selectedMentor}
            onClose={() => setSelectedMentor(null)}
          />
        </>
      );
    },
  },
  {
    id: 'product',
    label: 'Product',
    content: () => {
      const [selectedMentor, setSelectedMentor] = useState(null);
      
      return (
        <>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productMentors.map((mentor, index) => (
              <MentorCard 
                key={index} 
                {...mentor} 
                onClick={() => setSelectedMentor(mentor)}
              />
            ))}
          </div>
          <MentorModal
            mentor={selectedMentor}
            onClose={() => setSelectedMentor(null)}
          />
        </>
      );
    },
  },
];