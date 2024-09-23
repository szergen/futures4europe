import MiniPagesListItemPost from './components/MiniPagesListItemPost/MiniPagesListItemPost';
import InternalLinksEditor from '@app/shared-components/InternalLinksEditor/InternalLinksEditor';

export type MiniPagesListComponentPostProps = {
  isEditModeOn?: boolean;
  internalLinks?: any[];
  handleUpdatePostData?: (data: any) => void;
};

const MiniPagesListComponentPost: React.FC<MiniPagesListComponentPostProps> = ({
  isEditModeOn,
  internalLinks,
  handleUpdatePostData,
}) => {
  return (
    <>
      {/* Posts */}
      {internalLinks && internalLinks.length > 0 && !isEditModeOn && (
        <MiniPagesListItemPost items={internalLinks} />
      )}
      {isEditModeOn && (
        <div className="w-full">
          <InternalLinksEditor
            internalLinks={internalLinks}
            handleUpdatePostData={handleUpdatePostData}
          />
        </div>
      )}
    </>
  );
};

export default MiniPagesListComponentPost;
