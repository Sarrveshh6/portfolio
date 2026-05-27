import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function useContactForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const submit = async (formData) => {
    if (formData.website) {
      return { ok: false, error: 'Spam detected' };
    }

    setStatus('loading');
    setError(null);

    const hasEmailJs = SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY;

    try {
      if (hasEmailJs) {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: formData.name,
            reply_to: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          PUBLIC_KEY
        );
      } else {
        await new Promise((r) => setTimeout(r, 800));
        console.info('[Contact form demo]', formData);
      }

      setStatus('success');
      toast.success("Message sent! I'll reply within 24 hours.");
      return { ok: true };
    } catch (err) {
      const message = err?.text || err?.message || 'Failed to send message';
      setStatus('error');
      setError(message);
      toast.error(message);
      return { ok: false, error: message };
    }
  };

  const reset = () => {
    setStatus('idle');
    setError(null);
  };

  return { submit, status, error, reset, isConfigured: Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) };
}
