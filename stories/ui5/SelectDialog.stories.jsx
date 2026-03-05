import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Button,
  FlexBox,
  Label,
  ListItemStandard,
  SelectDialog,
  Text
} from '@ui5/webcomponents-react';
import ListSelectionMode from '@ui5/webcomponents/dist/types/ListSelectionMode.js';
const isChromatic = false;

const meta = {
  title: 'UI5 Components/Select Dialog', component: SelectDialog,
  argTypes: { children: { control: { disable: true } } },
  args: { headerText: 'Select Product', open: isChromatic },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/modals-overlays-selectdialog--default)',
      },
    },

    chromatic: { delay: 1000 },
  },
};

export default meta;

const listItems = [
  { img: Laptop1, description: 'LT-10', text: 'Gaming Laptop' },
  { img: Laptop2, description: 'LT-20', text: 'Business Laptop' },
  { img: Pc2, description: 'HT-10', text: 'Gaming PC' },
  { img: Pc1, description: 'HT-20', text: 'Business PC' },
];
export const Default = {
  render: (args) => {
    const [open, setOpen] = useState(args.open);
    const onButtonClick = () => {
      setOpen(true);
    };
    const handleClose = (e) => {
      setOpen(false);
      args.onClose(e);
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button onClick={onButtonClick}>Open SelectDialog</Button>
        <SelectDialog {...args} open={open} onClose={handleClose}>
          {new Array(40).fill('').map((_, index) => {
            const currentProduct = listItems[index % 4];
            return (
              <ListItemStandard
                selected={index === 1}
                image={<img src={currentProduct.img} alt="Example Image" />}
                description={`${currentProduct.description}${index}`}
                key={`${currentProduct.text}${index}`}
                text={currentProduct.text}
              />
            );
          })}
        </SelectDialog>
      </>
    );
  },
};

export const MultiSelect = {
  render: () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    // predefined selection
    const selectedProducts = { 'HT-102': true, 'HT-203': true, 'HT-1038': true };
    // number of selected items
    const [selectedItems, setSelectedItems] = useState>(selectedProducts);
    const selectedItemsBeforeOpen = useRef(selectedItems);
    const [searchVal, setSearchVal] = useState();
    const [products, setProducts] = useState(Object.keys(selectedProducts));

    const handleBeforeOpen = () => {
      selectedItemsBeforeOpen.current = selectedItems;
    };
    const handleOpen = () => {
      setDialogOpen(true);
    };
    const handleClose = () => {
      setDialogOpen(false);
    };
    // search
    const handleSearch = (e) => {
      setSearchVal(e.detail.value);
    };
    // reset input value of search field
    const handleSearchReset = () => {
      setSearchVal(undefined);
    };
    // select/unselect
    const handleItemClick = (e) => {
      const itemDescription = e.detail.targetItem.dataset.description;
      setSelectedItems((prev) => {
        if (prev[itemDescription]) {
          const { [itemDescription]: _omit, ...rest } = prev;
          return rest;
        } else {
          return { ...prev, [itemDescription]: true };
        }
      });
    };
    // clear selection
    const handleClear = () => {
      setSelectedItems({});
    };
    // confirm selection
    const handleConfirm = () => {
      setProducts(Object.keys(selectedItems));
    };
    // cancel selection
    const handleCancel = () => {
      setSelectedItems(selectedItemsBeforeOpen.current);
    };

    return (
      <>
        <Button onClick={handleOpen}>Open Dialog</Button>
        <SelectDialog
          open={dialogOpen}
          selectionMode={ListSelectionMode.Multiple}
          numberOfSelectedItems={Object.keys(selectedItems).length}
          listProps={{ onSelectionChange: handleItemClick }}
          showClearButton
          rememberSelections
          onClear={handleClear}
          onConfirm={handleConfirm}
          onClose={handleClose}
          onSearchInput={handleSearch}
          onSearch={handleSearch}
          onSearchReset={handleSearchReset}
          onBeforeOpen={handleBeforeOpen}
          onCancel={handleCancel}
        >
          {new Array(40)
            .fill('')
            .map((_, index) => {
              const currentProduct = listItems[index % 4];
              const description = `${currentProduct.description}${index}`;
              const lowerCaseSearchVal = searchVal?.toLowerCase();
              if (
                searchVal &&
                !description.toLowerCase().includes(lowerCaseSearchVal) &&
                !currentProduct.text.toLowerCase().includes(lowerCaseSearchVal)
              ) {
                return null;
              }
              return (
                <ListItemStandard
                  image={<img src={currentProduct.img} alt="Example Image" />}
                  description={`${currentProduct.description}${index}`}
                  data-description={`${currentProduct.description}${index}`}
                  key={`${currentProduct.text}${index}`}
                  selected={selectedItems[description]}
                  text={currentProduct.text}
                />
              );
            })
            .filter(Boolean)}
        </SelectDialog>
        <FlexBox>
          <Label>Selected: </Label>
          <Text>{products.join(', ')}</Text>
        </FlexBox>
      </>
    );
  },
};
