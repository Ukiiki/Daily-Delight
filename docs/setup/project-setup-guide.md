# Daily Delight - Project Setup Guide

## Completed Steps

### 1. GitHub Repository Setup
1. Delete existing repository if needed
2. Create new repository "daily-delight"
3. Make repository public
4. Initialize with README
5. Add MIT license
6. Add Node.js .gitignore

### 2. Supabase Database Setup
```sql
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users table
create table users (
  id uuid references auth.users primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- SOAP entries table
create table soap_entries (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references users(id) not null,
  title text not null,
  scripture text not null,
  observation text not null,
  application text not null,
  prayer text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Prayers table
create table prayers (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references users(id) not null,
  content text not null,
  status text default 'active' check (status in ('active', 'answered')) not null,
  soap_entry_id uuid references soap_entries(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  answered_at timestamp with time zone
);

-- Blessings catalog table
create table blessings (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references users(id) not null,
  prayer_id uuid references prayers(id) not null,
  testimony text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- People to pray for table
create table prayer_contacts (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references users(id) not null,
  name text not null,
  prayer_notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### 3. Supabase Authentication Setup
1. Enable Email provider
2. Configure email templates with verses:
   - Confirm Signup (Psalm 1:2)
   - Magic Link (Psalm 119:105)
   - Reset Password (2 Corinthians 5:17)
   - Invite User (Proverbs 27:17)
   - Change Email (Isaiah 43:19)
   - Reauthentication (Psalm 26:2)
   
Email templates are documented in `email-templates.md` artifact.

## Next Steps

### 4. React Project Setup
- Initialize React project with Vite
- Install dependencies:
  - @supabase/supabase-js
  - react-router-dom
  - tailwindcss
  - shadcn/ui components

### 5. Environment Configuration
- Set up .env with Supabase credentials
- Configure Supabase client

### 6. Authentication Implementation
- Create auth context
- Implement sign up flow
- Implement sign in flow
- Add protected routes

### 7. Core Feature Implementation
1. SOAP Journal
   - Entry creation form
   - Entry list view
   - Entry detail view

2. Prayer Feed
   - Prayer list component
   - Answer prayer functionality
   - Prayer status tracking

3. Blessings Catalog
   - Answered prayers view
   - Testimony addition
   - Timeline display

4. People to Pray For
   - Contact management
   - Prayer notes
   - Prayer generation

### 8. Admin Dashboard
- User metrics
- Entry analytics
- Prayer statistics

## Environment Variables Required
```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Branding Guidelines
### Typography
- Primary: SF Pro Display / Helvetica Neue
- Body: SF Pro Text / Helvetica Neue

### Colors
- Primary Dark: #141E2F
- Text Primary: #2D3748
- Text Secondary: #4A5568
- Text Muted: #718096

### Reading Themes
1. White (Default)
   - Background: #FFFFFF
   - Text: #1A1A1A

2. Dark
   - Background: #1E1E1E
   - Text: #F5F5F5

3. Navy
   - Background: #141E2F
   - Text: #F5F5F5

## Project Structure
```
daily-delight/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   ├── journal/
│   │   ├── prayers/
│   │   └── shared/
│   ├── contexts/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── services/
│   └── utils/
├── public/
└── .env
```

## Documentation Structure

### 1. Project Requirements
- Core Features Documentation
- User Stories and Personas
- Technical Requirements
- API Specifications
- Performance Requirements
- Security Requirements
- System Architecture Overview

### 2. App Flow and User Journey
- User Authentication Flow
- SOAP Entry Creation Flow
- Prayer Management Flow
- Blessings Catalog Flow
- Search and Navigation Flow
- User Settings Flow

### 3. Technical Documentation
- API Documentation
- Database Schema
- Component Documentation
- State Management Documentation
- Testing Strategy
- Error Handling Guidelines
- Security Documentation

### 4. Development Guidelines
- Code Style Guide
- Git Workflow
- Pull Request Process
- Testing Requirements
- Security Best Practices
- Performance Optimization Guidelines

### 5. Deployment and DevOps
- Deployment Process
- Environment Configuration
- Monitoring and Logging
- Backup and Recovery
- Security Measures
- Performance Monitoring

### 6. Testing Strategy
- Unit Testing Plan
- Integration Testing Plan
- End-to-End Testing Plan
- Performance Testing
- Security Testing
- User Acceptance Testing

### 7. Maintenance and Support
- Bug Reporting Process
- Feature Request Process
- Update and Patch Process
- Support Documentation
- User Guides
- Admin Guides
