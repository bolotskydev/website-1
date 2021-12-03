import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import Logo from 'images/logo.inline.svg';

const menuItems = [
  {
    heading: 'Company',
    links: [
      {
        text: 'Pricing',
        to: '/',
      },
      {
        text: 'Team',
        to: '/',
      },
    ],
  },
  {
    heading: 'Resources',
    links: [
      {
        text: 'Blog',
        to: '/',
      },
      {
        text: 'Docs',
        to: '/',
      },
      {
        text: 'Changelog',
        to: '/',
      },
    ],
  },
  {
    heading: 'Social',
    links: [
      {
        text: 'Twitter',
        to: '/',
      },
      {
        text: 'Discord',
        to: '/',
      },
      {
        text: 'Github',
        to: '/',
      },
    ],
  },
  {
    heading: 'Legal',
    links: [
      {
        text: 'Privacy policy',
        to: '/',
      },
      {
        text: 'Terms of service',
        to: '/',
      },
    ],
  },
];

const Footer = () => (
  <footer className="overflow-hidden border-t-2 border-black safe-paddings">
    <Container className="flex justify-between xl:flex-col lg:border-none">
      <div className="flex flex-col justify-between pt-8 pb-14 2xl:pt-[25px] 2xl:pb-11 xl:relative xl:flex-row xl:items-center xl:py-6 md:block xl:before:absolute xl:before:left-[-50vw] xl:before:-top-0.5 xl:before:w-[200vw] xl:before:h-0.5 xl:before:bg-black">
        <Link className="block text-black" to="/">
          <span className="sr-only">Zenith</span>
          <Logo className="h-6 2xl:h-5" aria-hidden />
        </Link>
        <p className="t-base md:mt-4">Zenith 2021 Ⓒ All rights reserved</p>
      </div>
      <div className="flex xl:order-first xl:border-b-2 xl:border-black xl:grid xl:grid-cols-4 xl:gap-x-6 lg:gap-x-4 md:grid-cols-2 md:gap-y-8 md:pt-8 md:pb-11">
        {menuItems.map(({ heading, links }, index) => (
          <div
            className="flex flex-col w-[300px] border-l-2 border-black 3xl:w-[252px] 2xl:w-[208px] xl:w-full xl:border-none"
            key={index}
          >
            <Heading
              className="relative px-10 border-b-2 border-black py-9 2xl:px-8 2xl:py-7 xl:px-0 xl:border-none xl:pt-8 xl:pb-0 md:pt-0 before:absolute before:left-0 before:-bottom-0.5 before:w-[50vw] before:h-0.5 before:bg-black xl:before:hidden"
              tag="h3"
              size="xs"
              theme="black"
            >
              {heading}
            </Heading>
            <ul className="flex flex-col flex-grow px-10 mt-10 space-y-6 pb-14 2xl:px-8 2xl:mt-8 2xl:pb-11 xl:px-0 md:pb-0 md:mt-6 md:space-y-5">
              {links.map(({ to, text }, index) => (
                <li style={{ fontSize: 0 }} key={index}>
                  <Link to={to} theme="black" size="sm">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);

export default Footer;