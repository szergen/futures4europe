// Helper function to format the date
export const formatDate = (dateStr: string) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const daySuffix = ((day) => {
    if (day % 100 >= 11 && day % 100 <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  })(day);

  return `${day}${daySuffix} of ${month} ${year}`;
};

export const checkIfArrayNeedsUpdateForTags = (
  newArray: any[],
  oldArray: any[]
) => {
  if (!newArray || !oldArray) {
    return true;
  }
  if (newArray.length !== oldArray.length) {
    return true;
  }
  for (let i = 0; i < newArray?.length; i++) {
    if (newArray[i]?._id !== oldArray[i]?._id) {
      return true;
    }
  }
  return false;
};

// Compare 2 arrays strings
export const checkIfArrayNeedsUpdateForStrings = (a: any[], b: any[]) => {
  if (a === b) return false;
  if (a == null || b == null) return true;
  if (a.length !== b.length) return true;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return true;
  }

  return false;
};

export const generateUniqueHash = () => {
  return Math.random().toString(36).substring(2, 7);
};

export default {
  formatDate,
  checkIfArrayNeedsUpdateForTags,
  generateUniqueHash,
};
