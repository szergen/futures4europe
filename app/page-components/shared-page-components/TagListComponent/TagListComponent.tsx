import style from './TagListComponent.module.css';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';

export type TagListComponentProps = {
  tagList: Array<TagProps>;
  tagListTitle: string;
};

const TagListComponent: React.FC<TagListComponentProps> = ({
  tagList,
  tagListTitle,
}) => {
  return (
    <section className={classNames(style.tagListContainer)}>
      <Typography
        tag="h2"
        className={classNames('text-gray-800 w-full my-4', style.tagListTitle)}
      >
        {tagListTitle}
      </Typography>
      {tagList.map((method) => (
        <Tag key={method.name} {...method} />
      ))}
    </section>
  );
};

export default TagListComponent;
