import React from "react";
import styled from "styled-components";
import profileImg from "../assets/img/KakaoTalk_20220620_163952359.jpg";
import phoneLogo from "../assets/img/icons8-phone-50.png";
import emailLogo from "../assets/img/icons8-mail-50.png";
import githubLogo from "../assets/img/icons8-github-32.png";

export default function Introduction() {
  return (
    <Profile>
      <ProfileImg
        src={profileImg}
        alt="Dahye on the almost peak of the mountain"
      />
      <Introduce>
        <h3>Conditional Achiever</h3>
        <p>
          I'm quite easy going and not so competitive in general. But when it
          comes to programming, I become a passionate and enthusiastic achiever.{" "}
          <br />
          I'm interested in a sustainable programming, which means I want to
          write code that never require to be written all over again. I'm a
          self-taught learner who can pick up new skills by searching and
          studying by myself.
        </p>
        I have strong communication skills and work ethic. Asking questions and
        helping people without any hesitation are my good qualities to work with
        others.
        <h3>How to reach me</h3>
        <Contact>
          <ContactLogo src={phoneLogo} alt="phone Icon" />
          <span>82+ 010- 2173- 3071</span>
        </Contact>
        <Contact>
          <ContactLogo src={emailLogo} alt="mail Icon" />
          <span>06robin11@gmail.com</span>
        </Contact>
        <Contact>
          <ContactLogo src={githubLogo} alt="github Icon" />
          <a
            href="https://github.com/Dahyeeee"
            target="_blanck"
            rel="noopener noreferrer"
          >
            <span>https://github.com/Dahyeeee</span>
          </a>
        </Contact>
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
