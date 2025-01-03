import classNames from 'classnames';
import { use, useEffect, useState } from 'react';
import style from './SocialLinksComponent.module.css';
import SpriteSvg from '@app/shared-components/SpriteSvg/SpriteSvg';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';

type SocialLinksComponentProps = {
  isEditModeOn?: boolean;
  linkedinLink?: string;
  websiteLink?: string;
  researchGateLink?: string;
  orcidLink?: string;
  handleUpdate?: (key: string, value: any) => void;
  extended?: boolean;
};

const SocialLinksComponent: React.FC<SocialLinksComponentProps> = ({
  isEditModeOn,
  linkedinLink,
  websiteLink,
  researchGateLink,
  orcidLink,
  handleUpdate,
  extended,
}) => {
  const router = useRouter();
  const [modalKeyToUpdate, setModalKeyToUpdate] = useState('');
  const [currentLinkedinLink, setCurrentLinkedinLink] = useState(linkedinLink);
  const [currentWebsiteLink, setCurrentWebsiteLink] = useState(websiteLink);
  const [currentResearchGateLink, setCurrentResearchGateLink] =
    useState(researchGateLink);
  const [currentOrcidLink, setCurrentOrcidLink] = useState(orcidLink);
  const [labelText, setLabelText] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleIconClick = (url: string, modalKey: string) => {
    const label = {
      linkedinLink: 'Linkedin link',
      websiteLink: 'Website link',
      researchGateLink: 'ResearchGate link',
      orcidLink: 'ORCID link',
    }[modalKey];
    setLabelText(label);
    isEditModeOn && setModalKeyToUpdate(modalKey);
    isEditModeOn ? setShowCreateForm(true) : window.open(url, '_blank');
  };

  const handleFormSubmit = () => {
    handleUpdate &&
      handleUpdate(
        modalKeyToUpdate,
        modalKeyToUpdate === 'linkedinLink'
          ? currentLinkedinLink
          : modalKeyToUpdate === 'websiteLink'
          ? currentWebsiteLink
          : modalKeyToUpdate === 'researchGateLink'
          ? currentResearchGateLink
          : currentOrcidLink
      );
    setShowCreateForm(false);
  };

  useEffect(() => {
    setCurrentLinkedinLink(linkedinLink);
    setCurrentWebsiteLink(websiteLink);
    setCurrentResearchGateLink(researchGateLink);
    setCurrentOrcidLink(orcidLink);
  }, [isEditModeOn, linkedinLink, websiteLink, researchGateLink, orcidLink]);

  return (
    <div className={style.socialIcons}>
      {/* Linkedin */}
      {(currentLinkedinLink || isEditModeOn) && (
        <i
          className={classNames(
            style.socialIcon,
            isEditModeOn && style.editIcon,
            extended && style.extended,
            isEditModeOn && !currentLinkedinLink && 'opacity-30 grayscale'
          )}
          onClick={() =>
            handleIconClick(currentLinkedinLink || '', 'linkedinLink')
          }
        >
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
      )}
      {/* ORCID */}
      {(currentOrcidLink || isEditModeOn) && extended && (
        <i
          className={classNames(
            style.socialIcon,
            isEditModeOn && style.editIcon,
            extended && style.extended,
            isEditModeOn && !currentOrcidLink && 'opacity-30 grayscale'
          )}
          onClick={() => handleIconClick(currentOrcidLink || '', 'orcidLink')}
        >
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
      )}
      {/* Website */}
      {(currentWebsiteLink || isEditModeOn) && (
        <i
          className={classNames(
            style.socialIcon,
            isEditModeOn && style.editIcon,
            extended && style.extended,
            isEditModeOn && !currentWebsiteLink && 'opacity-10 grayscale'
          )}
          onClick={() =>
            handleIconClick(currentWebsiteLink || '', 'websiteLink')
          }
        >
          <SpriteSvg.AccountLinkGeneral
            className={classNames(style.website)}
            sizeW={24}
            sizeH={24}
            fill={'var(--primary-white)'}
            viewBox={'-4 -4 32 32'}
            strokeWidth={0}
            inline={false}
          />
        </i>
      )}
      {/* ResearchGate */}
      {(currentResearchGateLink || isEditModeOn) && extended && (
        <i
          className={classNames(
            style.socialIcon,
            isEditModeOn && style.editIcon,
            extended && style.extended,
            isEditModeOn && !currentResearchGateLink && 'opacity-30 grayscale'
          )}
          onClick={() =>
            handleIconClick(currentResearchGateLink || '', 'researchGateLink')
          }
        >
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
      )}

      <Modal show={showCreateForm} onClose={() => setShowCreateForm(false)}>
        <Modal.Header>Paste the url</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <Label htmlFor="tagName" className="relative">
                {labelText}
              </Label>
              <TextInput
                placeholder="Paste the url"
                value={
                  modalKeyToUpdate === 'linkedinLink'
                    ? currentLinkedinLink
                    : modalKeyToUpdate === 'websiteLink'
                    ? currentWebsiteLink
                    : modalKeyToUpdate === 'researchGateLink'
                    ? currentResearchGateLink
                    : currentOrcidLink
                }
                id="tagName"
                onChange={(e) => {
                  modalKeyToUpdate === 'linkedinLink' &&
                    setCurrentLinkedinLink(e.target.value);
                  modalKeyToUpdate === 'websiteLink' &&
                    setCurrentWebsiteLink(e.target.value);
                  modalKeyToUpdate === 'researchGateLink' &&
                    setCurrentResearchGateLink(e.target.value);
                  modalKeyToUpdate === 'orcidLink' &&
                    setCurrentOrcidLink(e.target.value);
                }}
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
              disabled={
                (modalKeyToUpdate === 'linkedinLink' && !currentLinkedinLink) ||
                (modalKeyToUpdate === 'websiteLink' && !currentWebsiteLink) ||
                (modalKeyToUpdate === 'researchGateLink' &&
                  !currentResearchGateLink) ||
                (modalKeyToUpdate === 'orcidLink' && !currentOrcidLink)
              }
              type="submit"
            >
              Update
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SocialLinksComponent;
