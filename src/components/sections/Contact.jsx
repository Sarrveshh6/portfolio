import { useState } from 'react';
import { personal } from '../../data/personal';
import { useContactForm } from '../../hooks/useContactForm';
import FadeIn from '../animations/FadeIn';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';

const subjects = [
  'Job Opportunity',
  'Freelance Project',
  'Collaboration',
  'Other',
];

export default function Contact() {
  const { submit, status, reset } = useContactForm();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: subjects[0],
    message: '',
    website: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await submit(form);
    if (result.ok) {
      setForm({ name: '', email: '', subject: subjects[0], message: '', website: '' });
      reset();
    }
  };

  return (
    <section id="contact" className="section-padding bg-bg-dark text-white">
      <div className="container-content">
        <div className="grid gap-16 lg:grid-cols-2">
          <FadeIn>
            <SectionLabel dark>Get In Touch</SectionLabel>
            <h2 className="mt-4 whitespace-pre-line font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Let&apos;s Build{'\n'}Something Great.
            </h2>
            <p className="mt-6 max-w-md text-text-subtle">
              Whether you&apos;re looking for a developer to join your team, need a freelance
              collaborator, or just want to say hi — my inbox is always open.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <a href={`mailto:${personal.email}`} className="hover:text-accent">
                  {personal.email}
                </a>
              </li>
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  GitHub
                </a>
              </li>
            </ul>

            <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-border-dark px-4 py-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-green-400" aria-hidden />
              {personal.availability}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border-dark bg-bg-dark-2 p-6 md:p-8"
              noValidate
            >
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
              />

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border-border-dark bg-bg-dark text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border-border-dark bg-bg-dark text-white"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1 block text-sm font-medium">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border-border-dark bg-bg-dark text-white"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border-border-dark bg-bg-dark text-white"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                className="mt-6 w-full"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending…' : 'Send Message →'}
              </Button>

              {status === 'success' && (
                <p className="mt-4 text-center text-sm text-green-400" role="status">
                  Message sent successfully.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
