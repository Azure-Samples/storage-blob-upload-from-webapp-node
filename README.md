---
page_type: sample
languages:
- javascript
- html
products:
- azure
description: "Azure Storage Blob Upload from a Node.js Web Application"
urlFragment: storage-blob-upload-from-webapp-node
---

# Azure Storage Blob Upload from a Node.js Web Application

This sample demonstrates how to use the Azure Storage SDK in the context of an [Express](https://expressjs.com/) application to upload images into Azure Blob Storage.

## Getting started

Clone the repository to your machine:

```bash
git clone https://github.com/Azure-Samples/storage-blob-upload-from-webapp-node.git
```

Change into the `storage-blob-upload-from-webapp-node` folder:

```bash
cd storage-blob-upload-from-webapp-node
```

Install dependencies via `npm`:

```bash
npm install
```

## Adding a connection string

Navigate to the [Azure Portal](https://portal.azure.com) and copy the connection string from your storage account (under **Settings** > **Access keys**) in to the `.env.example` file, where indicated.

You must also specify the name of the Blob Storage container that you want to use, and that must already exist in your account, where indicated. 

Once you have pasted your connection string in to the file, rename the file from `.env.example` to `.env`.

## Updating the container name

After creating a storage account and container in Azure go to line 10 of `routes/index.js` and update it with your container name. Go to line 17 in `routes/upload.js` and also update container name. 

## Running the sample

Start the server:

```bash
npm start
```

Navigate to [http://localhost:3000](http://localhost:3000) and upload an image to blob storage.

You can use the [Azure Storage Explorer](https://azure.microsoft.com/features/storage-explorer/) to view blob containers and verify your upload is successful.
