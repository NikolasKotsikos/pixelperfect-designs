# PixelPerfect Designs

Personal portfolio and agency website for Nikolas Kotsikos — frontend developer and designer based in Rotterdam.

Built with SvelteKit and deployed as a static site on Hostinger Premium Web Hosting, with a PHP + PHPMailer backend for contact form email delivery.

**Live site:** [pixelperfectdesigns.nl](https://pixelperfectdesigns.nl)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | SvelteKit 2 + Svelte 5 |
| Language | TypeScript (strict mode) |
| Styling | CSS custom properties (scoped per component) |
| Build output | Static HTML via `@sveltejs/adapter-static` |
| Contact form backend | PHP 8 + PHPMailer + Hostinger SMTP |
| Hosting | Hostinger Premium Web Hosting (Apache) |
| Node version | ≥ 20 |

---

## Local Development

### Prerequisites

- Node.js 20 or later
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/nkotsikos/pixelperfect-designs.git
cd pixelperfect-designs

# Install dependencies
npm install
```

### Run the dev server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

> **Note:** The contact form submits to `/api/contact.php`, which only exists on the Hostinger server. Form submissions will not work in local development unless you set up a local PHP server separately.

---

## Internationalisation (EN / NL)

The site supports English and Dutch. Language switching is handled entirely client-side — no server involvement, compatible with `adapter-static`.

### How it works

- **Store** — `src/lib/i18n/store.svelte.ts` holds the active locale as a `$state` rune. `initLocale()` reads from `localStorage` on mount; `setLocale()` persists the choice back. The `t()` function returns the full translation object for the current locale.
- **Locale files** — `src/lib/i18n/locales/en.ts` and `nl.ts` each export a typed `Translations` object covering every string in the UI — nav labels, page copy, form labels, meta tags, and all data arrays (experience, skills, education, services).
- **Types** — `src/lib/i18n/types.ts` defines the `Translations` type. TypeScript enforces that both locale files are structurally identical.
- **Toggle** — `Header.svelte` renders an `EN / NL` toggle button in both the desktop header and the mobile drawer. Clicking it calls `toggleLocale()`.
- **Reactivity** — Every component that needs translated strings declares `const tr = $derived(t())`. When the locale changes, all derived values update automatically and the whole UI re-renders with no page navigation.
- **`<html lang>`** — `+layout.svelte` sets `document.documentElement.lang` via a `$effect`, keeping the attribute in sync with the active locale for screen readers and SEO crawlers.

### Adding or updating translations

All translatable content lives in `src/lib/i18n/locales/`. To update a string, edit it in both `en.ts` and `nl.ts`. TypeScript will flag any key that exists in one file but not the other.

Project-specific copy (title, description, role) is keyed by `project.id` under the `projectsData` key in each locale file. `ProjectCard.svelte` looks up its translations there and falls back to the values in `projects.ts` if no entry is found.

---

## Project Structure

```
pixelperfect-designs/
├── src/
│   ├── app.html                        # HTML shell
│   ├── app.css                         # Global design tokens + reset
│   ├── lib/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.svelte       # Fixed nav header, mobile drawer, EN/NL toggle
│   │   │   │   ├── Nav.svelte          # Desktop navigation links
│   │   │   │   └── Footer.svelte       # Footer with social links
│   │   │   ├── sections/
│   │   │   │   ├── Hero.svelte         # Homepage hero with animated graphic
│   │   │   │   └── ProjectGrid.svelte  # Featured projects grid (home page)
│   │   │   └── ui/
│   │   │       └── ProjectCard.svelte  # Reusable project card
│   │   ├── data/
│   │   │   └── projects.ts             # Project data + TypeScript types
│   │   └── i18n/
│   │       ├── index.ts                # Public re-exports
│   │       ├── types.ts                # Translations type + supporting types
│   │       ├── store.svelte.ts         # $state locale store (t, setLocale, toggleLocale…)
│   │       └── locales/
│   │           ├── en.ts               # English translations
│   │           └── nl.ts               # Dutch translations
│   └── routes/
│       ├── +layout.svelte              # Root layout (Header + Footer, locale init)
│       ├── +page.svelte                # Home
│       ├── about/+page.svelte          # About / CV
│       ├── contact/+page.svelte        # Contact form
│       ├── projects/+page.svelte       # Projects with tag filtering
│       └── services/+page.svelte       # Services offered
├── static/
│   ├── .htaccess                       # Apache SPA fallback rule
│   ├── favicon.png
│   ├── robots.txt
│   └── images/                         # Static image assets
├── svelte.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

### Design System

All design tokens live in `src/app.css` as CSS custom properties and are available globally:

| Token group | Examples |
|---|---|
| Colors | `--color-bg`, `--color-surface`, `--color-accent` (#e8ff00), `--color-text`, `--color-text-muted`, `--color-border` |
| Typography | `--text-sm` through `--text-5xl`; Inter (sans), JetBrains Mono (mono) |
| Spacing | `--space-xs` through `--space-3xl` |
| Radius | `--radius-sm`, `--radius-md`, `--radius-lg` |
| Transitions | `--transition-fast` (150ms), `--transition-base` (250ms), `--transition-slow` (400ms) |

Component styles are scoped with Svelte's `<style>` blocks and use these tokens throughout.

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `routes/+page.svelte` | Hero section + featured projects |
| `/about` | `routes/about/+page.svelte` | CV: skills, work history, education |
| `/projects` | `routes/projects/+page.svelte` | Full project list with tag filter |
| `/services` | `routes/services/+page.svelte` | Service offerings with deliverables |
| `/contact` | `routes/contact/+page.svelte` | Contact form |

### Adding or Updating Projects

All project data is defined in `src/lib/data/projects.ts`. Each project follows the `Project` type:

```ts
type Project = {
  id: string;
  title: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  visibility: 'public' | 'private';
  featured: boolean;
  image?: string;       // path relative to /static/images/
  liveUrl?: string;
};
```

- Set `featured: true` to include the project on the home page grid.
- Set `visibility: 'private'` to show the card with a "private work" treatment (no image or live link exposed).
- `featuredProjects` is a pre-filtered export used by `ProjectGrid.svelte`.

---

## Building for Production

```bash
npm run build
```

Output is written to the `build/` directory as fully static HTML, CSS, and JS. The `build/` folder maps directly to `public_html/` on Hostinger.

### Other Scripts

```bash
npm run preview        # Preview the production build locally
npm run check          # Type-check all Svelte and TS files
npm run lint           # Check formatting (Prettier) + lint (ESLint)
npm run format         # Auto-format all files with Prettier
```

---

## Deployment (Hostinger)

The site is hosted on **Hostinger Premium Web Hosting** as a static site served by Apache.

### SPA Routing

`static/.htaccess` is copied into the build root automatically and configures Apache to fall back to `index.html` for any path that doesn't match a real file, enabling SvelteKit's client-side router to handle navigation:

```apache
RewriteEngine On
RewriteBase /

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ /index.html [L]
```

### Deployment Steps

1. Run `npm run build`
2. Upload the contents of `build/` to `public_html/` on Hostinger (via FTP or File Manager)
3. The `api/` folder in `public_html/` (containing the PHP contact endpoint) lives permanently on the server and does **not** need to be re-uploaded on each deploy

---

## Contact Form

The contact form (`/contact`) submits JSON to a PHP endpoint at `/api/contact.php` on Hostinger. This approach is required because Hostinger Premium Web Hosting does not support persistent Node.js server processes.

### How it works

1. User submits the form
2. `+page.svelte` intercepts the submit, serialises the fields to JSON, and `fetch()`es `/api/contact.php`
3. `contact.php` validates the input, sends the email via PHPMailer + Hostinger SMTP, and returns `{"ok":true}` or an error object
4. The Svelte component shows a success or error state accordingly

A hidden honeypot field (`company`) is included in the form. If it is filled (indicating a bot), the PHP endpoint returns a fake success without sending anything.

### PHP Endpoint Setup

The endpoint lives at `public_html/api/contact.php` on Hostinger. It is **not version-controlled** because it contains the mailbox password. To set it up on a fresh server:

1. Create `public_html/api/contact.php` using the template below, filling in the real mailbox password
2. Install PHPMailer via Composer over SSH:

```bash
cd ~/public_html/api
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
php composer.phar require phpmailer/phpmailer
```

### contact.php Template

```php
<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['ok'=>false]); exit; }

$raw  = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data)) { http_response_code(400); echo json_encode(['ok'=>false,'error'=>'Invalid JSON']); exit; }

$name    = trim((string)($data['name']    ?? ''));
$email   = trim((string)($data['email']   ?? ''));
$message = trim((string)($data['message'] ?? ''));

if ($name === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok'=>false,'error'=>'Invalid input']);
    exit;
}

// Honeypot: bots that fill every field are silently discarded
if (!empty($data['company'])) { http_response_code(200); echo json_encode(['ok'=>true]); exit; }

require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@pixelperfectdesigns.nl';
    $mail->Password   = 'YOUR_MAILBOX_PASSWORD';        // <-- replace this
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('info@pixelperfectdesigns.nl', 'PixelPerfect Designs');
    $mail->addAddress('info@pixelperfectdesigns.nl');   // <-- destination inbox
    $mail->addReplyTo($email, $name);

    $mail->Subject = 'New contact form submission from'.{$name};
    $mail->Body    = "Name: {$name}\nEmail: {$email}\n\nMessage:\n{$message}\n";

    $mail->send();
    echo json_encode(['ok'=>true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['ok'=>false,'error'=>'Mail send failed']);
}
```

### Email Deliverability

To avoid messages landing in spam, the following should be configured in Hostinger's DNS and hPanel:

- **SPF** — Added automatically by Hostinger when the domain is connected. Verify a `v=spf1` TXT record exists on the root domain.
- **DKIM** — Must be enabled manually in hPanel under Emails → Email Accounts. Hostinger generates and publishes the DNS key automatically once enabled.
- **DMARC** — Add a TXT record manually in the DNS zone:
  - Name: `_dmarc`
  - Value: `v=DMARC1; p=none; rua=mailto:info@pixelperfectdesigns.nl`

---

## Code Quality

The project uses ESLint (flat config, v9) and Prettier, pre-configured to work with Svelte and TypeScript.

```bash
npm run lint      # Check only
npm run format    # Fix formatting
```

Prettier and ESLint rules are intentionally aligned so they never conflict — `eslint-config-prettier` disables any ESLint formatting rules that overlap with Prettier.
