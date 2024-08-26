const updateDataItem = async (
  collectionName: string,
  itemId: string,
  data: Record<string, any>
) => {
  try {
    const response = await fetch('/api/updateDataItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ collectionName, itemId, data }),
    });

    if (!response.ok) {
      throw new Error('Failed to update data item');
    }

    const updatedItem = await response.json();
    return updatedItem;
  } catch (error) {
    console.error('Error updating data item', error);
  }
};

const getCollectionItem = async (collectionName: string, itemId: string) => {
  try {
    const response = await fetch('/api/getCollectionItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ collectionName, itemId }),
    });

    if (!response.ok) {
      throw new Error('Failed to get collection item');
    }

    const item = await response.json();
    return item;
  } catch (error) {
    console.error('Error getting collection item:', error);
  }
};

const getCollection = async (collectionName: string) => {
  try {
    const response = await fetch('/api/getCollection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ collectionName }),
    });

    if (!response.ok) {
      throw new Error('Failed to get collection');
    }

    const items = await response.json();
    return items;
  } catch (error) {
    console.error('Error getting collection:', error);
  }
};

export { updateDataItem, getCollectionItem, getCollection };
