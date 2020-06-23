---
page_type: sample
languages:
- javascript
- nodejs
- 
products:
- azure
- azure-storage
- 
description: "How to stream blobs using Azure Storage JavaScript v12 client libraries"
urlFragment: stream-blobs-node
---

# How to stream blobs using Azure Storage JavaScript v12 client libraries

This samples uses the Azure JavaScript v12.x client libraries to upload blobs to Azure Storage from a web app.

## Prerequisites

If you don't have a Microsoft Azure subscription, you can get a [free account] before you begin.

Clone the repository to your machine:

```bash
git clone https://github.com/Azure-Samples/storage-blob-upload-from-webapp-node.git
```

Then, switch to the app folder:

```bash
cd storage-blob-upload-from-webapp-node
```

Install dependencies via `npm`:

```bash
npm install
```

## This Sample shows how to do following operations of Storage Blobs

* Create a storage account.
* Create a container.
* Upload a stream to [blockblob].

## Adding your storage account name and key

Navigate to your storage account in the [Azure Portal] and copy the account name and key (under **Settings** > **Access keys**) into the `.env.example` file. Save the file and then rename it from `.env.example` to `.env`.

## Running the sample

Start the server:

```bash
npm start
```

Navigate to [http://localhost:3000] and upload an image to blob storage.

You can use the [Azure Storage Explorer] to view blob containers and verify your upload is successful.

<!-- LINKS -->
[blockblob]: https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs
[Azure Portal]: https://portal.azure.com
[http://localhost:3000]: http://localhost:3000
[Azure Storage Explorer]: https://azure.microsoft.com/features/storage-explorer/
[free account]: http://go.microsoft.com/fwlink/?LinkId=330212
