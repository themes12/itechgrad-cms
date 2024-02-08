import type { Schema, Attribute } from '@strapi/strapi';

export interface CreditCredit extends Schema.Component {
  collectionName: 'components_credit_credits';
  info: {
    displayName: 'Credit';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    total: Attribute.Integer & Attribute.Required;
    lecture: Attribute.Integer & Attribute.Required;
    lab: Attribute.Integer & Attribute.Required;
    independent_study: Attribute.Integer & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'credit.credit': CreditCredit;
    }
  }
}
