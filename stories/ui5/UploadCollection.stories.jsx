import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Button,
  FlexBox,
  FlexBoxAlignItems,
  Icon,
  Text,
  Title,
  UploadCollection,
  UploadCollectionItem
} from '@ui5/webcomponents-react';
import ListSelectionMode from '@ui5/webcomponents/dist/types/ListSelectionMode.js';
import documentIcon from '@ui5/webcomponents-icons/dist/document.js';

const meta = {
  title: 'UI5 Components/Upload Collection', component: UploadCollection,
  argTypes: {
    children: { control: { disable: true } },
    header: { control: { disable: true } },
  },
  args: {
    selectionMode: ListSelectionMode.None,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-uploadcollection--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render: (args) => {
    const [children, setChildren] = useState([]);
    const handleDrop = (e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      files.forEach((file) => {
        setChildren((prev) => [
          ...prev,
          <UploadCollectionItem
            key={file.name}
            file={file}
            fileName={file.name}
            thumbnail={<Icon name={documentIcon} />}
            uploadState={UploadState.Ready}
          >
            <Text>{`Last modified: ${file.lastModifiedDate} · Size: ${(file.size / 1000).toFixed(2)}KB`}</Text>
          </UploadCollectionItem>,
        ]);
      });
    };
    return (
      <UploadCollection {...args} onDrop={handleDrop}>
        {children}
      </UploadCollection>
    );
  },
};

export const SimulateUpload = {
  render: () => {
    const [children, setChildren] = useState([
      <UploadCollectionItem
        key={'0'}
        file={null}
        fileName={'file-name.txt'}
        uploadState={UploadState.Ready}
        thumbnail={
          <img src="https://raw.githubusercontent.com/UI5/webcomponents/main/docs/images/UI5_logo_water.png" />
        }
      >
        <Text>Uploaded by: Susanne Schmitt · Uploaded On: 2019-04-20</Text>
      </UploadCollectionItem>,
    ]);
    const handleDrop = (e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      files.forEach((file) => {
        setChildren((prev) => [
          ...prev,
          <UploadCollectionItem
            key={file.name}
            file={file}
            fileName={file.name}
            uploadState={UploadState.Ready}
            thumbnail={<Icon name={documentIcon} />}
          >
            <Text>{`Last modified: ${file.lastModifiedDate} · Size: ${(file.size / 1000).toFixed(2)}KB`}</Text>
          </UploadCollectionItem>,
        ]);
      });
    };
    const simulateUpload = () => {
      if (children.length > 0) {
        Children.forEach(children, (child, index) => {
          if (child.props.uploadState === UploadState.Ready) {
            let progress = 0;
            const recTimeout = () => {
              setTimeout(
                () => {
                  progress += Math.floor(Math.random() * 4) + 1;
                  setChildren((prev) => {
                    const updatedChildren = [...prev];
                    updatedChildren[index] = cloneElement(prev[index], {
                      uploadState: UploadState.Uploading,
                      progress: Math.min(progress, 100),
                    });
                    return updatedChildren;
                  });
                  if (progress < 100) {
                    recTimeout();
                  } else {
                    setChildren((prev) => {
                      const updatedChildren = [...prev];
                      updatedChildren[index] = cloneElement(prev[index], {
                        uploadState: UploadState.Complete,
                      });
                      return updatedChildren;
                    });
                  }
                },
                Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
              );
            };
            recTimeout();
          }
        });
      }
    };
    return (
      <UploadCollection
        onDrop={handleDrop}
        header={
          <FlexBox alignItems={FlexBoxAlignItems.Center}>
            <Title>Start upload:</Title>
            <Button onClick={simulateUpload}>Upload!</Button>
          </FlexBox>
        }
      >
        {children}
      </UploadCollection>
    );
  },
};
