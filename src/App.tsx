import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
import { Orders } from './pages/Orders';
import { SavedItems } from './pages/SavedItems';
import { Help } from './pages/Help';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { Press } from './pages/Press';
import { Impact } from './pages/Impact';
import { Affiliate } from './pages/Affiliate';
import { Advertise } from './pages/Advertise';
import { PaymentGuide } from './pages/PaymentGuide';
import { Shipping } from './pages/Shipping';
import { Returns } from './pages/Returns';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Cookies } from './pages/Cookies';
import { Deals } from './pages/Deals';
import { BestSellers } from './pages/BestSellers';
import { NewReleases } from './pages/NewReleases';

// Vendor Pages
import { VendorDashboard } from './pages/vendor/VendorDashboard';
import { VendorProfile } from './pages/VendorProfile';
import { VendorOnboarding } from './pages/VendorOnboarding';
import { VendorProducts } from './pages/vendor/VendorProducts';
import { VendorProductForm } from './pages/vendor/VendorProductForm';
import { VendorAnalytics } from './pages/vendor/VendorAnalytics';
import { VendorSettings } from './pages/vendor/VendorSettings';
import { VendorPayouts } from './pages/vendor/VendorPayouts';

// Admin Pages
import { AdminDashboard } from './pages/admin/Dashboard';
import { AdminProducts } from './pages/admin/Products';
import { AdminVerifications } from './pages/admin/Verifications';
import { AdminSettings } from './pages/admin/Settings';
import { AdminAnalytics } from './pages/admin/Analytics';
import { AdminTransactions } from './pages/admin/Transactions';
import { AdminUsers } from './pages/admin/Users';

// Protected Route Components
import { ProtectedRoute } from './components/ProtectedRoute';
import { AdminRoute } from './components/AdminRoute';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/help" element={<Help />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/best-sellers" element={<BestSellers />} />
            <Route path="/new-releases" element={<NewReleases />} />
            <Route path="/payments/guide" element={<PaymentGuide />} />

            {/* Protected User Routes */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-items"
              element={
                <ProtectedRoute>
                  <SavedItems />
                </ProtectedRoute>
              }
            />

            {/* Vendor Routes */}
            <Route
              path="/vendor/onboarding"
              element={
                <ProtectedRoute>
                  <VendorOnboarding />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vendor/dashboard"
              element={
                <ProtectedRoute vendorOnly>
                  <VendorDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vendor/products"
              element={
                <ProtectedRoute vendorOnly>
                  <VendorProducts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vendor/products/new"
              element={
                <ProtectedRoute vendorOnly>
                  <VendorProductForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vendor/products/:id/edit"
              element={
                <ProtectedRoute vendorOnly>
                  <VendorProductForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vendor/analytics"
              element={
                <ProtectedRoute vendorOnly>
                  <VendorAnalytics />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vendor/settings"
              element={
                <ProtectedRoute vendorOnly>
                  <VendorSettings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vendor/payouts"
              element={
                <ProtectedRoute vendorOnly>
                  <VendorPayouts />
                </ProtectedRoute>
              }
            />
            <Route path="/vendor/:id" element={<VendorProfile />} />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/products"
              element={
                <AdminRoute>
                  <AdminProducts />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/verifications"
              element={
                <AdminRoute>
                  <AdminVerifications />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/settings"
              element={
                <AdminRoute>
                  <AdminSettings />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/analytics"
              element={
                <AdminRoute>
                  <AdminAnalytics />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/transactions"
              element={
                <AdminRoute>
                  <AdminTransactions />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <AdminRoute>
                  <AdminUsers />
                </AdminRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;