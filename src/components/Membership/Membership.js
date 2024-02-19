import React from 'react';
import "./Membership.css";

const Membership = () => {
  // Dummy data for social work organizations
  const socialWorkOrganizations = [
    {
      id: 1,
      name: 'Renewals',
      description: 'SLASW membership renews after each year of membership. If you pay by monthly direct debit and your circumstances are unchanged your SLASW membership will renew automatically',
    },
    {
      id: 2,
      name: 'Ready to renew your membership?',
      description: 'If your circumstances are different please contact the membership team to let us know so that we can update your details',
    },
    {
      id: 3,
      name: 'Ways to pay',
      description: 'To make a one-off annual payment, log in to the website and use the payment link.  Alternatively, call the membership team on 0123456789 / 1234 to pay by credit or debit card',
    },
    {
      id: 4,
      name: 'Switch to direct debit and pay monthly',
      description: 'Call us with your account details to hand on 01234 5678 123.  Or, complete the direct debit mandate and return to us in the post.',
    },
    // Add more organizations as needed
  ];

  return (
    <div className="other-membership-container">
      <h2>Your membership</h2>
      <div className="membership-list">
        {socialWorkOrganizations.map(organization => (
          <div key={organization.id} className="membership-card">
            <h3>{organization.name}</h3>
            <p>{organization.description}</p>
            <button>Find Out More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
