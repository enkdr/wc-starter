export const wcTemplate = `
  <style>
    :host {
      display: block;
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
    h2 {
      color: #333;
    }
  </style>
  <div class='wc-example'>
    <h2>WC Example</h2>
    <p><slot name="content">default slot content from wc template</slot></p>
  </div>
`;
