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
    <Editor
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      // onEditorStateChange={setEditorState}
      onEditorStateChange={setEditorState}
      toolbar={{
        options: [
          'inline',
          // 'blockType',
          // 'fontSize',
          // 'fontFamily',
          'list',
          'textAlign',
          // 'colorPicker',
          // 'link',
          // 'embedded',
          // 'emoji',
          // 'image',
          // 'remove',
          // 'history',
        ],
        // inline: { inDropdown: true },
        // list: { inDropdown: true },
        // textAlign: { inDropdown: true },
        history: { inDropdown: true },
      }}
    />
  );
};

export default RTEComponent;
