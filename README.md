This is a test task created using [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/), which demonstrates working with React Query, handling API requests, and managing state in a frontend application.

**[Click the link to see DEMO](https://veel-test-task-xa9a.vercel.app/)**

## 🛠️ Installation and launch

1. **Cloning the repository:**

```bash
git clone https://github.com/Oleksii-Bidiak/veel_test_task.git
cd veel_test_task
```

### Install dependencies:
```bash
npm install
```

### Run in development mode:
```bash
npm run dev
```

### Open in browser:
```bash
http://localhost:3000
```

## 📌 Features
- API queries: Uses jsonplaceholder.typicode.com as a fake API to demonstrate CRUD operations.
- Limitations: jsonplaceholder does not save changes. To reflect the deletion or creation of elements, the React Query cache is updated locally (queryClient.setQueryData).
- Caching: Thanks to React Query, data is cached and updated without re-requests to the server.

## Technologies used
- Next.js
- Tailwindcss
- Tanstack Query
