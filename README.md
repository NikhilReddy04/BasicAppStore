In this project, let's build an **App Store** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/app-store-output.gif" alt="app store output" style="max-width:90%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/app-store-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/app-store-lg-output-v2.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the **Social** tab should be active and the apps with **Social** as their category should be displayed
- When a value is provided in the search input
  - The apps in the active category, that include search input value in their name should be displayed
  - When another tab is clicked, the apps in the corresponding category, that include search input value in their name should be displayed
  - The search should be case insensitive
- When the search input is empty,
  - All the apps in the active category should be displayed
  - When another tab is clicked, the apps in the corresponding category should be displayed
- The `AppStore` component is provided with `tabsList`. It consists of a list of tabItem objects with the following properties in each tabItem object

  |     Key     | Data Type |
  | :---------: | :-------: |
  |    tabId    |  String   |
  | displayText |  String   |

- The `AppStore` component is provided with `appsList`. It consists of a list of app objects with the following properties in each app object

  |   Key    | Data Type |
  | :------: | :-------: |
  |  appId   |  Number   |
  | appName  |  String   |
  | imageUrl |  String   |
  | category |  String   |

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/app-store-component-structure-breakdown.png" alt="app store component structure breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/AppStore/index.js`
- `src/components/AppStore/index.css`
- `src/components/TabItem/index.js`
- `src/components/TabItem/index.css`
- `src/components/AppItem/index.js`
- `src/components/AppItem/index.css`

</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- You can use the `cursor` CSS property to specify the mouse cursor to be displayed when pointing over an element

  ```
    cursor: pointer;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/cursor-pointer-img.png" alt="cursor pointer" style="width:100px" />

- You can use the below `outline` CSS property for buttons and input elements to remove the highlighting when the elements are clicked

  ```
    outline: none;
  ```

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png](https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png) alt should be **search icon**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #fff1eb; width: 150px; padding: 10px; color: black">Hex: #fff1eb</div>
<div style="background-color: #ace0f9; width: 150px; padding: 10px; color: black">Hex: #ace0f9</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #7b8794; width: 150px; padding: 10px; color: white">Hex: #7b8794</div>
<div style="background-color: #dfe2e5; width: 150px; padding: 10px; color: black">Hex: #dfe2e5</div>
<div style="background-color: #2563eb; width: 150px; padding: 10px; color: white">Hex: #2563eb</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>

</details>

<details>
<summary>Font-families</summary>

- Bree Serif

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
