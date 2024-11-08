'use client';
import classNames from 'classnames';
import { WixMediaImage } from '@app/shared-components/WixMediaImage/WixMediaImage';
import Typography from '@app/shared-components/Typography/Typography';
import Label from '@app/shared-components/Label/Label';
import style from '../about/about.module.css';
import Image from 'next/image';
import AnimatedText from '@app/shared-components/Utils/AnimatedText';

export default function aboutPage() {
  return (
    <>
      {/* <section className={classNames('relative', style.aboutUsSection)}>
        <div className={classNames('flex flex-row items-center justify-center w-11/12 m-auto', style.aboutUsHero)}>
            <div className={classNames('w-3/6 pr-20 flex justify-end', style.aboutUsHeroTitle)}>
                <Typography tag="h1" className="">
                    About Us
                </Typography>
            </div>

            <div className={classNames('w-3/6 flex pt-10 pb-10', style.aboutUsHeroImage)}>
                <Image
                    src={
                    '/images/tags.png'
                    }
                    className={classNames('p-12 rounded-[40px]', style.aboutUsHeroImage)}
                    width={2816}
                    height={1572}
                    alt={`Futures for Europe`}
                />
            </div>
        
        </div>

    </section> */}

      <div
        className={classNames(
          'flex flex-col flex-wrap text-1xl p-20 md:mx-14 xs:mx-14 mt-24 mb-14 squircle bg-[linear-gradient(#c1a9fe,_#f7cbfe)] rounded-[44px]',
          style.staticLayout
        )}
      >
        <Typography
          tag="h2"
          className="flex flex-wrap lg:text-8xl sm:text-[44px] font-bold pb-12 font-bold text-[#333]"
        >
          <AnimatedText />
        </Typography>
      </div>

      <section
        className={classNames(
          'flex flex-col text-2xl mb-44',
          style.staticLayout
        )}
      >
        <div
          className={classNames(
            'sm:w-1/2 xs:w-full m-auto pt-20 px-14',
            style.staticLayoutPadding
          )}
        >
          Futures4Europe is a <strong>user-generated content platform</strong>{' '}
          where registered members share about foresight{' '}
          <strong>projects</strong>, showcase <strong>project results</strong>,
          promote <strong>events</strong>, and express opinions and insights in{' '}
          <strong>posts</strong>. Join the futures-oriented collective
          intelligence by creating a personal and organizational account.
        </div>
      </section>

      <div
        className={classNames(
          'grid grid-cols-[1fr_min(84rem,_100%_-_7rem)_1fr] border-t-[1px] border-t-[solid] border-gray-300 border-b-[none]',
          style.staticLayout
        )}
      >
        <div
          className={classNames(
            'col-start-2 w-4/5 m-auto border-x border-solid border-gray-300'
          )}
        >
          <div
            className={classNames(
              'grid md:grid-cols-2 xs:grid-cols items-center justify-items-center'
            )}
          >
            <Typography tag="p" className=" text-4xl font-medium p-8">
              Futures practitioners
            </Typography>
            <Typography
              tag="p"
              className="text-xl p-8 border-[1px] border-[solid] border-gray-300 rounded-[80px] max-w-[396px] min-h-[12rem] mx-0 -my-[1px] flex items-center"
            >
              From seasoned foresighters experienced in designing ample
              foresight processes to emerging professionals in the field.
            </Typography>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          'grid grid-cols-[1fr_min(84rem,_100%_-_7rem)_1fr] border-t-[1px] border-t-[solid] border-gray-300 border-b-[none]',
          style.staticLayout
        )}
      >
        <div
          className={classNames(
            'col-start-2 w-4/5 m-auto border-x border-solid border-gray-300'
          )}
        >
          <div
            className={classNames(
              'grid md:grid-cols-2 xs:grid-cols items-center justify-items-center'
            )}
          >
            <Typography tag="p" className=" text-4xl font-medium p-8">
              Futures related professionals
            </Typography>
            <Typography
              tag="p"
              className="text-xl p-8 border-[1px] border-[solid] border-gray-300 rounded-[80px] max-w-[396px] min-h-[12rem] mx-0 -my-[1px] flex items-center"
            >
              From futurists, speculative design experts and science-fiction
              writers to future sensitive artists or journalists.
            </Typography>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          'grid grid-cols-[1fr_min(84rem,_100%_-_7rem)_1fr] border-t-[1px] border-t-[solid] border-gray-300 border-b-[none]',
          style.staticLayout
        )}
      >
        <div
          className={classNames(
            'col-start-2 w-4/5 m-auto border-x border-solid border-gray-300'
          )}
        >
          <div
            className={classNames(
              'grid md:grid-cols-2 xs:grid-cols items-center justify-items-center'
            )}
          >
            <Typography tag="p" className=" text-4xl font-medium p-8">
              Foresight clients
            </Typography>
            <Typography
              tag="p"
              className="text-xl p-8 border-[1px] border-[solid] border-gray-300 rounded-[80px] max-w-[396px] min-h-[12rem] mx-0 -my-[1px] flex items-center"
            >
              Such as representatives of the European, national or regional R&I
              funding agencies.
            </Typography>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          'grid grid-cols-[1fr_min(84rem,_100%_-_7rem)_1fr] border-t-[1px] border-t-[solid] border-gray-300 border-b-[none]',
          style.staticLayout
        )}
      >
        <div
          className={classNames(
            'col-start-2 w-4/5 m-auto border-x border-solid border-gray-300'
          )}
        >
          <div
            className={classNames(
              'grid md:grid-cols-2 xs:grid-cols items-center justify-items-center'
            )}
          >
            <Typography tag="p" className=" text-4xl font-medium p-8">
              Science & technology experts
            </Typography>
            <Typography
              tag="p"
              className="text-xl p-8 border-[1px] border-[solid] border-gray-300 rounded-[80px] max-w-[396px] min-h-[12rem] mx-0 -my-[1px] flex items-center"
            >
              Along with other domain specialists who have been part of
              foresight explorations and/or are interested in contributing to
              such endeavors.
            </Typography>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          'grid grid-cols-[1fr_min(84rem,_100%_-_7rem)_1fr] border-[1px] border-[solid] border-gray-300',
          style.staticLayout
        )}
      >
        <div
          className={classNames(
            'col-start-2 w-4/5 m-auto border-x border-solid border-gray-300'
          )}
        >
          <div
            className={classNames(
              'grid md:grid-cols-2 xs:grid-cols items-center justify-items-center'
            )}
          >
            <Typography tag="p" className=" text-4xl font-medium p-8">
              Futures enthusiasts
            </Typography>
            <Typography
              tag="p"
              className="text-xl p-8 border-[1px] border-[solid] border-gray-300 rounded-[80px] max-w-[396px] min-h-[12rem] mx-0 -my-[1px] flex items-center"
            >
              i.e. citizens interested in the prospects Research & Innovation
              can offer to society or in futures explorations in general.
            </Typography>
          </div>
        </div>
      </div>

      <section
        className={classNames(
          'flex flex-col md:text-2xl sm:text-xl mb-44',
          style.staticLayout
        )}
      >
        <div
          className={classNames(
            'md:w-1/2 xs:w-full m-auto md:pt-20 xs:pt-14',
            style.staticLayoutPadding
          )}
        >
          <Typography
            tag="h2"
            className="text-2xl font-bold pb-12 text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Starting November 2023, futures4europe.eu is nurtured through the
            EU-funded project Eye of Europe, continuing the work done under the
            project ‘European R&I Foresight and public engagement for Horizon
            Europe’.
          </Typography>
          Joining as a member is easy. Click on Register on the top right corner
          and set up your account. Then login and share with the world - your
          own profile or your organization’s, foresight projects, results,
          events - do you thing!
        </div>
      </section>
    </>
  );
}
