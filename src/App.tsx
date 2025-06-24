import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginForm from './components/Auth/LoginForm';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import SuperAdminDashboard from './components/Dashboard/SuperAdminDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import ExpertDashboard from './components/Dashboard/ExpertDashboard';
import MemberDashboard from './components/Dashboard/MemberDashboard';
import QuizInterface from './components/Quiz/QuizInterface';

const AppContent: React.FC = () => {
  const { user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  const renderContent = () => {
    if (activeTab === 'quizzes' && user.role === 'member') {
      return <QuizInterface />;
    }

    switch (activeTab) {
      case 'dashboard':
        switch (user.role) {
          case 'super-admin':
            return <SuperAdminDashboard />;
          case 'admin':
            return <AdminDashboard />;
          case 'expert':
            return <ExpertDashboard />;
          case 'member':
            return <MemberDashboard />;
          default:
            return <div>Dashboard</div>;
        }
      default:
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <p className="text-gray-600">
              This section is under development. More features coming soon!
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;