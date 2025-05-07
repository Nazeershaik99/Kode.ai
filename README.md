Welcome to Kode.ai, the open source version of the AI-powered development environment previously known as oTToDev and Bolt.new. Kode.ai allows you to choose and configure which LLM (Large Language Model) you use for each prompt. Supported models include OpenAI, Anthropic, Ollama, Gemini, LMStudio, Mistral, xAI, HuggingFace, DeepSeek, Groq, and many more. You can easily extend it to integrate any model supported by the Vercel AI SDK.

Originally started by Cole Medin, Kode.ai has evolved into a thriving community project aimed at building the best open-source AI coding assistant.

Features and Integrations
✅ OpenRouter Integration

✅ Gemini Integration

✅ Autogenerate Ollama models

✅ Model filtering by provider

✅ Download projects as ZIP

✅ Prompt enhancements

✅ API key input via UI

✅ xAI Grok Beta Integration

✅ HuggingFace and LM Studio Integration

✅ Bolt terminal for output

✅ Real-time output streaming

✅ Code version reversion

✅ DeepSeek, Cohere, and Mistral API support

✅ Prompt caching

✅ Local project loading

✅ Containerization with Docker

✅ GitHub deployment support

✅ Mobile-friendly design

✅ Auto-detect package managers

✅ Image attachments in prompts

High Priority Items
⬜ Minimize file rewrites with file locking/diffs

⬜ Prompting optimization for smaller models

⬜ Agent-based execution backend

⬜ Vercel/Netlify deployment support

⬜ Markdown-based project planning

⬜ VSCode Git-like confirmations

⬜ UI upload for design/code reference

⬜ Voice prompting support

⬜ Azure, Perplexity, Vertex AI Integrations

What is Kode.ai?
Kode.ai is a browser-based, AI-powered full-stack development environment. It enables developers to prompt, run, edit, and deploy applications—entirely from the browser—with zero local setup required.

Kode.ai stands out by giving AI full control over the dev environment: from the filesystem to the package manager, backend server, and browser console.

Setup Instructions
Prerequisites
Install Git

Install Node.js

Install Docker (optional)

Ensure the system path includes Node.js binaries.

Clone and Configure
bash
Copy
Edit
git clone https://github.com/your-username/kode.ai.git
Rename .env.example to .env.local and set your LLM API keys:

env
Copy
Edit
GROQ_API_KEY=XXX
OPENAI_API_KEY=XXX
ANTHROPIC_API_KEY=XXX
VITE_LOG_LEVEL=debug
OLLAMA_API_BASE_URL=http://localhost:11434
DEFAULT_NUM_CTX=8192
Running the App
With Docker
Option 1: Using NPM Scripts
bash
Copy
Edit
npm run dockerbuild        # Development
npm run dockerbuild:prod   # Production
Option 2: Direct Docker Commands
bash
Copy
Edit
docker build . --target kode-ai-development
docker build . --target kode-ai-production
Run Docker Compose
bash
Copy
Edit
docker-compose --profile development up
docker-compose --profile production up
Without Docker
Install dependencies:

bash
Copy
Edit
pnpm install
If pnpm isn't installed:

bash
Copy
Edit
sudo npm install -g pnpm
Run the dev server:

bash
Copy
Edit
pnpm run dev
Scripts
pnpm run dev — Start dev server

pnpm run build — Build the app

pnpm run start — Run the built app

pnpm run preview — Preview production build

pnpm test — Run tests

pnpm run typecheck — Type checking

pnpm run typegen — Generate TS types

pnpm run deploy — Deploy to production

pnpm run lint:fix — Auto-fix lint issues

Contribution Guide
Interested in contributing? Fork, clone, enhance, and open a pull request. Help improve Kode.ai by fixing bugs, adding features, or enhancing documentation.

Roadmap
Future plans include more model integrations, advanced deployment tools, project planning features, and IDE extensions. Stay tuned as the community continues to evolve this powerful tool for developers.