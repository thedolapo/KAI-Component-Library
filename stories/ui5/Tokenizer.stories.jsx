import React, { useState, useEffect, useRef } from 'react';
import {
  Label,
  Text,
  Token,
  Tokenizer
} from '@ui5/webcomponents-react';

const meta = {
  title: 'UI5 Components/Tokenizer',
  component: Tokenizer,
  args: { style: { width: '250px' } },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=202050:806',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-tokenizer--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render(args) {
    return (
      <Tokenizer {...args}>
        <Token text="Andorra" />
        <Token text="Bulgaria" />
        <Token text="Canada" />
        <Token text="Denmark" />
        <Token text="Estonia" />
        <Token text="Fiji" />
        <Token text="Ghana" />
        <Token text="India" />
        <Token text="Japan" />
        <Token text="Kenya" />
        <Token text="Luxembourg" />
        <Token text="Mexico" />
        <Token text="Nepal" />
        <Token text="Qatar" />
        <Token text="Uganda" />
      </Tokenizer>
    );
  },
};

export const WithLogic = {
  render(args) {
    const [countries, setCountries] = useState([
      'Andorra',
      'Bulgaria',
      'Canada',
      'Denmark',
      'Estonia',
      'Fiji',
      'Ghana',
      'India',
      'Japan',
      'Kenya',
      'Luxembourg',
      'Mexico',
      'Nepal',
      'Qatar',
      'Uganda',
    ]);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const handleTokenDelete = (e) => {
      args.onTokenDelete(e);
      const { tokens } = e.detail;
      if (tokens) {
        const tokensToDelete = tokens.map((token) => token.text);
        setCountries((prev) => prev.filter((country) => !tokensToDelete.includes(country)));
        setSelectedCountries([]);
      }
    };
    const handleSelectionChange = (e) => {
      args.onSelectionChange(e);
      const { tokens } = e.detail;
      if (tokens) {
        const selectedTokens = tokens.map((token) => token.text);
        setSelectedCountries(selectedTokens);
      }
    };
    return (
      <>
        <Tokenizer {...args} onTokenDelete={handleTokenDelete} onSelectionChange={handleSelectionChange}>
          {countries.map((country) => (
            <Token key={country} text={country} />
          ))}
        </Tokenizer>
        <br />
        <div style={{ display: 'flex', gap: '0.2rem' }}>
          <Label showColon>Selected countries</Label>
          <Text>{selectedCountries.join(', ')}</Text>
        </div>
      </>
    );
  },
};
