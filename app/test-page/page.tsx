'use client';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import { WixMediaImage } from '@app/shared-components/Image/WixMediaImage';
import Typography from '@app/shared-components/Typography/Typography';
import Label from '@app/shared-components/Label/Label';
import style from './Testpage.module.css';
import Button from '@app/shared-components/Button/Button';
import Tooltip from '@app/shared-components/Tooltip/Tooltip';
import Tooltip2 from '@app/shared-components/Tooltip2/Tooltip2';
import Icons from '@app/shared-components/Icons/Icons';
import Tag from '@app/shared-components/Tag/Tag';
import { TagCategories } from '@app/shared-components/Tag/Tag.utils';
import PopoverComponent from '@app/shared-components/Popover/PopoverComponent';
import TagPicker from '@app/shared-components/TagPicker/TagPicker';

export default function TestPage() {
  console.log('TestPage');
  const onClickHandler = () => {
    console.log('Button clicked');
  };
  return (
    <div className={classNames('relative', style.testPageContainer)}>
      {/* Typography examples */}
      <Typography tag="h1" className="text-center font-site">
        This is an H1 element
      </Typography>
      <Typography tag="h2" className="text-center font-site">
        This is an H2 element
      </Typography>
      <Typography tag="h3" className="text-center  text-blue-site font-site">
        This is an H3 element
      </Typography>
      <Typography tag="h4" className="text-center  text-blue-site font-site">
        This is an H4 element
      </Typography>
      <Typography
        tag="p"
        className="text-center  text-blue-site font-site mb-8"
      >
        This is a paragraph element
      </Typography>
      {/* Label examples */}
      <Label text="This is a default styled label" htmlFor="test" />
      <Label
        text="This is a label with overridden styles from tailwindcss"
        htmlFor="test"
        className="!text-blue-site mb-8"
      />
      <Label
        text="This is another label with overridden styles from the page"
        htmlFor="test"
        className={style.labelStyle}
      />
      {/* Button examples */}
      <Button onClick={onClickHandler}>This is a default styled button</Button>
      <Button onClick={onClickHandler} className="!bg-blue-site">
        This is a button with overridden styles from tailwindcss
      </Button>
      <Button onClick={onClickHandler} className={style.buttonStyle}>
        This is another button with overridden styles from the page
      </Button>
      <br />
      <br />
      {/* Tooltip examples */}
      <Tooltip tooltipText="Velit eu nostrud elit elit cupidatat sit magna ad nostrud officia." />
      <Tooltip text="info" tooltipText="Velit eu nostrud elit " />
      {/* Tooltip2 examples */}
      <br />
      <br />
      <Tooltip2
        tooltipText="Velit eu nostrud elit elit cupidatat sit magna ad nostrud officia."
        placement="bottom"
        classNameFoContainer="mx-4"
      />
      <Tooltip2
        text="info"
        tooltipText="Velit eu nostrud elit elit cupidatat sit magna ad nostrud officia."
        classNameFoContainer="!bg-blue-site"
        placement="top"
      />
      <Tooltip2
        text="info"
        tooltipText="Velit eu nostrud elit elit cupidatat sit magna ad nostrud officia."
        placement="right"
        classNameFoContainer="mx-4"
      />
      <Tooltip2
        text="info"
        tooltipText="Velit eu nostrud"
        placement="left"
        classNameFoContainer="mx-4"
      />
      <br />
      <br />
      <Icons className="w-6 h-6 text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </Icons>
      <br />
      {/* Tag examples */}
      <Tag tagText="This is a default styled tag" />
      <Tag
        tagText="This is a tag with overridden styles from tailwindcss"
        className="!bg-pink-100"
      />
      <Tag
        tagText="This is another tag with overridden styles from the page"
        className={style.buttonStyle}
      />
      <br />
      <br />
      <Tag
        tagText="This is a tag with forced thumbnail"
        tagCategory={TagCategories.person}
      />
      <Tag
        tagText="This is a tag with thumbnail"
        thumbnail="https://picsum.photos/id/1011/40/40"
        className="!bg-pink-100"
      />
      <Tag
        tagText="This is a tag with thumbnail"
        thumbnail="https://picsum.photos/id/550/40/40"
        tagCounter={5}
        tagTrend={-2}
      />
      <br />
      <br />
      <Tag
        tagText="This is a tag with thumbnail"
        tagCounter={15}
        tagTrend={2}
        tagCategory={TagCategories.person}
      />
      <Tag
        tagText="This is a tag with thumbnail"
        thumbnail="https://picsum.photos/id/550/40/40"
        tagCounter={15}
        tagTrend={2}
        tagCategory={TagCategories.person}
        enableLabel
      />
      <Tag
        tagText="This is a tag with thumbnail"
        thumbnail="https://picsum.photos/id/550/40/40"
        tagCounter={15}
        tagTrend={2}
        tagCategory={TagCategories.person}
        editable
      />
      <br />
      <br />
      <Tag
        tagText="This is a default tag with link"
        href="https://google.com"
      />
      <Tag
        tagText="This is a tag with link and thumbnail"
        href="https://google.com"
        thumbnail="https://picsum.photos/id/650/40/40"
      />
      <br />
      <br />
      {/* PopOver Examples */}
      <PopoverComponent
        trigger="hover"
        popoverTitle="Popover Title"
        popoverContent="This is the content of the popover"
      >
        <button>
          <Tag
            tagText="This is a tag with a hover popover"
            href="https://google.com"
            thumbnail="https://picsum.photos/id/650/40/40"
          />
        </button>
      </PopoverComponent>
      <br />
      <br />
      {/* TagPicker Examples */}
      <TagPicker />
    </div>
  );
}
