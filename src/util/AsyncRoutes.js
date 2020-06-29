/**
 * AsyncRoutes
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react';
import Loadable from 'react-loadable';

//app loader
import ContentLoader from '../components/global/loaders/ContentLoader';


// Home two
const AsyncHomePageTwoComponent = Loadable({
   loader: () => import('../routes/home-two'),
   loading: () => <ContentLoader />,
});


// cart
const AsyncCartComponent = Loadable({
   loader: () => import('../routes/cart'),
   loading: () => <ContentLoader />,
});

// checkout
const AsyncCheckOutComponent = Loadable({
   loader: () => import('../routes/check-out'),
   loading: () => <ContentLoader />,
});

// blog detail
const AsyncBlogDetailComponent = Loadable({
   loader: () => import('../routes/blogs/detail'),
   loading: () => <ContentLoader />,
});

// accessories
const AsyncAccessoriesComponent = Loadable({
   loader: () => import('../routes/categories/accessories'),
   loading: () => <ContentLoader />,
});


// Faq
const AsyncFAQComponent = Loadable({
   loader: () => import('../routes/faq'),
   loading: () => <ContentLoader />,
});

// page404
const AsyncPageNotFoundComponent = Loadable({
   loader: () => import('../routes/page-404'),
   loading: () => <ContentLoader />,
});


// privacy policy
const AsyncPrivacyPolicyComponent = Loadable({
   loader: () => import('../routes/privacy-policy'),
   loading: () => <ContentLoader />,
});

// Terms and Condition
const AsyncTermAndConditionComponent = Loadable({
   loader: () => import('../routes/term-&-conditions'),
   loading: () => <ContentLoader />,
});

// product detail
const AsyncProductDetailComponent = Loadable({
   loader: () => import('../routes/products'),
   loading: () => <ContentLoader />,
});

// invoice
const AsyncInvoiceComponent = Loadable({
   loader: () => import('../routes/check-out/final-receipt'),
   loading: () => <ContentLoader />,
});

// shop
const AsyncShopComponent = Loadable({
   loader: () => import('../routes/shop'),
   loading: () => <ContentLoader />,
});

// SignIn
const AsyncSignInPageComponent = Loadable({
   loader: () => import('../routes/session/sign-in'),
   loading: () => <ContentLoader />,
});

// Register
const AsyncSignUpComponent = Loadable({
   loader: () => import('../routes/session/sign-up'),
   loading: () => <ContentLoader />,
});

// ForgetPassword
const AsyncForgetPasswordComponent = Loadable({
   loader: () => import('../routes/session/forget-password'),
   loading: () => <ContentLoader />,
});

// Thank You
const AsyncThankYouComponent = Loadable({
   loader: () => import('../routes/session/thank-you'),
   loading: () => <ContentLoader />,
});

//user account
const AsyncUserAccountComponent = Loadable({
   loader: () => import('../routes/account'),
   loading: () => <ContentLoader />,
});

//user order history
const AsyncUserOrderHistoryComponent = Loadable({
   loader: () => import('../routes/account/order-history'),
   loading: () => <ContentLoader />,
});

//user profile
const AsyncUserProfileComponent = Loadable({
   loader: () => import('../routes/account/profile'),
   loading: () => <ContentLoader />,
});

//user edit 
const AsyncUserEditComponent = Loadable({
   loader: () => import('../routes/account/edit'),
   loading: () => <ContentLoader />,
});

//admin order list
const AsyncOrderListComponent = Loadable({
   loader: () => import('../routes/admin-panel/orders'),
   loading: () => <ContentLoader />,
});

//admin products grid/list
const AsyncProductsGridComponent = Loadable({
   loader: () => import('../routes/admin-panel/products'),
   loading: () => <ContentLoader />,
});

//add product in admin panel
const AsyncProductAddComponent = Loadable({
   loader: () => import('../routes/admin-panel/products/product-add'),
   loading: () => <ContentLoader />,
});

//edit product in admin panel
const AsyncProductEditComponent = Loadable({
   loader: () => import('../routes/admin-panel/products/product-edit'),
   loading: () => <ContentLoader />,
});

//admin account details
const AsyncProfileDetailComponent = Loadable({
   loader: () => import('../routes/admin-panel/account'),
   loading: () => <ContentLoader />,
});

//admin account details
const AsyncBuildComponent = Loadable({
   loader: () => import('../routes/build'),
   loading: () => <ContentLoader />,
});

export {
   AsyncHomePageTwoComponent,
   AsyncCartComponent,
   AsyncCheckOutComponent,
   AsyncBlogDetailComponent,
   AsyncAccessoriesComponent,
   AsyncFAQComponent,
   AsyncPrivacyPolicyComponent,
   AsyncTermAndConditionComponent,
   AsyncProductDetailComponent,
   AsyncInvoiceComponent,
   AsyncShopComponent,
   AsyncSignInPageComponent,
   AsyncSignUpComponent,
   AsyncForgetPasswordComponent,
   AsyncThankYouComponent,
   AsyncUserAccountComponent,
   AsyncUserOrderHistoryComponent,
   AsyncUserProfileComponent,
   AsyncUserEditComponent,
   AsyncOrderListComponent,
   AsyncProductsGridComponent,
   AsyncProductAddComponent,
   AsyncProductEditComponent,
   AsyncProfileDetailComponent,
   AsyncPageNotFoundComponent,
   AsyncBuildComponent
}