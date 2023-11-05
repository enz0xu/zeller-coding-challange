# A responsive customer list app

This project is a standard React application utilizing TypeScript. It includes a responsive react front-end interface and integrates with GraphQL.

## Getting Started

Follow these instructions to get your development environment up and running.

### Installation

1.  **Clone the repository:**

```sh

git clone https://github.com/enz0xu/zeller-coding-challange

```

2.  **Navigate to the project directory:**

```sh

cd zeller-coding-challange

```

3.  **Install dependencies:**

```sh

npm install

```

### Configuration

To integrate with AWS services, you need to configure the project with your specific AWS settings.

**AWS Configuration:**

Copy your `aws-exports.js` file into the `config` directory of the project. This file contains your AWS project-specific configuration and is crucial for the AWS integration to work properly.

`cp path/to/your/aws-exports.js config/`

> ⚠️ **Important:** Do not commit your `aws-exports.js` to version control as it contains sensitive information.

### Running the Application

After you've configured the project with your AWS settings, you can run the app in development mode.

`npm run start`

This runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000/) to view it in your browser. The page will reload if you make edits. You will also see any lint errors in the console.

### Building for Production

To build the app for production, run the following command:

`npm run build`

This will build the app to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode.
- `npm test` - Launches the test runner in the interactive watch mode.
- `npm run build` - Builds the app for production to the `build` folder.
- `npm run eject` - **Note: this is a one-way operation. Once you `eject`, you can’t go back!**
