// // normal function can be exported having "this"
// // but we have to bind them in the constructor of that component

export function handleChange(e) {
  const { name, value } = e.target;
  this.setState({ [name]: value });
}

// // arrow function can not be export if having "this" keyword

// // export const handleChange = e => {
// //     const { name, value } = e.target;
// //     this.setState({ [name]: value });
// //   };
