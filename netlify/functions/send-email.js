export const handler = async (event) => {
  try {
    const body = event.body ? JSON.parse(event.body) : {}
    const { empresa, contacto, email, sector, nivel, descripcion } = body

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['aide.yunis@headhuntery.com'],
        subject: `Solicitud de ${contacto || 'contacto'}`,
        html: `
          <p><strong>Empresa:</strong> ${empresa || ''}</p>
          <p><strong>Contacto:</strong> ${contacto || ''} — ${email || ''}</p>
          <p><strong>Sector:</strong> ${sector || ''}</p>
          <p><strong>Nivel:</strong> ${nivel || ''}</p>
          <p><strong>Descripción:</strong><br/>${(descripcion || '').replace(/\n/g, '<br/>')}</p>
        `,
      }),
    })

    if (!resp.ok) {
      const text = await resp.text()
      console.error('Resend API error:', resp.status, text)
      return { statusCode: resp.status, body: JSON.stringify({ ok: false, error: text }) }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    }
  } catch (err) {
    console.error('Resend error:', err)
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: err.message }),
    }
  }
}
