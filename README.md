# Overview

This project is a Next.js application that dynamically manages light and dark themes based on the user’s system preferences or a manually set theme stored in cookies.

## Problem

When switching between light and dark themes in a Next.js application, the website may display an unstyled content flash (FOUC) as the new theme is applied or as the page loads.

## Solution

Using local storage to manage theme preferences is a common solution, but does not work well with server-side rendering (SSR) because local storage is not available on the server. This project solves the problem by using cookies to store the theme preference. Since cookies are available to the server with each request, the theme is then applied on the server and client side simultaneously, which eliminates the FOUC.

## Features

1. Dynamic Theme Switching: Automatically applies a light or dark theme based on the system's color scheme preference.

2. Cookie-Based Theme Management: Allows users to set and persist their preferred theme using cookies.

3. Real-Time Updates: Updates the website theme when the system's color scheme changes.

### View the Live Demo

[https://nextjs-theme-provider.woodland.dev/](https://nextjs-theme-provider.woodland.dev/)
