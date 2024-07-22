## NewYorkTimes

This application is created to fetch articles from NewYorkTimes apis and display the list on UI. User can see the list of all articles on homepage and as well as "all-post" page. Also, if user wants to explore any specific article, he can click on that and the post will open in new "post" page.

## Dependencies and Dev-dependecies

### Dependencies

```
    "@babel/preset-env": "^7.24.8",
    "@babel/preset-react": "^7.24.7",
    "autoprefixer": "^10.4.19",
    "babel-jest": "^29.7.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.25.1",
    "react-test-renderer": "^18.3.1"
```

### devDependecies

```
  "@types/react": "^18.3.3",
  "typescript": "^5.2.2",
  "@types/react-dom": "^18.3.0",
  "@vitejs/plugin-react": "^4.3.1",
  "@typescript-eslint/eslint-plugin": "^7.15.0",
  "@typescript-eslint/parser": "^7.15.0",
  "eslint": "^8.57.0",
  "eslint-plugin-react": "^7.34.3",
  "eslint-plugin-react-hooks": "^4.6.2",
  "eslint-plugin-react-refresh": "^0.4.7",

  <!-- included for testing react app with jest and testing-library -->
  "@testing-library/jest-dom": "^6.4.6",
  "@testing-library/react": "^16.0.0",
  "@testing-library/user-event": "^14.5.2",
  "identity-obj-proxy": "^3.0.0",
  "jest": "^29.7.0",
  "jest-environment-jsdom": "^29.7.0",
  "ts-jest": "^29.2.3",
  "@types/jest": "^29.5.12",

  <!-- needed to apply CSS classes from Tailwind -->
  "jest-transformer-svg": "^2.0.2",
  "postcss": "^8.4.39",
  "tailwindcss": "^3.4.6",

  "ts-node": "^10.9.2",
  "vite": "^5.3.4",
```

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install vite@latest`

`npm install`

To Start Server:

`npm run dev`

To Run Test Suite:

`npm run test`

To get Test Coverage

`npm run test -- --coverage`

To Visit App:

`http://localhost:5173/`

## Technologies used

The technologies implemented in this project are `React`, `React-Router`, `Typescript`, `TSX`, and `CSS`. I chose to use the `vite-react` boilerplate to minimize initial setup. I have used `Tailwind css` to minimise efforts in writing css.

For unit test cases, I have used `Jest` with `@testing-library/react`.

## Screenshots

    ### Home page

<img width="1427" alt="image" src="https://github.com/user-attachments/assets/1e39d2a9-09b5-4394-acb0-6f094184945d">

    ### All Posts

<img width="1427" alt="image" src="https://github.com/user-attachments/assets/d1f07c14-7815-40bf-8987-2d220163ac47">

    ### Post

<img width="1427" alt="image" src="https://github.com/user-attachments/assets/eb03e001-19ba-4618-b855-46c12c275988">

    ### Test Coverages

<img width="1195" alt="image" src="https://github.com/user-attachments/assets/0a44bac0-9d51-466c-8690-0ae0b9155f1e">

<img width="1202" alt="image" src="https://github.com/user-attachments/assets/d4f091c2-d101-4a26-8cb4-b8be51a17c5f">

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. Vite is used to generate this project with basic boilerplate.
