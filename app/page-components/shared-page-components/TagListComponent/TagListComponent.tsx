import style from './TagListComponent.module.css';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import TagPicker from '@app/shared-components/TagPicker/TagPicker';

export type TagListComponentProps = {
  tagList: Array<TagProps>;
  tagListTitle: string;
  isEditModeOn?: boolean;
  tags?: Array<TagProps>;
  selectedValues?: Array<string>;
  updatePostData?: (data: any) => void;
  tagType?: string;
  handleTagCreated?: () => void;
};

const TagListComponent: React.FC<TagListComponentProps> = ({
  tagList,
  tagListTitle,
  isEditModeOn,
  tags,
  selectedValues,
  updatePostData,
  tagType,
  handleTagCreated,
}) => {
  return (
    <section className={classNames(style.tagListContainer)}>
      <Typography
        tag="h2"
        className={classNames('text-gray-800 w-full my-4', style.tagListTitle)}
      >
        {tagListTitle}
      </Typography>
<<<<<<< HEAD
      {tagList?.map((method) => (
        <Tag key={method.name} {...method} />
      ))}
=======
      {!isEditModeOn ? (
        tagList.map((tag) => <Tag key={tag.name} {...tag} />)
      ) : (
        <TagPicker
          tags={tags}
          className="w-full"
          isMulti
          selectedValues={selectedValues}
          updatePostData={updatePostData}
          tagType={tagType}
          onTagCreated={handleTagCreated}
        />
      )}
>>>>>>> dc61749c4e507f1a0444c8b7423c0b65f1b85fc9
    </section>
  );
};

export default TagListComponent;
