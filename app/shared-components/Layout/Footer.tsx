import './footer.css';
import { Logo } from '@app/shared-components/Logo/Logo';
import testIds from '@app/utils/test-ids';

const Footer = () => (
  <footer className="footerLayout" data-testid={testIds.LAYOUT.FOOTER}>
    <div className="flex flex-col sm:flex-row">
      <div className="basis-2/3 text-white p-14 sm:pl-44">
        <h2 className="text-2xl sm:text-3xl font-bold">CONTACT</h2>
        <div className="flex flex-col sm:flex-row text-sm">
          <div className="basis-1/3 pb-4">
            <p className="mt-10">
              The European Commission support does not constitute endorsement of
              the contents which reflects the views only of the authors, and the
              Commission cannot be held responsible for any use which may be
              made of the information contained.
            </p>
          </div>
          <div className="basis-1/3"></div>
          <div className="basis-1/2 pb-4">
            <p className="mt-10">contact@futures4europe.eu</p>
          </div>
        </div>
        <Logo fill={'#fff'} className="mt-4" />
      </div>
      <div className="basis-1/3 p-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">BE THE FIRST TO KNOW</h2>
        <p className="mt-6">Sign up to our newsletter to stay informed</p>
        <input
          type="email"
          className="my-6 w-3/4 block mx-auto bg-transparent border-0 border-b border-blue-site text-blue-site"
          placeholder="Email Address"
        />
        <a href="" className="text-purple-site py-6 font-site">
          Subscribe Now
        </a>
      </div>
    </div>
    <div className="mx-auto text-center sm:text-xs mt-6">
      <p className="font-default mb-10">© 2035 Futures for Europe.</p>
    </div>
  </footer>
);

export default Footer;
