const friends = [
  {
    id: 1,
    firstName: "Blanche",
    lastName: "Fulton",
    parentId: 0,
  },
  {
    id: 2,
    firstName: "Lawson",
    lastName: "Jackson",
    parentId: 1,
  },
  {
    id: 3,
    firstName: "Pansy",
    lastName: "Francis",
    parentId: 1,
  },
  {
    id: 4,
    firstName: "Flora",
    lastName: "Duffy",
    parentId: 1,
  },
  {
    id: 5,
    firstName: "Millicent",
    lastName: "Lee",
    parentId: 2,
  },
  {
    id: 6,
    firstName: "Minerva",
    lastName: "Parsons",
    parentId: 3,
  },
  {
    id: 7,
    firstName: "Wilda",
    lastName: "Walton",
    parentId: 3,
  },
  {
    id: 8,
    firstName: "Brianna",
    lastName: "Richmond",
    parentId: 1,
  },
  {
    id: 9,
    firstName: "Letha",
    lastName: "Pitts",
    parentId: 1,
  },
  {
    id: 10,
    firstName: "Elvia",
    lastName: "Morrow",
    parentId: 7,
  },
  {
    id: 11,
    firstName: "Cook",
    lastName: "Aguilar",
    parentId: 7,
  },
  {
    id: 12,
    firstName: "Selena",
    lastName: "Bauer",
    parentId: 6,
  },
  {
    id: 13,
    firstName: "Sallie",
    lastName: "Sosa",
    parentId: 6,
  },
  {
    id: 14,
    firstName: "Mcconnell",
    lastName: "Hansen",
    parentId: 5,
  },
  {
    id: 15,
    firstName: "Simon",
    lastName: "Perez",
    parentId: 5,
  },
  {
    id: 16,
    firstName: "Jan",
    lastName: "Vaughan",
    parentId: 5,
  },
  {
    id: 17,
    firstName: "Fern",
    lastName: "Wade",
    parentId: 16,
  },
  {
    id: 18,
    firstName: "Ester",
    lastName: "Tillman",
    parentId: 17,
  },
  {
    id: 19,
    firstName: "Hendricks",
    lastName: "Carlson",
    parentId: 16,
  },
  {
    id: 20,
    firstName: "Angelia",
    lastName: "Barton",
    parentId: 19,
  },
];

export default {
  getFriends() {
    return friends;
  },
};
