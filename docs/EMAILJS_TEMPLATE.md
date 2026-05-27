# EmailJS template — Legend Services / Sarvesh Kumar Singh

Copy each field into [EmailJS → Email Templates → Create New Template](https://dashboard.emailjs.com/admin/templates).

Your site sends these variables: `from_name`, `reply_to`, `subject`, `message` (see `src/hooks/useContactForm.js`).

---

## Template settings (left panel / Settings tab)

| Field | Value |
|-------|--------|
| **Template name** | `Portfolio Contact — Legend Services` |
| **To Email** | `work.sarvesh77@gmail.com` |
| **From Name** | `{{from_name}}` |
| **From Email** | Use default / leave as connected service email |
| **Reply To** | `{{reply_to}}` |
| **Subject** | See below |

### Subject line (paste exactly)

```
[Legend Services Portfolio] {{subject}} — {{from_name}}
```

---

## Plain text content (Content tab → switch to “Plain text” if available)

Paste this entire block:

```
New message from your portfolio (Legend Services)

────────────────────────────────────────
CONTACT DETAILS
────────────────────────────────────────
Name:     {{from_name}}
Email:    {{reply_to}}
Subject:  {{subject}}

────────────────────────────────────────
MESSAGE
────────────────────────────────────────
{{message}}

────────────────────────────────────────
Portfolio owner: Sarvesh Kumar Singh
Service: Legend Services
Reply directly to the sender using Reply in your mail client.
```

---

## HTML content (recommended — Content tab, HTML mode)

If the editor has a **Code / HTML** view, paste this:

```html
<div style="font-family: Inter, Arial, sans-serif; max-width: 560px; color: #0a0a0a; line-height: 1.6;">
  <p style="margin: 0 0 8px; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #888;">
    Legend Services · Portfolio
  </p>
  <h2 style="margin: 0 0 24px; font-size: 22px; font-weight: 700;">
    New contact form message
  </h2>

  <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 15px;">
    <tr>
      <td style="padding: 10px 12px; background: #f5f5f5; border: 1px solid #e5e5e5; width: 120px; font-weight: 600;">Name</td>
      <td style="padding: 10px 12px; border: 1px solid #e5e5e5;">{{from_name}}</td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; background: #f5f5f5; border: 1px solid #e5e5e5; font-weight: 600;">Email</td>
      <td style="padding: 10px 12px; border: 1px solid #e5e5e5;">
        <a href="mailto:{{reply_to}}" style="color: #0066ff;">{{reply_to}}</a>
      </td>
    </tr>
    <tr>
      <td style="padding: 10px 12px; background: #f5f5f5; border: 1px solid #e5e5e5; font-weight: 600;">Subject</td>
      <td style="padding: 10px 12px; border: 1px solid #e5e5e5;">{{subject}}</td>
    </tr>
  </table>

  <p style="margin: 0 0 8px; font-size: 13px; font-weight: 600; color: #404040;">Message</p>
  <div style="padding: 16px; background: #f5f5f5; border-left: 4px solid #0066ff; white-space: pre-wrap; font-size: 15px;">
    {{message}}
  </div>

  <p style="margin: 32px 0 0; font-size: 12px; color: #888;">
    Received via Sarvesh Kumar Singh’s developer portfolio · Legend Services<br />
    Hit <strong>Reply</strong> to respond to {{from_name}} at {{reply_to}}.
  </p>
</div>
```

---

## Auto-reply to visitor (optional second template)

Create a **second** template if you want visitors to get a confirmation email (wire separately later). Suggested subject:

```
Thanks for reaching out — Sarvesh Kumar Singh
```

Body (short):

```
Hi {{from_name}},

Thanks for contacting me through my portfolio. I received your message about "{{subject}}" and will get back to you within 24 hours.

Best,
Sarvesh Kumar Singh
Legend Services
work.sarvesh77@gmail.com
```

---

## After saving

1. Copy **Template ID** → paste into `.env` as `VITE_EMAILJS_TEMPLATE_ID=template_xxxxx`
2. Ensure `VITE_EMAILJS_SERVICE_ID` matches your **Legend Services** Email Service ID
3. Set `VITE_EMAILJS_PUBLIC_KEY` from Account → API Keys
4. Restart: `npm run dev`
5. Send a test from the Contact section

## Email note

You wrote `work.sarvesh77@gmail.co` — Gmail addresses use **`.com`**. Use `work.sarvesh77@gmail.com` as **To Email** (already set in `personal.js`).
