import React from 'react';
import "./OtherSocialWork.css";

const OtherSocialWork = () => {
  // Dummy data for social work organizations
  const socialWorkOrganizations = [
    {
      id: 1,
      name: 'Social Work i Kono',
      description: 'Representing all of social work, social workers, students across Kono.',
    },
    {
      id: 2,
      name: 'Social Work in Makeni',
      description: 'Representing all of social work, social workers, students across Makeni',
    },
    {
      id: 3,
      name: 'Social Work in Bo',
      description: 'Representing all of social work, social workers, students across Bo City',
    },
    // Add more organizations as needed
  ];

  return (
    <div className="other-social-work-container">
      <h2>Other Social Work Organizations in Sierra Leone</h2>
      <div className="social-work-list">
        {socialWorkOrganizations.map(organization => (
          <div key={organization.id} className="social-work-card">
            <h3>{organization.name}</h3>
            <p>{organization.description}</p>
            <button>Find Out More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherSocialWork;
