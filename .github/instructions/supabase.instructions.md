---
applyTo: "**"
---

# Supabase Integration with Next.js & Azure Static Web Apps

Guidelines for integrating Supabase into Next.js projects deployed on Azure Static Web Apps with GitHub Actions workflow.

## 1. Code Setup (Next.js)

### Environment Variables

- **Build-Time Availability**: Public environment variables (URL and Anon Key) must be available at build time to be embedded in the static frontend bundle
- **Variable Naming**: Must start with `NEXT_PUBLIC_` prefix to be accessible in client-side code

### Local Development

Create `.env.local` file (not tracked by git):

```ini
NEXT_PUBLIC_SUPABASE_URL=https://xyz.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=sb_publishable_...
```

### Supabase Client

Create the client in `utils/supabase/client.ts` (or similar path):

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
```

## 2. Azure Static Web App Setup

Follow this order strictly to avoid conflicts or build failures, as Azure resource creation generates a workflow file in the repository.

### Step 1: Create Azure Resource

1. **Navigate to Azure Portal**: Go to Static Web Apps > Create
2. **Deployment Details**: Select GitHub as deployment source
3. **Authentication**: Sign in with your GitHub account
4. **Repository Selection**: 
   - Organization: Select your GitHub organization/account
   - Repository: Choose the target repository
   - Branch: Select the branch to deploy (typically `main`)
5. **Build Presets**: Select Next.js from the dropdown
6. **Complete Creation**: Review and create the resource

**Important**: Azure automatically creates a workflow file at `.github/workflows/azure-static-web-apps-<random-name>.yml`

### Step 2: Configure GitHub Secrets

1. **Navigate to Repository Settings**: Go to GitHub > Repository > Settings > Secrets and variables > Actions

2. **Add/Update Azure Deployment Token**:
   - **Get Token from Azure Portal**:
     - Go to Azure Portal → Static Web Apps
     - Select your Static Web App resource
     - Navigate to Overview → Manage deployment token
     - Copy the deployment token
   - **Add to GitHub**:
     - In GitHub Secrets, look for `AZURE_STATIC_WEB_APPS_API_TOKEN_*` (the exact name matches your workflow file)
     - If it exists but deployment fails with "Invalid API key", click Update and paste the new token
     - If it doesn't exist, click "New repository secret" and create it with the token from Azure
   
3. **Add Supabase Secrets**: Click "New repository secret" and add:
   - **`NEXT_PUBLIC_SUPABASE_URL`**: From Supabase Dashboard > Project Settings > API
   - **`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`**: From Supabase Dashboard > Project Settings > API > Publishable key (or anon/public key for legacy)

**Note**: The Azure deployment token may expire or become invalid over time. If you encounter "Invalid API key" errors during deployment, regenerate and update the token following the steps above.

### Step 3: Modify GitHub Workflow

**Critical Step**: Modify the auto-generated workflow file to inject Supabase variables during build.

1. **Pull Changes**: Run `git pull` to download the workflow file created by Azure
2. **Open Workflow File**: Locate `.github/workflows/azure-static-web-apps-*.yml`
3. **Find Build And Deploy Step**: Locate the step with `Azure/static-web-apps-deploy@v1`
4. **Add Environment Variables**: Add the `env` section as shown below:

```yaml
- name: Build And Deploy
  id: builddeploy
  uses: Azure/static-web-apps-deploy@v1
  with:
    azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
    repo_token: ${{ secrets.GITHUB_TOKEN }}
    action: "upload"
    app_location: "/"
    api_location: ""
    output_location: "" # Leave empty for hybrid/standard Next.js
  env:
    # NEXT_PUBLIC variables must be exposed here to be included in Next.js build
    NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY: ${{ secrets.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY }}
```

5. **Commit and Push**: Save changes, commit, and push to trigger deployment

## 3. Troubleshooting

If the application deploys but shows connection errors or undefined variables:

### Build Time vs Runtime

- **Symptom**: Variables are undefined in client-side code
- **Solution**: Ensure the `env` section is added to the workflow YAML
- **Why**: `NEXT_PUBLIC_` variables are read only during `npm run build`. Adding them to Azure SWA dashboard ("Environment variables") is not sufficient for client-side Next.js code
- **Required**: Variables must be injected in the GitHub workflow

### Variable Naming

- **Requirement**: Variables must strictly start with `NEXT_PUBLIC_` prefix
- **Check**: Verify both `.env.local` and GitHub secrets use correct naming

### Cache Issues

- **Symptom**: Changes to secrets don't reflect in deployment
- **Solution**: Manually re-run the workflow from GitHub Actions tab after modifying secrets
- **Alternative**: Clear Azure Static Web Apps cache from Azure Portal

### Common Pitfalls

- **Missing Workflow Modification**: Most common issue—workflow must include `env` section
- **Incorrect Secret Names**: Ensure GitHub secret names match exactly (case-sensitive)
- **Branch Mismatch**: Verify workflow is triggered on the correct branch
- **Build Logs**: Check GitHub Actions logs for specific build errors or missing variables

### Database scripts for Supabase DB modifications/creation
All scripts must be added to `database` folder to be tracked the scripts that are run in the Supabase SQL editor.
