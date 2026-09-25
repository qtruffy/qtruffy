import {
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  NewTwitterIcon,
} from '@hugeicons/core-free-icons';
import { IconSvgObject } from '@hugeicons/core-free-icons/types';
import {
  SEO_GITHUB_ACCOUNT_URL,
  SEO_INSTAGRAM_ACCOUNT_URL,
  SEO_LINKEDIN_ACCOUNT_URL,
  SEO_TWITTER_ACCOUNT_URL,
} from './constants';

export type SocialType = {
  name: string;
  url: string;
  icon: IconSvgObject;
};

export const SEO_SOCIALS: SocialType[] = [
  {
    name: 'LinkedIn',
    url: SEO_LINKEDIN_ACCOUNT_URL,
    icon: Linkedin01Icon,
  },
  {
    name: 'Twitter',
    url: SEO_TWITTER_ACCOUNT_URL,
    icon: NewTwitterIcon,
  },
  {
    name: 'Instagram',
    url: SEO_INSTAGRAM_ACCOUNT_URL,
    icon: InstagramIcon,
  },
  {
    name: 'GitHub',
    url: SEO_GITHUB_ACCOUNT_URL,
    icon: GithubIcon,
  },
];
