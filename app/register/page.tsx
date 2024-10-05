'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getWixClientMember } from '@app/hooks/useWixClientServer';
import LoadingSpinner from '@app/shared-components/LoadingSpinner/LoadingSpinner';
import {
  Button,
  Card,
  Checkbox,
  Label,
  TextInput,
  Alert
} from 'flowbite-react';
import { HiMail, HiKey, HiInformationCircle } from 'react-icons/hi';

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
    <div className="flex items-center justify-center w-full lg:p-12r min-h-[70vh]">
      <Card className="w-6w-2/3 rounded-xxl shadow-sm	">
        <div className="container flex flex-col mx-auto bg-white pt-2">
          <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-col items-center xl:p-10">
                {error && (
                  <Alert
                    className="mb-4"
                    color="failure"
                    icon={HiInformationCircle}
                  >
                    <span className="font-medium">Info alert!</span> {error}
                  </Alert>
                )}
                <form
                  onSubmit={handleRegister}
                  className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
                >
                  <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                    Register Account
                  </h3>
                  <p className="mb-4 text-grey-700">
                    Enter your email and password
                  </p>
                  <a className="btn-disabled flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-300 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                    <img
                      alt=""
                      className="h-5 mr-2"
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                    />
                    Sign in with Google
                  </a>
                  <div className="flex items-center mb-3">
                    <hr className="h-0 border-b border-solid border-grey-500 grow" />
                    <p className="mx-4 text-grey-600">or</p>
                    <hr className="h-0 border-b border-solid border-grey-500 grow" />
                  </div>

                  <Label
                    className="mb-2 text-sm text-start text-grey-900"
                    htmlFor="email"
                    value="Your email"
                  />

                  <TextInput
                    className="block relative"
                    id="email"
                    type="email"
                    sizing="lg"
                    shadow
                    placeholder="enter email address"
                    icon={HiMail}
                    required
                  />

                  <Label
                    className="mb-2 text-sm text-start text-grey-900"
                    htmlFor="password"
                    value="Password*"
                  />
                  <TextInput
                    id="password"
                    className="block relative"
                    sizing="lg"
                    shadow
                    placeholder="create a password"
                    icon={HiKey}
                    type="password"
                    required
                  />

                  <Button
                    color="primary"
                    className="w-full btn-main px-2 py-2 mb-6 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-blue-600 focus:ring-4 bg-blue-500"
                    type="submit"
                  >
                    Create account
                  </Button>
                  <p className="text-sm leading-relaxed text-grey-900">
                    Are you allready a memebr?{' '}
                    <a className="font-bold text-grey-700" href="/login">
                      Log in
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
