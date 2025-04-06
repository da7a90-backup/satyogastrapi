import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionsButton extends Schema.Component {
  collectionName: 'components_sections_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
    primary: Attribute.Boolean;
  };
}

export interface SectionsContentSection extends Schema.Component {
  collectionName: 'components_sections_content_sections';
  info: {
    displayName: 'contentSection';
  };
  attributes: {
    eyebrow: Attribute.String;
    heading: Attribute.String;
    bulletPoints: Attribute.RichText;
    backgroundImage: Attribute.Media;
    buttons: Attribute.Component<'sections.button', true>;
    content: Attribute.RichText;
  };
}

export interface SectionsCtaSection extends Schema.Component {
  collectionName: 'components_sections_cta_sections';
  info: {
    displayName: 'ctaSection';
  };
  attributes: {
    eyebrow: Attribute.String;
    heading: Attribute.String;
    description: Attribute.String;
    primaryButtonText: Attribute.String;
    primaryButtonLink: Attribute.String;
    secondaryButtonText: Attribute.String;
    secondaryButtonLink: Attribute.String;
  };
}

export interface SectionsDuration extends Schema.Component {
  collectionName: 'components_sections_durations';
  info: {
    displayName: 'duration';
  };
  attributes: {
    value: Attribute.Integer;
    unit: Attribute.Enumeration<['days', 'weeks', 'months']>;
  };
}

export interface SectionsFeature extends Schema.Component {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.String;
  };
}

export interface SectionsHeroSection extends Schema.Component {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    heading: Attribute.String;
    content: Attribute.Text;
    buttonText: Attribute.String;
    buttonLink: Attribute.String;
    backgroundImage: Attribute.Media;
  };
}

export interface SectionsLearningTabsSection extends Schema.Component {
  collectionName: 'components_sections_learning_tabs_sections';
  info: {
    displayName: 'learningTabsSection';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    tabs: Attribute.Component<'sections.tab', true>;
  };
}

export interface SectionsSeo extends Schema.Component {
  collectionName: 'components_sections_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    keywords: Attribute.Text;
    metaImage: Attribute.Media;
    canonicalUrl: Attribute.String;
  };
}

export interface SectionsSocialLinks extends Schema.Component {
  collectionName: 'components_sections_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    platform: Attribute.Enumeration<
      ['Facebook', 'X', 'Instagram', 'LinkedIn', 'Youtube', 'Other']
    >;
    url: Attribute.String;
  };
}

export interface SectionsTab extends Schema.Component {
  collectionName: 'components_sections_tabs';
  info: {
    displayName: 'tab';
  };
  attributes: {
    identifier: Attribute.String;
    label: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    buttonText: Attribute.String;
    buttonLink: Attribute.String;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sections.button': SectionsButton;
      'sections.content-section': SectionsContentSection;
      'sections.cta-section': SectionsCtaSection;
      'sections.duration': SectionsDuration;
      'sections.feature': SectionsFeature;
      'sections.hero-section': SectionsHeroSection;
      'sections.learning-tabs-section': SectionsLearningTabsSection;
      'sections.seo': SectionsSeo;
      'sections.social-links': SectionsSocialLinks;
      'sections.tab': SectionsTab;
    }
  }
}
