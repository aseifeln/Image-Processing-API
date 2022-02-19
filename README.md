# Image Processing API Project

## Project Description

A tool that provides an api endpoint to resize an image given it's name, width, and height and saves it on disk. The image resizing is done using the third-party library Sharp.

## Installation

After cloning the repository run the following command to install the dependencies

```bash
npm install
```
Run the following script to make sure Prettier formats the code without errors

```bash
npm run prettier
```

Run the following script to make sure there are no linting errors

```bash
npm run lint
```
Run the following script to start the dev server

```bash
npm run start
```
Run the following script to build the typescript project

```bash
npm run build
```
Run the following command to build the project and run the unit tests

```bash
npm run test
```
## Usage

- Upload an image to the folder images/full in jpg format or use any of the existing images to test the endpoint.

- Start the server

- To resize an image visit the endpoint `http://localhost:3000/api/images?filename={filename}&width={width}&height={height}`. Provide the image filename (without the extension), width, and height in the endpoint query

- A new image will be saved in the images/thumb folder with the name filename_width_height.jpg

- A single image can be resized to different sizes

- If the same endpoint is accessed more than once, the existing resized image will be returned

An error will be thrown in the following cases:

- Filename is not provided, or is not a string, or the image with the filename does not exist

- Image width is not provided, or is not an integer

- Image height is not provided, or is not an integer

    Error messages are sent as a response in json format 


## Copyright and licensing information.

## Known bugs