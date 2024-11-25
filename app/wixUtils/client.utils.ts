import { generateFileUploadUrl } from './client-side';

async function uploadFileToWix(
  file: File,
  uploadPath: string,
  isDataURL = false
) {
  console.log('File selected:', file);
  console.log('Upload path:', uploadPath);
  try {
    const generatedFileUploadUrl = await generateFileUploadUrl(
      file?.type || 'image/jpeg',
      {
        fileName: file?.name,
        filePath: uploadPath,
      }
    );

    console.log('generatedFileUploadUrl', generatedFileUploadUrl);
    console.log('File type:', file.type);

    const uploadResponse = await fetch(
      `${generatedFileUploadUrl.uploadUrl}?filename=${file?.name}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': file?.type || 'image/jpeg',
        },
        body: file,
        mode: 'cors',
      }
    );

    if (!uploadResponse.ok) {
      throw new Error(`Upload failed: ${uploadResponse.statusText}`);
    }

    const jsonResponse = await uploadResponse.json();
    console.log('File upload response', jsonResponse.file);
    return jsonResponse.file;
  } catch (error) {
    console.error('Error uploading file', error);
    throw error;
  }
}

function createElementFromNode(node) {
  switch (node.type) {
    case 'PARAGRAPH': {
      const textContent = node.nodes
        .map((childNode) =>
          childNode.type === 'TEXT' ? childNode.textData.text : ''
        )
        .join('');
      return `<p>${textContent}</p>`;
    }
    case 'BULLETED_LIST': {
      const listItems = node.nodes
        .map((listItem) =>
          listItem.nodes
            .map((paragraph) =>
              paragraph.type === 'PARAGRAPH'
                ? createElementFromNode(paragraph)
                : ''
            )
            .join('')
        )
        .map((content) => `<li>${content}</li>`)
        .join('');
      return `<ul>${listItems}</ul>`;
    }
    case 'ORDERED_LIST': {
      const listItems = node.nodes
        .map((listItem) =>
          listItem.nodes
            .map((paragraph) =>
              paragraph.type === 'PARAGRAPH'
                ? createElementFromNode(paragraph)
                : ''
            )
            .join('')
        )
        .map((content) => `<li>${content}</li>`)
        .join('');
      return `<ol>${listItems}</ol>`;
    }
    default:
      return '';
  }
}

function generateHtmlFromRichContent(richContent) {
  return richContent.nodes.map(createElementFromNode).join('');
}

export { uploadFileToWix, generateHtmlFromRichContent };
