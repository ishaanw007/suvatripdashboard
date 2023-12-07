// Import Images
import product1 from "../../assets/images/products/img-1.png";
import product2 from "../../assets/images/products/img-2.png";
import product3 from "../../assets/images/products/img-3.png";
import product4 from "../../assets/images/products/img-4.png";
import product5 from "../../assets/images/products/img-5.png";

import company1 from "../../assets/images/companies/img-1.png";
import company2 from "../../assets/images/companies/img-2.png";
import company3 from "../../assets/images/companies/img-3.png";
import company5 from "../../assets/images/companies/img-5.png";
import company8 from "../../assets/images/companies/img-8.png";

import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";

const ecomWidgets = [
    {
        id: 1,
        cardColor: "primary",
        label: "Total Earnings",
        badge: "ri-arrow-right-up-line",
        badgeClass: "success",
        percentage: "+16.24",
        counter: "559.25",
        link: "View net earnings",
        bgcolor: "success",
        icon: "bx bx-dollar-circle",
        decimals: 2,
        prefix: "$",
        suffix: "k"
    },
    {
        id: 2,
        cardColor: "secondary",
        label: "Orders",
        badge: "ri-arrow-right-down-line",
        badgeClass: "danger",
        percentage: "-3.57",
        counter: "36894",
        link: "View all orders",
        bgcolor: "info",
        icon: "bx bx-shopping-bag",
        decimals: 0,
        prefix: "",
        separator: ",",
        suffix: ""
    },
    {
        id: 3,
        cardColor: "success",
        label: "Customers",
        badge: "ri-arrow-right-up-line",
        badgeClass: "success",
        percentage: "+29.08",
        counter: "183.35",
        link: "See details",
        bgcolor: "warning",
        icon: "bx bx-user-circle",
        decimals: 2,
        prefix: "",
        suffix: "M"
    },
    {
        id: 4,
        cardColor: "info",
        label: "My Balance",
        badgeClass: "muted",
        percentage: "+0.00",
        counter: "165.89",
        link: "Withdraw money",
        bgcolor: "primary",
        icon: "bx bx-wallet",
        decimals: 2,
        prefix: "$",
        suffix: "k"
    },
];

const bestSellingProducts = [
    {
        id: 1,
        img: product1,
        label: "Branded T-Shirts",
        date: "24 Apr 2021",
        price: 29.0,
        orders: 62,
        stock: 510,
        amount: 1798,
    },
    {
        id: 2,
        img: product2,
        label: "Bentwood Chair",
        date: "19 Mar 2021",
        price: 85.2,
        orders: 35,
        amount: 2982,
    },
    {
        id: 3,
        img: product3,
        label: "Borosil Paper Cup",
        date: "01 Mar 2021",
        price: 14.0,
        orders: 80,
        stock: 749,
        amount: 1120,
    },
    {
        id: 4,
        img: product4,
        label: "One Seater Sofa",
        date: "11 Feb 2021",
        price: 127.5,
        orders: 56,
        amount: 7140,
    },
    {
        id: 5,
        img: product5,
        label: "Stillbird Helmet",
        date: "17 Jan 2021",
        price: 54,
        orders: 74,
        stock: 805,
        amount: 3996,
    },
];

const rooms = [
    {
        id: 1,
        name: "Single Sharing",
        price: "$200",
    },
    {
        id: 2,
        name: "Single Sharing",
        price: "$200",
    },
    {
        id: 3,
        name: "Single Sharing",
        price: "$200",
    },
    {
        id: 4,
        name: "Single Sharing",
        price: "$200",
    },
];

const guests = [
    {
        roomNumber: "#001",
        reservationID: "1234",
        checkIn: "10-12-2023",
        checkOut: "12-12-2023",
        amount: "200"
    },
    {
        roomNumber: "#001",
        reservationID: "1234",
        checkIn: "10-12-2023",
        checkOut: "12-12-2023",
        amount: "200"
    },
    {
        roomNumber: "#001",
        reservationID: "1234",
        checkIn: "10-12-2023",
        checkOut: "12-12-2023",
        amount: "200"
    },
    {
        roomNumber: "#001",
        reservationID: "1234",
        checkIn: "10-12-2023",
        checkOut: "12-12-2023",
        amount: "200"
    },
    {
        roomNumber: "#001",
        reservationID: "1234",
        checkIn: "10-12-2023",
        checkOut: "12-12-2023",
        amount: "200"
    },
    {
        roomNumber: "#001",
        reservationID: "1234",
        checkIn: "10-12-2023",
        checkOut: "12-12-2023",
        amount: "200"
    },
];

const topCategories = [
    {
        id: 1,
        category: "Mobile & Accessories",
        total: "10,294",
    },
    {
        id: 2,
        category: "Desktop",
        total: "6,256",
    },
    {
        id: 3,
        category: "Electronics",
        total: "3,479",
    },
    {
        id: 4,
        category: "Home & Furniture",
        total: "2,275",
    },
    {
        id: 5,
        category: "Grocery",
        total: "1,950",
    },
    {
        id: 6,
        category: "Fashion",
        total: "1,582",
    },
    {
        id: 7,
        category: "Appliances",
        total: "1,037",
    },
    {
        id: 8,
        category: "Beauty, Toys & More",
        total: "924",
    },
    {
        id: 9,
        category: "Food & Drinks",
        total: "701",
    },
    {
        id: 10,
        category: "Toys & Games",
        total: "239",
    },
];

// Revenue Chart Data
const allRevenueData = [
    {
        name: "Orders",
        type: "area",
        data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],
    },
    {
        name: "Earnings",
        type: "bar",
        data: [
            89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36,
            88.51, 36.57,
        ],
    },
    {
        name: "Refunds",
        type: "line",
        data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
    },
];

const monthRevenueData = [
    {
        name: "Orders",
        type: "area",
        data: [54, 85, 66, 18, 29, 31, 12, 14, 38, 72, 33, 27],
    },
    {
        name: "Earnings",
        type: "bar",
        data: [
            89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36,
            88.51, 36.57,
        ],
    },
    {
        name: "Refunds",
        type: "line",
        data: [18, 22, 27, 37, 41, 21, 15, 19, 27, 19, 22, 45],
    },
];

const halfYearRevenueData = [
    {
        name: "Orders",
        type: "area",
        data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],
    },
    {
        name: "Earnings",
        type: "bar",
        data: [
            89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36,
            88.51, 36.57,
        ],
    },
    {
        name: "Refunds",
        type: "line",
        data: [8, 22, 87, 47, 41, 31, 5, 9, 47, 49, 32, 55],
    },
];

const yearRevenueData = [
    {
        name: "Orders",
        type: "area",
        data: [14, 35, 26, 38, 29, 31, 22, 24, 58, 32, 33, 77],
    },
    {
        name: "Earnings",
        type: "bar",
        data: [
            99.25, 88.58, 78.74, 118.87, 87.54, 94.03, 61.24, 58.57, 102.57, 62.36,
            48.51, 66.57,
        ],
    },
    {
        name: "Refunds",
        type: "line",
        data: [58, 42, 47, 57, 71, 21, 15, 69, 17, 39, 52, 55],
    },
];

export { ecomWidgets, bestSellingProducts, rooms, guests, topCategories, allRevenueData, monthRevenueData, halfYearRevenueData, yearRevenueData };