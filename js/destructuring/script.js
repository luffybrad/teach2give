const user = {
    id: "USER-123456",
    name: {
      first: "Alice",
      last: "Liddell",
    },
    email: "alice@example.com",
    address: {
      shipping: {
        street: "123 Rabbit Hole",
        city: "Wonderland",
        state: "Fantasy",
        postalCode: "12345",
        country: "WL",
      },
      billing: {
        street: "456 Mad Hatter Lane",
        city: "Tea Party",
        state: "Fantasy",
        postalCode: "67890",
        country: "WL",
      },
    },
    payment: {
      total: "100.00",
      currency: "USD",
      details: {
        subtotal: "75.00",
        tax: "15.00",
        shipping: "10.00",
      },
      transactions: [
        { id: "TXN-123", amount: "50.00", description: "Magic Potion" },
        { id: "TXN-456", amount: "50.00", description: "Enchanted Sword" },
      ],
    },
  };
  
  const {
    id,
    name: { first, last },
    email,
    address: {
      shipping: {
        street: sh_street,
        city: sh_city,
        state: sh_fantasy,
        postalCode: sh_postalCode,
        country: sh_country,
      },
      billing: {
        street: bl_street,
        city: bl_city,
        state: bl_state,
        postalCode: bl_postalCode,
        country: bl_country,
      },
    },
    payment: { transactions },
  } = user;
  
  const personalInfo = document.getElementById("personal-info");
  const shippingAddress = document.getElementById("shipping-address");
  const billingAddress = document.getElementById("billing-address");
  const transactionSection = document.getElementById("transactions");
  
  personalInfo.innerHTML = `<ul>
      <li> Names: ${first} ${last} </li>
      <li> ID: ${id} </li>
      <li> Email: ${email} </li>
  </ul>`;
  
  shippingAddress.innerHTML = `<ul>
  <li> Street: ${sh_street} </li>
  <li> City: ${sh_city} </li>
  <li>   State: ${sh_fantasy}</li>
  <li>  Postal Code: ${sh_postalCode}</li>
  <li>  Country: ${sh_country}</li>
  </ul>
  
  `;
  billingAddress.innerHTML = `<ul>
  <li> Street: ${bl_street} </li>
  <li> City: ${bl_city} </li>
  <li> State: ${bl_state}</li>
  <li>  Postal Code: ${bl_postalCode}</li>
  <li>  Country: ${bl_country}</li>
  </ul>
  
  `;
  
  const transactionList = transactions
    .map(
      (transaction) =>
        `<li>${transaction.id} -  ${transaction.amount} -  ${transaction.description}</li>`
    )
    .join("");
  
  transactionSection.innerHTML = `<ul>${transactionList}</ul>`;