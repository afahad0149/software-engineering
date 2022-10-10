const db = {
  alex: {
    age: 39,
    city: "London",
    fullName: "Alex Marshall",
  },
  jane: {
    age: 32,
    city: "Paris",
    fullName: "Jane Smith",
  },
};

const findUserByName = (name) => {
  return db[name];
};

module.exports = { findUserByName };
