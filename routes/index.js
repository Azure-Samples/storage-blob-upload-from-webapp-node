if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const
      express = require('express')
    , router = express.Router()
    , { BlobServiceClient } = require("@azure/storage-blob")
    , blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING)
    , containerName = 'thumbnails'
    , config = require('../config')
;

router.get('/', async(req, res, next) => {
  let viewData;
  try{
      const blobs = blobServiceClient.getContainerClient(containerName).listBlobsFlat()
      viewData = {
        title: 'Home',
        viewName: 'index',
        accountName: config.getStorageAccountName(),
        containerName: containerName,
        thumbnails:[]
      };
      for await(let blob of blobs){
          viewData.thumbnails.push(blob);
      }
    
    }catch(err){
      viewData = {
          title: 'Error',
          viewName: 'error',
          message: 'There was an error contacting the blob storage container.',
          error: err
        };
        
        res.status(500);
    }
  res.render(viewData.viewName, viewData);
});



module.exports = router;