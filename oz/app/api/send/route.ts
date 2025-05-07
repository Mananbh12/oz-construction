import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log('API route /api/send called');
  // Validation de la clé API
  if (!process.env.RESEND_API_KEY) {
    console.error('Clé API Resend manquante');
    return new Response(JSON.stringify({ error: 'Clé API Resend manquante' }), { status: 500 });
  }
  console.log('Resend API key is present');

  try {
    const { name, email, message } = await request.json();
    console.log('Received request data:', { name, email, message });

    // Validation des champs
    if (!name || !email || !message) {
      console.log('Validation failed: Missing required fields');
      return new Response(JSON.stringify({ error: 'Les champs nom, email et message sont requis' }), { status: 400 });
    }

    // Validation du format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed: Invalid email format');
      return new Response(JSON.stringify({ error: 'Adresse email invalide' }), { status: 400 });
    }
    console.log('Input validation passed');

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: 'admin@ozmatesconcreting.com.au', // Votre adresse pour recevoir les soumissions
      subject: `Nouvelle soumission de formulaire de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    if (error) {
      console.error('Erreur lors de l\'envoi avec Resend:', error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    console.log('Email sent successfully, response data:', data);
    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    console.error('Erreur inattendue dans l\'API:', error);
    return new Response(JSON.stringify({ error: 'Échec de l\'envoi de l\'email' }), { status: 500 });
  }
}