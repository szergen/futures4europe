import React from 'react';
import dynamic from 'next/dynamic';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

export const RTEComponent = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  return (
    <Editor
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
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
