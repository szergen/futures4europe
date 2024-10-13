import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

export interface RTEComponentProps {
  // Define your props here
  content?: string;
  updatePostData?: (data: any) => void;
}

export const RTEComponent: React.FC<RTEComponentProps> = ({
  content,
  updatePostData,
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // TODO: Add condition for when the payload is
  // empty to not be parsed as html and updated
  useEffect(() => {
    if (content && typeof window !== 'undefined') {
      const htmlToDraft = require('html-to-draftjs').default;
      const contentBlock = htmlToDraft(content);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        setEditorState(EditorState.createWithContent(contentState));
      }
    }
  }, []);

  useEffect(() => {
    if (updatePostData) {
      const contentState = editorState.getCurrentContent();
      const htmlContent = draftToHtml(convertToRaw(contentState));
      updatePostData(htmlContent);
    }
  }, [editorState]);

  // const handleEditorStateChange = (state: EditorState) => {
  //   setEditorState(state);
  // };

  return (
    // All configs can be found here: https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp:~:text=/%3E-,toolbar,-toolbar%20property%20provides
    <Editor
      editorState={editorState}
      onEditorStateChange={setEditorState}
      toolbarClassName="editor-toolbar"
      wrapperClassName="editor-container"
      editorClassName="editor-content"
      toolbar={{
        options: [
          'inline',
          // 'blockType',
          // 'fontSize',
          // 'fontFamily',
          'list',
          // 'textAlign',
          // 'colorPicker',
          'link',
          // 'embedded',
          // 'emoji',
          // 'image',
          // 'remove',
          // 'history',
        ],
        inline: {
          // inDropdown: false,
          // className: undefined,
          // component: undefined,
          // dropdownClassName: undefined,
          options: [
            'bold',
            'italic',
            'underline',
            // 'strikethrough',
            // 'monospace',
            'superscript',
            // 'subscript',
          ],
          // bold: { icon: bold, className: undefined },
          // italic: { icon: italic, className: undefined },
          // underline: { icon: underline, className: undefined },
          // strikethrough: { icon: strikethrough, className: undefined },
          // monospace: { icon: monospace, className: undefined },
          // superscript: { icon: superscript, className: undefined },
          // subscript: { icon: subscript, className: undefined },
        },
        list: {
          // inDropdown: false,
          // className: undefined,
          // component: undefined,
          // dropdownClassName: undefined,
          options: [
            'unordered',
            'ordered',
            // 'indent',
            // 'outdent'
          ],
          // unordered: { icon: unordered, className: undefined },
          // ordered: { icon: ordered, className: undefined },
          // indent: { icon: indent, className: undefined },
          // outdent: { icon: outdent, className: undefined },
        },
        link: {
          // inDropdown: false,
          // className: undefined,
          // component: undefined,
          // popupClassName: undefined,
          // dropdownClassName: undefined,
          showOpenOptionOnHover: true,
          // defaultTargetOption: '_self',
          options: ['link', 'unlink'],
          // link: { icon: link, className: undefined },
          // unlink: { icon: unlink, className: undefined },
          // linkCallback: undefined,
        },
        // history: { inDropdown: true },
      }}
    />
  );
};

export default RTEComponent;
