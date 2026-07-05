# Setup Guide for Creating Users from Admin Panel

## Step 1: Add Service Role Key to .env.local

Add this line to your existing `.env.local` file in `e:\crm\`:
```
SUPABASE_SERVICE_ROLE_KEY=<your-supabase-service-role-key>
```
You can find your Service Role key in your Supabase project dashboard → Project Settings → API → Project API keys → service_role secret.

## Step 2: Ensure You've Run the Profiles Migration

If you haven't already, run the SQL from `PROFILES_TABLE_MIGRATION.sql` in your Supabase SQL Editor! That adds the email, name, and other columns to your profiles table, sets up the sync trigger, etc.

## Step 3: Verify it Works!

Go to your admin users page (http://localhost:3000/admin/users if running dev server) and click "Create User" to add a new user directly!
