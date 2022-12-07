import React from "react";
import styled from "styled-components";
import profile from "../assets/data/profile";

export default function Introduction() {
  const { imgUrl, imgAlt, subTitle, introductionParagraphs, contacts } =
    profile;

  return (
    <Profile>
      <ProfileImg src={imgUrl} alt={imgAlt} />
      <Introduce>
        <h3>{subTitle}</h3>
        {introductionParagraphs.map((each, ind) => (
          <p key={ind}>{each}</p>
        ))}
        <h3>How to reach me</h3>
        {contacts.map((contact) => (
          <Contact key={contact.name}>
            <ContactLogo src={contact.logoUrl} alt={contact.logoAlt} />
            {contact.link ? (
              <a href={contact.link} target="_blanck" rel="noopener noreferrer">
                <span>{contact.content}</span>
              </a>
            ) : (
              <span>{contact.content}</span>
            )}
          </Contact>
        ))}
      </Introduce>
    </Profile>
  );
}

const Profile = styled.div`
  display: flex;
`;

const ProfileImg = styled.img`
  width: 15rem;
  height: 50%;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 2rem;
  translate: 0 4rem;
`;

const Introduce = styled.div`
  text-align: left;
  line-height: 1.9rem;
`;

const Contact = styled.div`
  display: flex;
  margin-bottom: 1rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
`;

const ContactLogo = styled.img`
  width: 30px;
  margin-right: 1rem;
`;
