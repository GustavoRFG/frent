# Security, LGPD and Future Backend Architecture

## A. V1 State

The current Encrypta V1 is a public institutional and commercial landing page.

Current boundaries:

- no new backend is active;
- no first-party contact form exists;
- no newsletter, user registration, checkout, admin panel or public API exists;
- no first-party database stores personal data from this site;
- commercial contact is intended to happen through configurable external channels such as WhatsApp, OLX and Mercado Livre;
- these third-party environments have their own terms, privacy policies and security practices.

The V1 principle is to collect the minimum possible, expose only what is necessary and avoid adding operational risk before there is a real business need.

## B. When a Backend Starts to Make Sense

A self-owned backend may become appropriate when Encrypta needs features such as:

- dynamic catalog management;
- inventory and availability control;
- administrative panel;
- quotation workflow;
- lead intake;
- order tracking;
- sales history;
- administrative login;
- reports and operational metrics.

Until those needs are real, the static storefront is simpler and safer.

## C. Future Infrastructure Direction

If Encrypta adds a backend, the preferred direction is self-hosting on hardware controlled by the owner, not a dependency on AWS, Azure or similar platforms by default.

Future baseline practices should include:

- HTTPS in front of every public service;
- reverse proxy with explicit routing;
- firewall rules with the smallest practical exposed surface;
- minimal exposed ports;
- network segmentation or other protection for internal services;
- operating-system hardening;
- regular dependency and security updates;
- secrets stored outside source code and outside frontend bundles;
- backup strategy and restore testing;
- application and access logs with appropriate retention;
- rate limiting for public endpoints;
- input validation and output encoding;
- abuse protection for contact, quote and login flows;
- minimum monitoring for uptime, failures and suspicious activity;
- administrative access policy with named accounts where practical;
- credential rotation and secure credential storage.

## D. Future LGPD Considerations

Any future backend that directly processes personal data should be designed around:

- minimal collection;
- explicit purpose for each data field;
- clear necessity analysis;
- defined retention rules;
- disposal when the purpose ends;
- protection in transit;
- protection at rest when applicable;
- ability to respond to data-subject requests;
- documentation of personal-data flows;
- periodic review of whether each collected data point is still needed.

Before adding forms, checkout, CRM-style storage or account features, the data lifecycle should be documented: what is collected, why it is collected, where it is stored, who can access it, how long it is kept and how it is deleted.

## E. Frontend Security Notes

The Next.js frontend disables `X-Powered-By` and applies conservative security headers:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY`
- `Permissions-Policy` restricting camera, microphone, geolocation, payment and USB access

A strict Content Security Policy was evaluated but not enabled in this V1. Next.js can require framework scripts and styles that need careful nonce or hash handling. A weak CSP would create false confidence, while a strict one could break rendering if added without a full browser validation pass. The recommendation is to introduce CSP later with route-level testing, production build validation and browser inspection.

## F. Limits of This Document

This document is a technical architecture foundation and secure-development checklist. It does not promise absolute protection, guaranteed legal compliance or immunity from attacks. It should support future decisions and be revisited whenever the site begins collecting data directly or exposing backend services.
