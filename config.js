
const _module = {
    getStorageAccountName: () => {
        const matches = /AccountName=(.*?);/.exec(process.env.AZURE_STORAGE_CONNECTION_STRING);
        return matches[1];
    }
};

module.exports = _module;
