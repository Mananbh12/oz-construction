'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Empêche la soumission par défaut (GET)
    console.log('Form submission started');
    setIsSubmitting(true);
    setStatus({});

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    console.log('Payload sent to API:', payload);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('API response status:', response.status);

      const result = await response.json();
      console.log('API response data:', result);
      if (response.ok) {
        setStatus({ success: true, message: 'Message envoyé avec succès !' });
        event.currentTarget.reset(); // Réinitialise le formulaire après succès
      } else {
        setStatus({ success: false, message: result.error || 'Échec de l\'envoi du message.' });
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      setStatus({ success: false, message: 'Une erreur est survenue lors de l\'envoi du message.' });
    } finally {
      console.log('Submission process completed, isSubmitting set to false');
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container">
      <h1>Contactez-nous</h1>
      <p className="mb-8">
        Vous avez un projet en tête ? Contactez-nous pour discuter de vos besoins en béton et construction.
      </p>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required></textarea>

          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </form>
        {status.message && (
          <p className={status.success ? 'text-green-600' : 'text-red-600'}>
            {status.message}
          </p>
        )}
      </div>
    </div>
  );
}