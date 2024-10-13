import './RTEComponent.module.css';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import { RxFontBold } from 'react-icons/rx';

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

  const handlePastedText = (text: string, html: string, editorState: EditorState, onChange: (editorState: EditorState) => void): boolean => {
    const contentState = ContentState.createFromText(text);
    const newEditorState = EditorState.push(
      editorState,
      contentState,
      'insert-characters'   
  
    );
    onChange(newEditorState); // Use onChange to update the editor state
    return true; // Return true to indicate that pasting is handled
  };

  
  return (
    <div>
      {/* // TODO: Somehow register css in the .css file and overrideStyle, not working now. */}
    <style jsx global>
    {` 
      .public-DraftStyleDefault-block {
        font-size: var(----w-font-size-tag);
      }
      .editor-content .public-DraftEditorPlaceholder-hasFocus {
        display: none !important;
      }
    `}
  </style>    
    <Editor
      placeholder='Type or paste the body of your post'
      editorState={editorState}
      onEditorStateChange={setEditorState}
      handlePastedText={handlePastedText}      
      toolbarClassName="editor-toolbar"
      wrapperClassName="editor-container"
      editorClassName="editor-content"
      toolbarStyle={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
      toolbar={{
        options: [
          'inline',
          // 'blockType',
          // 'fontSize',
          // 'fontFamily',
          'list',
          // 'textAlign',
          // 'colorPicker',
          // 'link',
          // 'embedded',
          // 'emoji',
          // 'image',
          // 'remove',
          // 'history',
        ],
        inline: {
          // bold: { icon: <RxFontBold /> , className: 'demo-option-custom' },
        },
        // list: { inDropdown: true },
        // textAlign: { inDropdown: true },
        history: { inDropdown: true },
      }}
    />
    </div>
  );
};

export default RTEComponent;
