/**
 * Klario/Banner
 *
 * Placeholder story for the Klario-specific Banner component.
 * The Banner is unique to the Klario design library — there is no direct
 * UI5 React equivalent (MessageStrip is closest but a different pattern).
 *
 * This placeholder documents the component's existence and reserves its
 * place in the Storybook sidebar until the full implementation is built.
 *
 * Figma reference: https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=232871:2738
 */

import React from 'react';

const FIGMA_BASE =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=';

// ── Placeholder component ────────────────────────────────────────────────

function BannerPlaceholder({ type, message, closeable }) {
  const typeStyles = {
    information: {
      background: 'var(--kai-semantic-background-sap-neutral-background, #eef1f3)',
      borderColor: 'var(--kai-semantic-sap-informative-color, #5f00ff)',
      iconColor: 'var(--kai-semantic-sap-informative-color, #5f00ff)',
    },
    success: {
      background: 'var(--kai-input-success-sap-field-success-background, #f1fae8)',
      borderColor: 'var(--kai-semantic-sap-positive-color, #2d7a3a)',
      iconColor: 'var(--kai-semantic-sap-positive-color, #2d7a3a)',
    },
    warning: {
      background: 'var(--kai-input-warning-sap-field-warning-background, #fef8e8)',
      borderColor: 'var(--kai-semantic-sap-critical-color, #e76500)',
      iconColor: 'var(--kai-semantic-sap-critical-color, #e76500)',
    },
    error: {
      background: 'var(--kai-input-invalid-sap-field-invalid-background, #fff1f2)',
      borderColor: 'var(--kai-semantic-sap-negative-color, #bb0000)',
      iconColor: 'var(--kai-semantic-sap-negative-color, #bb0000)',
    },
  };

  const style = typeStyles[type] || typeStyles.information;

  return (
    <div
      role="banner"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.75rem 1rem',
        background: style.background,
        borderLeft: `4px solid ${style.borderColor}`,
        borderRadius: '0.25rem',
        fontFamily: '\'72\', Arial, sans-serif',
        fontSize: '0.9375rem',
        color: 'var(--kai-text-sap-text-color, #1d2d3e)',
        maxWidth: '640px',
      }}
    >
      <span style={{ color: style.iconColor, fontWeight: 700, flexShrink: 0 }}>
        {type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}
      </span>
      <span style={{ flex: 1 }}>{message}</span>
      {closeable && (
        <button
          aria-label="Close"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--kai-text-sap-content-label-color, #556b82)',
            fontSize: '1rem',
            padding: '0 0.25rem',
            flexShrink: 0,
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
}

// ── Story config ─────────────────────────────────────────────────────────

export default {
  title: 'Klario/Banner',
  component: BannerPlaceholder,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: `${FIGMA_BASE}232871:2738`,
    },
    docs: {
      description: {
        component:
          '**Klario-specific component.** The Banner is a full-width notification bar used for ' +
          'page-level messages. Unlike `MessageStrip`, it typically spans the full width of the ' +
          'content area and supports richer layout options. ' +
          '\n\n> ⚠️ **Placeholder** — full Klario implementation pending. ' +
          'The rendered component above is an approximation for design review only.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['information', 'success', 'warning', 'error'],
      description: 'Banner semantic type',
    },
    message: {
      control: 'text',
      description: 'Banner message text',
    },
    closeable: {
      control: 'boolean',
      description: 'Show close button',
    },
  },
  args: {
    type: 'information',
    message: 'This is an informational banner message from the Klario design system.',
    closeable: true,
  },
};

export const Information = {
  args: { type: 'information' },
};

export const Success = {
  args: { type: 'success', message: 'Your changes have been saved successfully.' },
};

export const Warning = {
  args: { type: 'warning', message: 'Please review the highlighted fields before continuing.' },
};

export const Error = {
  args: { type: 'error', message: 'An error occurred. Please try again or contact support.' },
};
