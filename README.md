# GitHub Actions – CI/CD Demo

This project demonstrates how to set up a **basic CI/CD pipeline** using **GitHub Actions**.  
It runs tests, builds the project, and shows console messages for successful completion.  
This is a learning assignment to practice CI/CD concepts.

---

## 📌 What This Workflow Does

- **Triggers on Push & Pull Requests** to the `main` branch.
- **Runs a Build Job** (simulated with a console log).
- **Runs a Test Job** (simulated with a console log).
- Shows a message in the GitHub Actions logs after success.
- Includes a `deploy_prod` job (skipped intentionally since this is just a demo).

---

## 🛠️ Workflow Overview (Visual)

```text
          ┌────────────┐
          │    Push    │
          │ or PR to   │
          │   main     │
          └─────┬──────┘
                │
        ┌───────▼────────┐
        │   Build Job    │
        │  (checkout +   │
        │   echo build)  │
        └───────┬────────┘
                │
        ┌───────▼────────┐
        │   Test Job     │
        │ (run tests /   │
        │ echo results)  │
        └───────┬────────┘
                │
        ┌───────▼────────┐
        │  Deploy Prod   │
        │ (Skipped if    │
        │ not main)      │
        └───────────────┘
```

This flow ensures that:
- Build → Test → Deploy happen in sequence.
- Production deploy is skipped unless on main branch.

---

## 🛠️ How to Use This Repo

1. **Clone the Repo**

   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   ```

2. **Check Workflow File**

   The workflow is defined inside:

   ```
   .github/workflows/main.yml
   ```

3. **Push Changes to Trigger Workflow**

   Make a small change and push to `main`:

   ```bash
   echo "Testing workflow" >> test.txt
   git add .
   git commit -m "Trigger workflow test"
   git push origin main
   ```

4. **View Workflow Run**

   - Go to **Actions Tab** in your repo.
   - Open the latest workflow run.
   - You will see console messages like:

     ```
     ✅ Build job started...
     ✅ Build completed successfully!
     ✅ Tests executed successfully!
     ```

---

## 🧪 Sample Workflow File

Here’s the workflow file used in this project:

```yaml
name: CI/CD Demo

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Build Project
        run: echo "✅ Build completed successfully!"

  test:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Run Tests
        run: echo "✅ Tests executed successfully!"

  deploy_prod:
    runs-on: ubuntu-latest
    if: false # Skipped on purpose for this assignment
    steps:
      - name: Deploy
        run: echo "🚀 Deploying to production..."
```

---

## 📖 Notes

- `deploy_prod` job is **intentionally skipped** since we are not actually deploying anywhere.
- You can enable it by changing `if: false` to `if: true` or removing the line.

---

## ✅ Learning Outcome

By reading this repository, you will learn:

- How to create a **GitHub Actions workflow**.
- How to **run multiple jobs** with dependencies.
- How to add **console logs** for better visibility.
- How to trigger workflows on push and pull requests.

---

## 🎯 Result

After following the steps and checking the Actions tab,  
you should see **green check marks** ✅ for `build` and `test` jobs,  
and `deploy_prod` will show as **skipped** (expected behavior).
