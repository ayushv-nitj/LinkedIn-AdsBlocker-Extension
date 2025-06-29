# 🔕 LinkedIn AdBlocker Extension

A lightweight Chrome extension that automatically removes **sponsored posts ("Promoted" content)** from your LinkedIn feed — for a cleaner, more focused experience.

---

## 🚀 Features

- ✅ Detects and hides sponsored posts in real time
- ✅ Works seamlessly as you scroll
- ✅ Simple popup UI showing how many ads were blocked
- ✅ Built using Manifest V3 (future-ready)
- ✅ Fast and efficient – no performance lag

---

## 🧠 How It Works

1. When you visit [linkedin.com](https://www.linkedin.com), a **background service worker** detects the page load.
2. It injects a **content script** (`linkedin.js`) into the webpage.
3. The script scans the feed for posts labeled **"Promoted"**, finds their parent containers, and hides them from view.
4. Each hidden ad increments a counter stored via `chrome.storage.local`, which is displayed in the extension popup.

---

## 🧰 Tech Stack

- **JavaScript** – Main logic and DOM manipulation
- **HTML + CSS** – Simple and clean popup UI
- **Chrome Extension APIs**
  - `chrome.webNavigation`
  - `chrome.scripting`
  - `chrome.storage`
- **Manifest V3** – Latest extension format

---

## 📦 Folder Structure

LinkedIn_AdBlocker_Extension/
├── manifest.json # Extension configuration
├── extension.js # Background service worker
├── linkedin.js # Content script to block ads
├── popup.html # Popup UI
├── popup.js # Logic for the popup
└── icon.png # Extension icon

yaml
Copy
Edit

---

## 🧪 How to Install (Developer Mode)

1. Clone or download this repository
2. Open Chrome and go to: `chrome://extensions`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked** and select the project folder
5. Pin the extension to the toolbar (optional)
6. Open LinkedIn — and enjoy an ad-free feed ✨

---

## 🐞 Known Limitations

- If LinkedIn changes its DOM structure significantly, the selector logic may need updates
- Only works on LinkedIn.com (for now)
- Ad-block count resets on browser restart (future improvement planned)

---

## 🧭 Roadmap / Future Plans

- Toggle on/off from the popup
- Session-wise and lifetime ad stats
- Options page for user settings
- Auto-update mechanism for DOM selector changes
- Firefox/Edge support
- Open source community contributions!

---

## 🤝 Contributions

Pull requests are welcome!  
If you find an issue or want to improve the logic, feel free to open an issue or PR.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ About the Creator

Made with ❤️ by [Ayush](https://www.linkedin.com/in/ayush-verma-jsr25/)
If you have ideas, feedback, or just want to chat about browser extensions — feel free to connect!
