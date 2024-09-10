'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getWixClientMember } from '@app/hooks/useWixClientServer';

export default function RegisterPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (event: SubmitEvent) => {
    event.preventDefault();
    try {
      const email = event?.target?.email?.value || '';
      const password = event.target?.password?.value || '';

      const wixClient = await getWixClientMember();
      await wixClient.authentication.register(email, password);
      router.push('/login'); // Redirect to login page after registration
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleRegister}>
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
