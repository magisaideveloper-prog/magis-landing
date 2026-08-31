import { createClient } from '@supabase/supabase-js';

export default async function handler(request, response) {
  // Configuración de CORS
  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Método no permitido (solo POST)' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return response.status(500).json({
      error: 'Configuración del servidor incompleta: faltan las variables SUPABASE_URL o SUPABASE_ANON_KEY en Vercel.'
    });
  }

  let body = request.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      return response.status(400).json({ error: 'Formato JSON inválido' });
    }
  }

  const { firstName, email, interest, whatsapp, data_auth } = body || {};

  if (!firstName || !email || !interest || !whatsapp) {
    return response.status(400).json({ error: 'Por favor completa todos los campos obligatorios.' });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const isDataAuth = data_auth === true || data_auth === 'on' || data_auth === 'true';

    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name: firstName,
          email: email,
          whatsapp: whatsapp,
          interest: interest,
          data_auth: isDataAuth
        }
      ])
      .select();

    if (error) {
      console.error('Error de Supabase:', error);
      return response.status(500).json({ error: `Error de Supabase: ${error.message}` });
    }

    return response.status(200).json({ message: 'Registro exitoso', data });
  } catch (error) {
    console.error('Error del servidor:', error);
    return response.status(500).json({ error: error.message || 'Error interno del servidor' });
  }
}
