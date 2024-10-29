import Image from 'next/image';
import style from './HeaderComponent.module.css';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import { getImageUrlForMedia } from '../../../PageComponents.utils';
import InputText from '@app/shared-components/InputText/InputText';
import TagPicker from '@app/shared-components/TagPicker/TagPicker';
import InfoPagesImageFileUploader from '@app/shared-components/InfoPagesImageFileUploader/InfoPagesImageFileUploader';
import SpriteSvg from '@app/shared-components/SpriteSvg/SpriteSvg';
import { useState } from 'react';
import { Modal, Label, TextInput, Button } from 'flowbite-react';

export type HeaderComponentProps = {
  person: {
    title: string;
    tagLine: string;
    image: string;
    personPopularity: number;
    pageType: 'Post' | 'Event' | 'Project Result';
    description: string;
    countryTag: {
      name: string;
      popularity: number;
    };
    recommendations: {
      number: number;
      images: string[];
    };
    views: number;
    personRoles: Array<TagProps>;
    personTag: TagProps;
    activity: Array<TagProps>;
  };
  isEditModeOn: boolean;
  tags: TagProps[];
  updatePersonData: (data: any) => void;
  updatePersonDataOnKeyValue: (key: string, value: any) => void;
  setValidationState: (data: any) => void;
  handleTagCreated: () => void;
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  person,
  isEditModeOn,
  tags,
  updatePersonData,
  updatePersonDataOnKeyValue,
  setValidationState,
  handleTagCreated,
}) => {
  const validationFunctionForName = (
    tempName: string | undefined,
    existingPostPagesTitles?: string[],
    defaultPostTitle?: string
  ): string => {
    if (!tempName) {
      return 'Title is required';
    }

    if (tempName.length < 5) {
      return 'Title should be at least 5 characters long';
    }
    if (tempName.length > 100) {
      return 'Title should be at most 100 characters long';
    }
    if (tempName === 'New Post') {
      return 'Title cannot be "New Post"';
    }
    // const validTitleRegex = /^(?!.*\s{2,})(?!.*\|).*$/;
    // if (!validTitleRegex.test(tempName)) {
    //   return 'Title cannot contain multiple spaces or |';
    // }

    if (Array.isArray(existingPostPagesTitles) && defaultPostTitle) {
      const isTempTitleExisting = existingPostPagesTitles.some(
        (postPageTitle) =>
          postPageTitle !== defaultPostTitle && postPageTitle === tempName
      );
      if (isTempTitleExisting) {
        return 'Title already exists';
      }
    }

    return '';
  };

  {
    /* // TODO: @alex update social links */
  }
  const [showCreateForm, setShowCreateForm] = useState(false);
  const handleIconClick = () => {
    setShowCreateForm(true);
  };
  {
    /* // TODO: @alex update social links - end */
  }

  return (
    <div className={classNames(style.personHeader)}>
      <div className={style.imageAndSocialColumn}>
        {!isEditModeOn ? (
          <Image
            src={
              getImageUrlForMedia(person?.personTag?.picture)?.url ||
              getImageUrlForMedia(person?.personTag?.picture) ||
              'https://placehold.co/147x147?text=Profile Image'
            }
            width={647}
            height={647}
            className={classNames('rounded-full')}
            alt={`User Avatar - ${person.title}`}
          />
        ) : (
          <div className="w-72">
            <InfoPagesImageFileUploader
              currentImage={person?.personTag?.picture}
              updatePostData={(value) =>
                updatePersonDataOnKeyValue('personTag', {
                  ...person?.personTag,
                  picture: value,
                })
              }
            />
          </div>
        )}
        {/* // TODO: @alex update social links */}
        {/* Social Icons */}
        <div className={style.socialIcons}>
          {/* Linkedin */}
          <i className={style.socialIcon} onClick={handleIconClick}>
            <SpriteSvg.AccountLinkLinkedin
              viewBox="-4 -4 32 32"
              className={classNames(style.website)}
              sizeW={24}
              sizeH={24}
              fill={'var(--primary-white)'}
              strokeWidth={0}
              style={{
                padding: 'var(--w-space-xs)',
                backgroundColor: 'var(--color-background-primary)',
              }}
              inline={false}
            />
          </i>
          {/* Orcid */}
          <i className={style.socialIcon} onClick={handleIconClick}>
            <SpriteSvg.AccountLinkOrcid
              viewBox="0 0 32 32"
              className={classNames(style.website)}
              sizeW={24}
              sizeH={24}
              fill={'var(--color-background-researchgate)'}
              style={{ backgroundColor: 'var(--primary-white)' }}
              strokeWidth={0}
              inline={false}
            />
          </i>
          {/* ResearchGate */}
          <i className={style.socialIcon} onClick={handleIconClick}>
            <SpriteSvg.AccountLinkResearchGate
              viewBox="-4 -4 32 32"
              className={classNames(style.website)}
              sizeW={24}
              sizeH={24}
              fill={'var(--primary-white)'}
              style={{
                padding: 'var(--w-space-xs)',
                backgroundColor: 'var(--color-background-brand-30)',
              }}
              strokeWidth={0}
              inline={false}
            />
          </i>
          {/* Link */}
          <i className={style.socialIcon} onClick={handleIconClick}>
            <SpriteSvg.AccountLinkGeneral
              className={classNames(style.website, 'white')}
              sizeW={24}
              sizeH={24}
              fill={'var(--primary-white)'}
              viewBox={'-4 -4 32 32'}
              strokeWidth={0}
              inline={false}
            />
          </i>
        </div>
        {/* Views */}
        {!isEditModeOn && (
          <Typography
            data-after="2153"
            tag="p"
            className="text-sm text-gray-800 my-3 after:content-[attr(data-after)]]"
          >
            {person.views} views
          </Typography>
        )}
      </div>
      <div className={style.detailsColumn}>
        {/* Person Info Name */}
        {!isEditModeOn ? (
          <Typography tag="h1" className="text-gray-800">
            {person?.personTag?.name}
            {/* Person Popularity */}
            <span
              data-after={person?.personTag?.popularity || ''}
              className={classNames(
                style.personTagPopularity,
                'after:content-[attr(data-after)] text-lg relative top-[-30px] ml-1 text-gray-500 dark:text-gray-400'
              )}
            ></span>
          </Typography>
        ) : (
          <InputText
            placeholder="Enter your full name (as you want to be seen by others)*"
            value={person?.personTag?.name}
            className={classNames(
              // 'personNameTitle',
              style.genericTextArea,
              style.textPostTitleEdit,
              validationFunctionForName(person?.title) && style.InputRequired
            )}
            onChange={(e) =>
              updatePersonData({
                ...person,
                title: e?.target?.value,
                personTag: {
                  ...person?.personTag,
                  name: e?.target?.value,
                },
              })
            }
            validate={validationFunctionForName}
            setValidationState={
              setValidationState
                ? (value) => setValidationState({ title: value })
                : undefined
            }
          />
        )}
        {/* Person Tagline */}
        {!isEditModeOn ? (
          <Typography tag="h3" className="text-gray-800 italic">
            {person?.personTag?.tagLine}
          </Typography>
        ) : (
          <InputText
            // label="Tagline"
            placeholder="Enter a tagline (motto, slogan, ...)"
            className={classNames(
              // 'personTaglineTitle',
              style.genericTextArea,
              style.textPostSubtitle
            )}
            value={person?.personTag?.tagLine || ''}
            onChange={(e) =>
              updatePersonData({
                ...person,
                personTag: {
                  ...person.personTag,
                  tagLine: e.target.value,
                },
              })
            }
          />
        )}
        {/* Person type - activity */}
        <div className={classNames('flex flex-wrap', style.domains)}>
          {!isEditModeOn ? (
            person.activity?.map((activity) => (
              <Tag key={activity?.name} {...activity} />
            ))
          ) : (
            <TagPicker
              tags={tags?.filter((tag) => tag?.tagType === 'person type')}
              className="w-full"
              isMulti
              selectedValues={person?.activity?.map(
                (activity) => activity?.name
              )}
              updatePostData={(value) => {
                updatePersonDataOnKeyValue('activity', value);
              }}
              tagType={'person type'}
              onTagCreated={handleTagCreated}
              placeholder="Select Activity Interests"
            />
          )}
        </div>
        {/* Person Country */}
        <div className="mt-1">
          {!isEditModeOn ? (
            <Tag {...person.countryTag} />
          ) : (
            <TagPicker
              placeholder={'Add a country tag (your current residence)'}
              tags={tags?.filter((tag) => tag?.tagType === 'country')}
              className="relative"
              selectedValue={person?.countryTag?.name || undefined}
              updatePostData={(value) =>
                updatePersonDataOnKeyValue('countryTag', value)
              }
              tagType="country"
              onTagCreated={handleTagCreated}
              // tagTypeLabel={'Country'}
            />
          )}
        </div>

        {/* // TODO: Alex @modal update social links */}
        <Modal show={showCreateForm} onClose={() => setShowCreateForm(false)}>
          <Modal.Header>Paste the url</Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-4">
                <Label htmlFor="tagName" className="relative">
                  Add link...
                </Label>
                <TextInput
                  placeholder="Paste the url"
                  id="tagName"
                  onChange={(e) => setTagName(e.target.value)}
                  required
                  helperText={
                    !setShowCreateForm && (
                      <span className="text-red-600 relative -top-3">
                        Name already exists
                      </span>
                    )
                  }
                />
              </div>
              <Button
                disabled={!setShowCreateForm || setShowCreateForm}
                type="submit"
                // disabled={isLoading}
              >
                Update
              </Button>
            </form>
          </Modal.Body>
        </Modal>
        {/* // TODO: Alex @modal update social links - end */}
      </div>
    </div>
  );
};

export default HeaderComponent;
