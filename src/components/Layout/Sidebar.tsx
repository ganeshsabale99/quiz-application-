import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  Home, 
  Users, 
  BookOpen, 
  Settings, 
  BarChart3, 
  CreditCard, 
  FileText, 
  UserCheck,
  Building,
  HelpCircle,
  Award,
  Calendar
} from 'lucide-react';

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  roles: string[];
}

const sidebarItems: SidebarItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, roles: ['super-admin', 'admin', 'expert', 'member'] },
  { id: 'clients', label: 'Clients', icon: Building, roles: ['super-admin'] },
  { id: 'users', label: 'Users', icon: Users, roles: ['super-admin', 'admin'] },
  { id: 'experts', label: 'Experts', icon: UserCheck, roles: ['admin'] },
  { id: 'questions', label: 'Question Bank', icon: HelpCircle, roles: ['admin', 'expert'] },
  { id: 'quizzes', label: 'Quizzes', icon: BookOpen, roles: ['admin', 'member'] },
  { id: 'schedule', label: 'Exam Schedule', icon: Calendar, roles: ['admin'] },
  { id: 'payments', label: 'Payments', icon: CreditCard, roles: ['admin', 'member'] },
  { id: 'results', label: 'Results', icon: Award, roles: ['admin', 'member'] },
  { id: 'reports', label: 'Reports', icon: BarChart3, roles: ['super-admin', 'admin'] },
  { id: 'settings', label: 'Settings', icon: Settings, roles: ['super-admin', 'admin', 'expert', 'member'] },
];

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const { user } = useAuth();

  if (!user) return null;

  const filteredItems = sidebarItems.filter(item => 
    item.roles.includes(user.role)
  );

  return (
    <div className="bg-gray-50 w-64 min-h-screen border-r border-gray-200">
      <div className="p-4">
        <nav className="space-y-2">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;