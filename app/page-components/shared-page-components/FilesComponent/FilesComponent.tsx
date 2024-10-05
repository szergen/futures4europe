import style from './FilesComponent.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Typography from '@app/shared-components/Typography/Typography';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import Button from '@app/shared-components/Button/Button';

export type FilesComponentProps = {
  files: Array<{
    title: string;
    href: string;
    fileSize: string;
    format: string;
  }>;
};

const FilesComponent: React.FC<FilesComponentProps> = ({ files }) => {
  return (
    <section>
      <Typography
        tag="h2"
        className={classNames('text-gray-800 w-full my-4', style.filesTitle)}
      >
        Files
      </Typography>
      <div className="flex">
        {files.map((file, index) => (
          <div key={file.href + index} className={style.fileContainer}>
            <Image
              src="https://framerusercontent.com/images/F46jYRatmGwgDHnyDPIaUs1us.png?scale-down-to=1024"
              width={147}
              height={268}
              className={classNames('rounded-full', style.filePreviewImage)}
              alt="User Avatar - Eva Pericolini"
            />
            <Typography tag="p" className="text-gray-800 mt-2">
              {file.title}
            </Typography>
            <div className={style.downloadButton}>
              <Button>
                Download file ({file.fileSize}){' '}
                <span className="rounded-lg bg-white text-blue-500 p-1 font-bold">
                  {file.format}
                </span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilesComponent;
