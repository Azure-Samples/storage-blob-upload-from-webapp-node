# Azure Storage Blob Upload from a Node.js Web Application

This sample demonstrates how to use the Azure Storage SDK in the context of an [Express](https://expressjs.com/) application to upload images into Azure Blob Storage.

## Getting started

Clone the repository to your machine:

```bash
git clone https://github.com/Azure-Samples/storage-blob-upload-from-webapp-node.git
```

Change into the `todo -> folder name`:

```bash
cd storage-blob-upload-from-webapp-node
```

Install the dependencies via `npm`:

```bash
npm install
```

## Adding a connection string

Navigate to the [Azure Portal](https://portal.azure.com) and copy the connection string from your storage account (under **Settings** > **Access keys**) in to the `.env.example` file. Once you have pasted your connection string in to the file, rename the file from `.env.example` to `.env`.

## Running the sample

Start the server:

```bash
npm start
```

Navigate to [http://localhost:3000](http://localhost:3000) and upload an image to blob storage.

You can use the [Azure Storage Explorer](https://azure.microsoft.com/features/storage-explorer/) to view blob container to verify your upload is successful.