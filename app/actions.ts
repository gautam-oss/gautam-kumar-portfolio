'use server'

export async function submitContact(data: {
  name: string
  email: string
  message: string
}) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
  if (!accessKey) throw new Error('WEB3FORMS_ACCESS_KEY is not set')

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Portfolio contact from ${data.name}`,
      from_name: data.name,
      email: data.email,
      message: data.message,
    }),
  })

  const json = await res.json()
  if (!json.success) throw new Error(json.message ?? 'Submission failed')
}
