# 🤖 HarshitClaw

> Your personal AI agent for the Terminal and Telegram.

HarshitClaw is an AI-powered assistant built with **TypeScript** and **Bun** that can interact through both the command line and Telegram.

Instead of simply responding to prompts, it plans tasks, executes tools, requests approvals for sensitive actions and keeps track of every action performed during execution.

This project was built to understand how modern AI agents work behind the scenes and how multiple components such as planning, orchestration, tools and messaging fit together.

---

## ✨ Features

- 💬 Telegram Bot support
- 💻 Interactive CLI
- 🧠 AI Agent orchestration
- 📋 Task planning system
- 🛠️ Tool execution framework
- ✅ Human approval workflow
- 📊 Action tracking
- 📄 Markdown terminal rendering
- ⚡ Built with Bun for fast startup
- 🔧 Modular TypeScript architecture
- 🔒 Environment based configuration

---

# 📸 Demo

### CLI

```bash
harshitclaw-build wakeup
```

```
HarshitClaw v1.0

Wakeup calling...

Connected successfully.
Ready to assist 🚀
```

### Telegram

Simply send a message to your bot.

```
You:
/plan a Java backend project.

HarshitClaw:
Creates a complete execution plan,
asks for approvals when required
and executes available tools.
```


# 🏗️ Project Structure

```
HARSHITCLAW-BUILD
│
├── ai/
│   ├── ai.config.ts
│   └── index.ts
│
├── modes/
│   ├── agent/
│   ├── ask/
│   └── plan/
│
├── telegram/
│
├── tui/
│
├── index.ts
├── package.json
├── tsconfig.json
└── README.md
```


# ⚙️ How it works

```
User
   │
   ▼
CLI / Telegram
   │
   ▼
AI Agent
   │
   ├── Planner
   ├── Tool Selection
   ├── Approval System
   ├── Tool Executor
   └── Action Tracker
   │
   ▼
LLM
   │
   ▼
Final Response
```


# 🚀 Getting Started

## Clone

```bash
git clone https://github.com/harshit15-coder/HarshitClaw.git
```

```
cd HarshitClaw
```


## Install dependencies

```bash
bun install
```

## Environment Variables

Create a `.env` file in the project root.

```env
OPENROUTER_API_KEY=your_api_key

OPENROUTER_DEFAULT_MODEL=your_model

FIRECRAWL_API_KEY=your_firecrawl_api_key

TELEGRAM_BOT_TOKEN=your_telegram_bot_token

TELEGRAM_OWNER_ID=your_telegram_owner_id
```

## Run

CLI

```bash
bun run index.ts wakeup
```

or after linking

```bash
harshitclaw-build wakeup
```

Telegram

```bash
bun run index.ts telegram
```


# 🧩 Project Modules

## AI

Responsible for creating the AI provider and loading the configured language model.


## Agent Mode

The core of the project.

Responsible for

- planning
- orchestration
- approvals
- executing tools
- tracking actions


## Ask Mode

Handles direct question-answer interactions without requiring a full execution plan.


## Plan Mode

Breaks larger requests into structured execution plans before performing actions.


## Telegram

Provides a Telegram interface so the same AI agent can be accessed from mobile.


## TUI

Contains terminal UI utilities and markdown rendering for a better CLI experience.


# 🛠️ Tech Stack

| Technology       | Purpose                |
|------------------|------------------------|
| TypeScript       | Main language          |
| Bun              | Runtime                |
| Commander        | CLI                    |
| Telegram Bot API | Telegram integration   |
| OpenRouter       | AI provider            |
| dotenv           | Environment management |

---

# 📚 What I learned

This project helped me understand

- Building a CLI from scratch
- TypeScript fundamentals
- Bun runtime
- Environment variables
- Telegram Bot integration
- AI SDKs
- Agent architecture
- Planning vs Execution
- Modular project design
- Async programming
- Debugging real-world issues

---

# 🔮 Future Improvements

- ✅ WhatsApp Integration
- ✅ Discord Integration
- ✅ Voice Support
- ✅ Multiple AI Providers
- ✅ Memory
- ✅ Chat History
- ✅ RAG Support
- ✅ Web Dashboard
- ✅ Plugin System

---

# 📌 Notes

This repository is intended for learning and experimentation.

Some ideas and architecture were inspired by educational content from **Chai aur Code**, while the implementation has been customized, explored and extended as part of my learning journey.

---

# 🤝 Contributing

Suggestions, issues and pull requests are always welcome.

If you have an idea that can improve the project, feel free to contribute.

---

# ⭐ Support

If you found this project useful,

please consider giving it a ⭐ on GitHub.

It motivates me to keep building and improving projects.

---

# 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Harshit Chaturvedi**

B.Tech CSE | AI • Backend • Frontend • Open Source

GitHub: https://github.com/harshit15-coder

---

> Built with ❤️, lots of debugging ☕ and countless `console.log()` statements.