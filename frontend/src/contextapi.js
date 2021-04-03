import React, { Component } from "react";
import { detailProduct } from "./data";
import axios from "axios";
import UIkit from "uikit";

const ProductContext = React.createContext();
//provider
//consumer

export default class ProductProvider extends Component {
  async componentDidMount() {
    try {
      const productsRes = await axios({
        method: "GET",
        url: "/api/products"
      });
      const storeProducts = productsRes.data;
      this.setState({
        storeProducts
      });
      this.setProducts();
    } catch (err) {
      console.log("GEt products /shop", err);
      return err.response;
    }
  }

  // componentDidMount() {}
  state = {
    products: [],
    storeProducts: [],
    detailProduct: {},
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartTotal: 0,
    cartSubTotal: 0,
    cartTax: 0,
    search: "",
    loading: false,
    currentProducts: [],
    currentPage: 1,
    productsPerPage: 6
  };

  // the setProducts will get values from the db/file so that we dont modify the original db data
  // - imp if original data is needed at a later time
  setProducts = () => {
    let temProducts = [];
    this.state.storeProducts.forEach(item => {
      const singleItem = { ...item };
      temProducts = [...temProducts, singleItem];
    });
    this.setState(() => {
      return { products: temProducts };
    });
  };

  // getItem will get the item with the fix id from the db/array - similar to Query component which is a hook
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  // cart functions
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product]
        };
      },
      () => {
        // call back function
        this.addTotals();
      }
    );
  };
  //modal fucntions
  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  //Cart functions
  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count += 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count -= 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => {
      subTotal += item.total;
    });
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };

  //Search Products
  updateSearch = e => {
    this.setState({ search: e.target.value.substr(0, 20) });
  };

  notify = () => {
    UIkit.notification({
      message: "<span uk-icon='icon: check'></span> Item added to the cart!",
      status: "success",
      pos: "top-left",
      timeout: 2000
    });
  };

  //Paginate function
  paginate = pageNumber => {
    this.setState({
      currentPage: pageNumber
    });
  };

  //Render method
  render() {
    //Pagination
    // get current post
    const indexOfLastProduct =
      this.state.currentPage * this.state.productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - this.state.productsPerPage;
    const currentProducts = this.state.products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          currentProducts: currentProducts,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          updateSearch: this.updateSearch,
          notify: this.notify,
          paginate: this.paginate
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider };
