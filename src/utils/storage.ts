const storeToLocalStorage = (key: string, result: unknown) => {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
    localStorage.setItem(key, JSON.stringify(result));
  };

const getStorageItem = (key: string)  => {
    const storage = localStorage.getItem(key) as string;
    return JSON.parse(storage);
}

  
  export {storeToLocalStorage, getStorageItem}