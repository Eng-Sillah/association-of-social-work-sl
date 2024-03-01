import React from 'react';
import "./OtherSocialWork.css";

const OtherSocialWork = () => {
  // Dummy data for social work organizations
  const socialWorkOrganizations = [
    {
      id: 1,
      name: 'SOCIAL WORK IN THE WESTERN AREA REGION',
      description: `Representing all of social work, social workers, students across Freetown, its environs of the Urban and the Western Area Rural District. Hosting the Social Work Societies of Fourah Bay College and Milton Margai Technical University. The Western Area Region hosts the Capital and the Secretariat of the National Executive Committee. The Regional Coordination is led by the Regional Secretary, Western Region // Osman Bundu Sidique`,
    },
    {
      id: 2,
      name: 'SOCIAL WORK IN THE NORTH-EASTERN REGION',
      description: 'Representing all of social work, social workers, students across Bombali, Tonkolili, Koinadugu and Falaba Districts. Hosting the Social Work Societies of University of Makeni (UNIMAK) and Ernest Bai Koroma University of Science and Technology (EBKUST). North-East has Makeni of Bombali as its Regional Headquarter and hosts the Regional Secretariat of the North-eastern Branch Executive Committee. The Regional Coordination is led by the Regional Secretary, Nort-Eastern Region // Mariama Alice Kamara',
    },
    {
      id: 3,
      name: 'SOCIAL WORK IN THE NORTH-WESTERN REGION',
      description: 'Representing all of social work, social workers, students across Portloko, Kambia and Karene Districts. North-West Region has Lunsar of Portloko as its Regional Headquarter and hosts the Regional Secretariat of the North-western Branch Executive Committee. The Regional Coordination is led by the Regional Secretary, North-Eastern Region // Alfred Kelley Kargbo',
    },
    {
      id: 4,
      name: 'SOCIAL WORK IN THE SOUTHERN REGION',
      description: 'Representing all of social work, social workers, students across Bo, Bonthe, Moyamba and Pujehun Districts. Hosting the Social Work Society of N’jala University. South Region has Bo Town as its Regional Headquarter and hosts the Regional Secretariat of the Southern Regional Branch Executive Committee. The Regional Coordination is led by the Regional Secretary, Southern Region // Esther Isata Kortu',
    },
    {
      id: 5,
      name: 'SOCIAL WORK IN THE EASTERN REGION',
      description: 'Representing all of social work, social workers, students across Kenema, Kailahun, and Kono Districts. Hosting the Social Work Society of Eastern Technical University (ETU). East Region has Kenema Town as its Regional Headquarter and hosts the Regional Secretariat of the Eastern Regional Branch Executive Committee. The Regional Coordination is led by the Regional Secretary, Eastern Region // Sulaiman Hazic Lamin',
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
