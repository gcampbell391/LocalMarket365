import React, { Component } from "react"
import Header from "./Header"
import Body from "./Body"


export default class Home extends Component {
    state = {
        allProducts: [],
        cartClicked: false,
        currentProductIndex: 0,
        searchTerm: "",
        sort: "",
        filter: "",
        cart: [],
        viewCart: false
    }

    //Fetches all products and sets them to allProducts state variable 
    componentDidMount() {
        fetch("http://localhost:3000/products")
            .then(resp => resp.json())
            .then(data => {
                this.setState({ allProducts: data })
            })
    }

    //Handles Cart click on cart logo to display/hide cart component/div
    handleCartClick = () => {
        this.setState({ cartClicked: !this.state.cartClicked })
    }

    // Handles slice allproducts into specific return set and includes filter functionality for searchTerm
    // sliceProducts = () => {
    //     let updatedProducts = this.state.allProducts.filter(product => { return product.name.toLowerCase().includes(this.state.searchTerm) })
    //     return updatedProducts.slice(this.state.currentProductIndex, (this.state.currentProductIndex + 12))
    // }

    renderProducts = () => {
        let rtnProducts = this.state.allProducts

        if(this.state.searchTerm !== "" ){
            rtnProducts = rtnProducts.filter(product => { return product.name.toLowerCase().includes(this.state.searchTerm) })
        }
        if(this.state.filter!== "" ){
            let newArray = []
            this.state.filter.forEach(category => { 
                rtnProducts.filter(product => { 
                    if(product.category.includes(category)){
                            newArray.push(product) 
                        }
                    })
            })
            rtnProducts = newArray
            }
        if(this.state.sort !== "" || this.state.sort !== "all" ){
            if(this.state.sort == "Low to High"){
                rtnProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            } else if(this.state.sort == "High to Low") {
                    rtnProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            }
        }
            let finalProducts = rtnProducts.slice(this.state.currentProductIndex, (this.state.currentProductIndex + 12))
            return finalProducts
    }

    //Handles page click to render previous/next.....Needs Fix for if they go past 0
    handlePageClick = (event) => {
        console.log(this.state.currentProductIndex)

        this.state.currentProductIndex < 0 ? alert("You're at the begining") : this.renderMoreProducts(event)
    }

    //Helper Method to render more products for HandlePageClick
    renderMoreProducts = (event) => {
        event.target.innerText === "Next" ? this.setState({ currentProductIndex: this.state.currentProductIndex + 12 }) : this.setState({ currentProductIndex: this.state.currentProductIndex - 12 })
    }

    //As of now just console logs clicked product to console...
    hanldeProductAddToCartBtn = (product) => {
        let inCart = false
        this.state.cart.forEach(item => {
            console.log(item)
            if(item.product === product){
            window.alert("Item is aready in your cart")
            inCart = true
            }
        })
            if(inCart !== true)  {
            this.setState(
            {cart: [ ...this.state.cart,
                { 
            product: product,
            quantity: 1
                }]
            })
        }
        inCart = false
}

    //Handle Input Change to set state variable accordingly 
    handleSearchTermChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    //Handles seting state for filtered radio buttons
    handleCategoryFilter = (event) => {

        if(this.state.filter.includes(event.target.value)){
        let updatedState = this.state.filter.filter(category => category !== event.target.value )
        if (updatedState.length == 0) {
            this.setState({filter: ""})
        } else {
        this.setState({filter: updatedState})
        }
        event.target.checked =  !event.target.checked
        

        } else {
        this.setState({filter: [...this.state.filter, event.target.value]})
        event.target.checked =  !event.target.checked
        }
    }

    renderCategories = () => {
        let allCategories = []
        allCategories =  this.state.allProducts.map(product => { 
        return product.category
        })
        let uniqueItems = Array.from(new Set(allCategories))
        return uniqueItems
    }

    handleSort = (event) => {
       console.log(event.target.value)
       this.setState({sort: event.target.value})
    }

    removeItemFromCart = (productItem)=> {
        let newCart = this.state.cart.filter(item => item.product !== productItem)

        this.setState({cart: newCart})
    }
    
    handleAddQuantityBtn = (quantity, product) => {
        let cartArray = []
        this.state.cart.forEach(item =>{
                if(item.product === product){
                let obj = {
                    product: product,
                    quantity: quantity
                }
                cartArray.push(obj)
                } else {
                    cartArray.push(item)
                }
            })
            this.setState({cart: cartArray})
        }


    handleCheckoutBtn = () => {

        let cartArray = []
        this.state.cart.forEach(item=> {

           let obj = {
                productid: item.product.id,
                quantity: item.quantity
            }
            cartArray.push(obj)
        })

        cartArray.slice(1, ...cartArray)
        console.log(cartArray)

        fetch("http://localhost:3000/purchases/new", {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({cart: cartArray}),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            this.setState({cart: []})
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }

    handleViewCart = () => {
        console.log("happy")
        this.setState({viewCart: !this.state.viewCart})
    }



    render() {
        return (
            <div>
                <Header
                    handleCartClick={this.handleCartClick}
                    handleViewCart = {this.handleViewCart}
                    handleSearchTermChange={this.handleSearchTermChange}
                />
                <Body
                    allProducts={this.renderProducts()}
                    cartClicked={this.state.cartClicked}
                    handlePageClick={this.handlePageClick}
                    hanldeProductAddToCartBtn={this.hanldeProductAddToCartBtn}

                    handleCategoryFilter = {this.handleCategoryFilter}
                    renderCategories = {this.renderCategories()} 
                    handleSort = {this.handleSort}
                    renderCartItems = {this.state.cart}
                    removeItemFromCart = {this.removeItemFromCart}
                    handleAddQuantityBtn = {this.handleAddQuantityBtn}
                    handleCheckoutBtn = { this.handleCheckoutBtn}
                    viewCart = {this.state.viewCart}
                />
            </div>
        )
    }
}