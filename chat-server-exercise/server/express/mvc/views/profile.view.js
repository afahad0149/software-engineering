const profile = (data) => `
<h1>Hi ${data.fullName}</h1>
<p>You live in ${data.city}</p>
<p style="color: green;">You are ${data.age} years old</p>
`;

module.exports = { profile };
